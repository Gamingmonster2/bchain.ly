(function () {
  "use strict";

  var grid = document.getElementById("product-grid");
  var modal = document.getElementById("payment-modal");
  var modalProduct = document.getElementById("modal-product");
  var networkTabs = document.getElementById("network-tabs");
  var qrPayment = document.getElementById("qr-payment");
  var qrContainer = document.getElementById("payment-qr");
  var qrHint = document.getElementById("qr-hint");
  var addressInput = document.getElementById("wallet-address");
  var amountInput = document.getElementById("pay-amount");
  var copyButton = document.getElementById("copy-address");
  var copyFeedback = document.getElementById("copy-feedback");
  var orderForm = document.getElementById("order-form");
  var orderEmail = document.getElementById("order-email");
  var orderTx = document.getElementById("order-tx");
  var orderRequest = document.getElementById("order-request");
  var orderFeedback = document.getElementById("order-feedback");
  var orderError = document.getElementById("order-error");
  var txExplorer = document.getElementById("tx-explorer");
  var previewModal = document.getElementById("preview-modal");
  var previewImage = document.getElementById("preview-image");
  var previewHint = document.getElementById("preview-hint");

  /* Change this to the inbox where you want to receive orders. */
  var ORDER_EMAIL = "hello@bchain.ly";

  var activeProduct = null;
  var activeNetwork = null;

  /* ---------- Product catalog ---------- */

  function renderProducts() {
    if (!grid || !window.CATALOG) return;

    var lang = window.I18N ? window.I18N.getLanguage() : "en";
    grid.innerHTML = "";

    window.CATALOG.products.forEach(function (product) {
      var name = window.I18N ? window.I18N.t("product." + product.id + ".name") : product.id;
      var desc = window.I18N ? window.I18N.t("product." + product.id + ".desc") : "";
      var category = window.I18N ? window.I18N.t("product.cat." + product.category) : product.category;
      var fromLabel = window.I18N ? window.I18N.t("products.from") : "from";
      var buyLabel = window.I18N ? window.I18N.t("products.buy") : "Pay with crypto";
      var firstNetwork = Object.keys(product.price)[0];
      var usdPrice = product.price["usdt-trc20"] || product.price[firstNetwork] || "";
      var usdHint = product.usd ? "  ·  $" + product.usd : "";

      var card = document.createElement("article");
      card.className = "product-card";
      card.setAttribute("data-aos", "fade-up");
      card.innerHTML =
        '<div class="product-image" role="button" tabindex="0" data-preview="' +
        product.image +
        '" data-name="' +
        name +
        '" aria-label="' +
        name +
        '">' +
        '<img src="' + product.image + '" alt="' + name + '" draggable="false" />' +
        '<span class="zoom-badge">+</span>' +
        "</div>" +
        '<div class="product-body">' +
        '<span class="product-category">' +
        category +
        "</span>" +
        '<h3 class="product-name">' +
        name +
        "</h3>" +
        '<p class="text-muted product-desc">' +
        desc +
        "</p>" +
        '<div class="product-bottom">' +
        '<span class="product-price">' +
        fromLabel +
        " " +
        usdPrice +
        usdHint +
        "</span>" +
        '<button type="button" class="primary-button product-buy" data-product="' +
        product.id +
        '">' +
        buyLabel +
        "</button>" +
        "</div>" +
        "</div>";

      grid.appendChild(card);
    });
  }

  if (grid) {
    grid.addEventListener("click", function (event) {
      var preview = event.target.closest(".product-image[data-preview]");
      if (preview) {
        openPreview(preview.getAttribute("data-preview"), preview.getAttribute("data-name"));
        return;
      }
      var button = event.target.closest(".product-buy");
      if (button) openModal(button.getAttribute("data-product"));
    });

    grid.addEventListener("keydown", function (event) {
      var preview = event.target.closest(".product-image[data-preview]");
      if (preview && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        openPreview(preview.getAttribute("data-preview"), preview.getAttribute("data-name"));
      }
    });
  }

  /* ---------- Watermarked preview lightbox ---------- */

  function openPreview(src, name) {
    if (!previewModal || !previewImage) return;
    previewImage.src = src;
    previewImage.alt = name || "";
    if (previewHint && window.I18N) previewHint.textContent = window.I18N.t("preview.hint");
    previewModal.hidden = false;
    document.body.classList.add("modal-open");
  }

  function closePreview() {
    if (previewModal) previewModal.hidden = true;
    if (previewImage) previewImage.removeAttribute("src");
    document.body.classList.remove("modal-open");
  }

  /* ---------- Payment modal ---------- */

  function findProduct(id) {
    return window.CATALOG.products.filter(function (p) {
      return p.id === id;
    })[0];
  }

  function renderNetworkTabs() {
    if (!networkTabs) return;
    networkTabs.innerHTML = "";

    window.CATALOG.networks.forEach(function (network) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "network-tab" + (network.id === activeNetwork ? " active" : "");
      button.setAttribute("data-network", network.id);
      button.setAttribute("role", "tab");
      button.textContent = network.label;
      networkTabs.appendChild(button);
    });
  }

  /* ---------- Payment QR ----------
     BIP-21 for BTC, ERC-681 for ETH / USDT-ERC20, plain address for TRC-20
     (Tron wallets have no agreed URI format for token + amount). */
  var USDT_ERC20_CONTRACT = "0xdac17f958d2ee523a2206206994597c13d831ec7";

  function numericPrice(raw) {
    var match = String(raw || "").match(/[0-9]+(?:\.[0-9]+)?/);
    return match ? match[0] : "0";
  }

  function atomicAmount(amount, decimals) {
    var parts = String(amount).split(".");
    var whole = parts[0] || "0";
    var frac = parts[1] || "";
    while (frac.length < decimals) frac += "0";
    frac = frac.slice(0, decimals);
    return (whole + frac).replace(/^0+/, "") || "0";
  }

  function scientificAmount(amount, decimals) {
    var atomic = atomicAmount(amount, decimals);
    if (atomic === "0") return "0";
    var mantissa = atomic.charAt(0) + "." + atomic.slice(1).replace(/0+$/, "");
    if (mantissa.charAt(mantissa.length - 1) === ".") mantissa = mantissa.slice(0, -1);
    return mantissa + "e" + (atomic.length - 1);
  }

  function paymentUri(product, network) {
    var amount = numericPrice(product.price[network.id] || product.price["usdt-trc20"]);
    if (network.id === "btc") return "bitcoin:" + network.address + "?amount=" + amount;
    if (network.id === "eth") return "ethereum:" + network.address + "?value=" + scientificAmount(amount, 18);
    if (network.id === "usdt-erc20") {
      return "ethereum:" + USDT_ERC20_CONTRACT + "/transfer?address=" +
        network.address + "&uint256=" + atomicAmount(amount, 6);
    }
    return network.address;
  }

  function renderQr(product, network) {
    if (!qrContainer) return;
    var tr = window.I18N ? window.I18N.t.bind(window.I18N) : function (key) { return key; };

    if (typeof window.qrcode !== "function") {
      if (qrPayment) qrPayment.hidden = true;
      return;
    }
    if (qrPayment) qrPayment.hidden = false;

    var uri = paymentUri(product, network);
    try {
      var qr = window.qrcode(0, "M");
      qr.addData(uri);
      qr.make();
      qrContainer.innerHTML = qr.createSvgTag({
        cellSize: 4,
        margin: 4,
        scalable: true,
        alt: { text: tr("modal.qrAlt") }
      });
      qrContainer.setAttribute("data-uri", uri);
      if (qrHint) {
        qrHint.textContent = tr(network.id === "usdt-trc20" ? "modal.qrHintManual" : "modal.qrHint");
      }
    } catch (error) {
      qrContainer.innerHTML = "";
      if (qrPayment) qrPayment.hidden = true;
    }
  }

  function updatePaymentDetails() {
    var product = findProduct(activeProduct);
    var network = window.CATALOG.networks.filter(function (n) {
      return n.id === activeNetwork;
    })[0];

    if (!product || !network) return;

    if (modalProduct) {
      modalProduct.textContent = product.id && window.I18N ? window.I18N.t("product." + product.id + ".name") : "";
    }
    if (addressInput) addressInput.value = network.address;
    if (amountInput) amountInput.value = product.price[network.id] || product.price["usdt-trc20"] || "";
    renderQr(product, network);
    if (copyFeedback) copyFeedback.textContent = "";
    if (orderFeedback) orderFeedback.textContent = "";
    if (orderError) orderError.textContent = "";
    if (txExplorer) {
      txExplorer.hidden = true;
      txExplorer.textContent = "";
    }

    renderNetworkTabs();
  }

  function openModal(productId) {
    activeProduct = productId;
    activeNetwork = window.CATALOG.networks[0].id;
    if (orderForm) orderForm.reset();
    if (orderRequest) orderRequest.value = "";
    if (orderFeedback) orderFeedback.textContent = "";

    if (modal) {
      modal.hidden = false;
      document.body.classList.add("modal-open");
    }
    updatePaymentDetails();
  }

  function closeModal() {
    if (modal) modal.hidden = true;
    if (orderFeedback) orderFeedback.textContent = "";
    document.body.classList.remove("modal-open");
    activeProduct = null;
    activeNetwork = null;
  }

  function copyAddress() {
    if (!addressInput) return;
    var value = addressInput.value;

    function showCopied() {
      if (copyFeedback && window.I18N) copyFeedback.textContent = window.I18N.t("modal.copied");
      if (copyButton) {
        var original = window.I18N ? window.I18N.t("modal.copy") : "Copy";
        copyButton.textContent = window.I18N ? window.I18N.t("modal.copied") : "Copied!";
        setTimeout(function () {
          copyButton.textContent = original;
        }, 1600);
      }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(showCopied).catch(function () {
        addressInput.select();
        document.execCommand("copy");
        showCopied();
      });
    } else {
      addressInput.select();
      document.execCommand("copy");
      showCopied();
    }
  }

  /* ---------- Order by email ---------- */

  /* Accept a raw 64-hex hash, a 0x-prefixed hash, or a tx URL pasted from an explorer. */
  function normalizeTx(raw) {
    var value = (raw || "").trim();
    var match = value.match(/(?:\/tx\/|\/transaction\/)([0-9a-fA-Fx]+)/);
    if (match) value = match[1];
    value = value.replace(/^0x/, "");
    return /^[0-9a-fA-F]{64}$/.test(value) ? value : null;
  }

  function submitOrder(event) {
    event.preventDefault();
    if (!orderForm || !orderEmail || !orderTx) return;

    var email = (orderEmail.value || "").trim();
    var tx = normalizeTx(orderTx.value);
    var tr = window.I18N ? window.I18N.t.bind(window.I18N) : function (key) { return key; };

    if (orderError) orderError.textContent = "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (orderError) orderError.textContent = tr("modal.emailInvalid");
      orderEmail.focus();
      return;
    }
    if (!tx) {
      if (orderError) orderError.textContent = tr("modal.txInvalid");
      orderTx.focus();
      return;
    }

    var product = findProduct(activeProduct);
    var network = window.CATALOG.networks.filter(function (n) {
      return n.id === activeNetwork;
    })[0];
    var productName = product ? tr("product." + product.id + ".name") : "";
    var explorerUrl = network ? network.explorer + tx : "";

    var lines = [
      "New order from bchain.ly",
      "-------------------------",
      "Product: " + productName,
      "Product ID: " + (product ? product.id : ""),
      "Price: " + (product ? "$" + product.usd : ""),
      "Network: " + (network ? network.label : ""),
      "Amount to send: " + (amountInput ? amountInput.value : ""),
      "Wallet address: " + (addressInput ? addressInput.value : ""),
      "Buyer email: " + email,
      "Transaction hash: " + tx,
      "Verify: " + explorerUrl,
    ];

    var request = orderRequest ? (orderRequest.value || "").trim() : "";
    if (request) lines.push("Custom request: " + request);

    var subject = "Order - " + productName;
    var href =
      "mailto:" +
      ORDER_EMAIL +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    if (txExplorer && explorerUrl) {
      txExplorer.href = explorerUrl;
      txExplorer.textContent = tr("modal.explorer") + " ↗";
      txExplorer.hidden = false;
    }
    if (orderFeedback) orderFeedback.textContent = tr("modal.submitDone") + " " + ORDER_EMAIL;

    /* Use a temporary link so the shop page is never replaced by the mail app. */
    var mailLink = document.createElement("a");
    mailLink.href = href;
    mailLink.style.display = "none";
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);
  }

  /* ---------- Events ---------- */

  if (orderForm) orderForm.addEventListener("submit", submitOrder);

  document.addEventListener("click", function (event) {
    if (event.target.closest("[data-close-preview]")) {
      closePreview();
      return;
    }
    if (event.target.closest("[data-close-modal]")) {
      closeModal();
      return;
    }

    var tab = event.target.closest(".network-tab");
    if (tab && modal && !modal.hidden) {
      activeNetwork = tab.getAttribute("data-network");
      updatePaymentDetails();
      return;
    }

    var langButton = event.target.closest(".lang-btn");
    if (langButton && window.I18N) {
      window.I18N.setLanguage(langButton.getAttribute("data-lang"));
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (previewModal && !previewModal.hidden) closePreview();
    else if (modal && !modal.hidden) closeModal();
  });

  if (copyButton) copyButton.addEventListener("click", copyAddress);

  /* Deter casual right-click saving / dragging of preview images. */
  document.addEventListener("contextmenu", function (event) {
    if (event.target.closest(".product-image img, .preview-stage img")) event.preventDefault();
  });
  document.addEventListener("dragstart", function (event) {
    if (event.target.closest(".product-image img, .preview-stage img")) event.preventDefault();
  });
  document.addEventListener("selectstart", function (event) {
    if (event.target.closest(".product-image, .preview-stage")) event.preventDefault();
  });

  /* FAQ accordion */
  document.querySelectorAll(".faq-title").forEach(function (item) {
    item.addEventListener("click", function () {
      var content = item.nextElementSibling;
      if (!content) return;
      var isActive = content.classList.contains("active");

      document.querySelectorAll(".faq-content.active").forEach(function (activeItem) {
        activeItem.classList.remove("active");
        if (activeItem.previousElementSibling) activeItem.previousElementSibling.classList.remove("active");
      });

      if (!isActive) {
        content.classList.add("active");
        item.classList.add("active");
      }
    });
  });

  /* ---------- Init ---------- */

  if (window.AOS) {
    window.AOS.init({ once: true, duration: 700 });
  }

  if (window.I18N) {
    window.I18N.onChange(function () {
      renderProducts();
      if (modal && !modal.hidden) {
        var t = window.I18N.t("modal.title");
        var title = document.getElementById("modal-title");
        if (title) title.textContent = t;
        if (copyButton) copyButton.textContent = window.I18N.t("modal.copy");
        updatePaymentDetails();
      }
      if (previewModal && !previewModal.hidden && previewHint) {
        previewHint.textContent = window.I18N.t("preview.hint");
      }
      if (window.AOS) window.AOS.refresh();
    });
    window.I18N.init();
  }

  renderProducts();
})();
