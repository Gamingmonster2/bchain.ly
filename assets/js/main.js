(function () {
  "use strict";

  var grid = document.getElementById("product-grid");
  var modal = document.getElementById("payment-modal");
  var modalProduct = document.getElementById("modal-product");
  var networkTabs = document.getElementById("network-tabs");
  var addressInput = document.getElementById("wallet-address");
  var amountInput = document.getElementById("pay-amount");
  var copyButton = document.getElementById("copy-address");
  var copyFeedback = document.getElementById("copy-feedback");
  var orderForm = document.getElementById("order-form");
  var orderEmail = document.getElementById("order-email");
  var orderTx = document.getElementById("order-tx");
  var orderFeedback = document.getElementById("order-feedback");

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
      var usdPrice = product.price["usdt-trc20"] || Object.keys(product.price)[0];

      var card = document.createElement("article");
      card.className = "product-card";
      card.setAttribute("data-aos", "fade-up");
      card.innerHTML =
        '<div class="product-image"><img src="' +
        product.image +
        '" alt="' +
        name +
        '" /></div>' +
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
      var button = event.target.closest(".product-buy");
      if (button) openModal(button.getAttribute("data-product"));
    });
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
    if (copyFeedback) copyFeedback.textContent = "";
    if (orderFeedback) orderFeedback.textContent = "";

    renderNetworkTabs();
  }

  function openModal(productId) {
    activeProduct = productId;
    activeNetwork = window.CATALOG.networks[0].id;
    if (orderForm) orderForm.reset();
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

  function submitOrder(event) {
    event.preventDefault();
    if (!orderForm || !orderEmail || !orderTx) return;

    var email = (orderEmail.value || "").trim();
    var tx = (orderTx.value || "").trim();
    if (!email || !tx) return;

    var product = findProduct(activeProduct);
    var network = window.CATALOG.networks.filter(function (n) {
      return n.id === activeNetwork;
    })[0];
    var tr = window.I18N ? window.I18N.t.bind(window.I18N) : function (key) { return key; };
    var productName = product ? tr("product." + product.id + ".name") : "";

    var lines = [
      "New order from bchain.ly",
      "-------------------------",
      "Product: " + productName,
      "Network: " + (network ? network.label : ""),
      "Amount: " + (amountInput ? amountInput.value : ""),
      "Wallet address: " + (addressInput ? addressInput.value : ""),
      "Buyer email: " + email,
      "Transaction hash: " + tx,
    ];

    var subject = "Order - " + productName;
    var href =
      "mailto:" +
      ORDER_EMAIL +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    if (orderFeedback) orderFeedback.textContent = tr("modal.submitDone") + " " + ORDER_EMAIL;
    window.location.href = href;
  }

  /* ---------- Events ---------- */

  if (orderForm) orderForm.addEventListener("submit", submitOrder);

  document.addEventListener("click", function (event) {
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
    if (event.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  if (copyButton) copyButton.addEventListener("click", copyAddress);

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
      if (window.AOS) window.AOS.refresh();
    });
    window.I18N.init();
  }

  renderProducts();
})();
