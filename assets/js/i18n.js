/* bchain.ly bilingual dictionary (English / Arabic) */
window.I18N = (function () {
  "use strict";

  var dictionaries = {
    en: {
      "nav.products": "Products",
      "nav.how": "How it works",
      "nav.why": "Why us",
      "nav.faq": "FAQ",

      "hero.title": "Digital products, paid with crypto.",
      "hero.subtitle":
        "Pick a product, choose your network and send a payment straight to our wallet. No cards, no accounts, no hassle.",
      "hero.cta": "Browse products",
      "hero.ctaSecondary": "How it works",
      "hero.trust": "supported networks",

      "products.title": "Our",
      "products.titleAccent": "products",
      "products.subtitle": "Choose an item below and pay with the cryptocurrency that works best for you.",
      "products.previewNote":
        "Click an image to enlarge it. Previews are reduced and watermarked; the full-resolution file is emailed after payment.",
      "products.buy": "Pay with crypto",
      "products.from": "from",

      "why.title": "Why",
      "why.titleAccent": "bchain.ly?",
      "why.card1Title": "Simple checkout",
      "why.card1Text": "Three steps from product to payment confirmation.",
      "why.card2Title": "Multiple networks",
      "why.card2Text": "Bitcoin, Ethereum and USDT on the networks you already use.",
      "why.card3Title": "No account needed",
      "why.card3Text": "Send the payment from any wallet and contact us with the tx hash.",

      "how.title": "How it",
      "how.titleAccent": "works",
      "how.step1Title": "1. Pick a product",
      "how.step1Text": "Browse the catalog and open the product you want.",
      "how.step2Title": "2. Choose a network",
      "how.step2Text": "Select BTC, ETH or USDT and copy the matching wallet address.",
      "how.step3Title": "3. Send & confirm",
      "how.step3Text": "Send the exact amount, then share your transaction hash so we can verify it.",

      "faq.title": "Frequently asked questions",
      "faq.q1": "Which networks are supported?",
      "faq.a1": "Bitcoin, Ethereum (ERC-20) and USDT on TRC-20. More networks can be added on request.",
      "faq.q2": "How do I confirm my payment?",
      "faq.a2":
        "After sending, enter your email and transaction hash in the payment window and tap Send order details. We verify the payment on-chain and email your files.",
      "faq.q3": "Do you refund crypto payments?",
      "faq.a3": "Payments are final once confirmed on the network. Please double-check the address and amount before sending.",
      "faq.q4": "Can I download the image I see on the site?",
      "faq.a4":
        "No. The site shows a reduced, watermarked preview only. After payment is verified, we email the clean full-resolution file to the address you provide.",

      "cta.title": "Ready to",
      "cta.titleAccent": "pay with crypto?",
      "cta.subtitle": "Browse the catalog and complete your payment in minutes.",
      "cta.button": "Shop now",

      "footer.about": "A bilingual storefront for digital products with simple, direct crypto payments.",
      "footer.linksTitle": "Explore",
      "footer.supportTitle": "Support",
      "footer.faqLink": "Payment help",
      "footer.copyright": "© 2026 bchain.ly. All rights reserved.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",

      "modal.title": "Pay with crypto",
      "modal.qrTitle": "Scan to pay — fastest option",
      "modal.qrHint": "Point your wallet's camera at the code. The address and amount are filled in for you — just confirm and send.",
      "modal.qrHintManual": "Scan to fill the receiving address, then enter the amount shown below manually (TRC-20 wallets do not read amounts from QR codes).",
      "modal.qrManualTitle": "Or copy the details manually",
      "modal.qrAlt": "Payment QR code",
      "modal.addressLabel": "Wallet address",
      "modal.copy": "Copy",
      "modal.copied": "Copied!",
      "modal.amountLabel": "Amount to send",
      "modal.warning":
        "After sending, fill in your email and transaction hash below. We verify the payment manually and deliver your files to that email.",
      "modal.orderTitle": "Order details",
      "modal.emailLabel": "Your email (for delivery)",
      "modal.emailPlaceholder": "you@example.com",
      "modal.txLabel": "Transaction hash (TXID)",
      "modal.txPlaceholder": "Paste the transaction hash",
      "modal.requestLabel": "Custom request (optional)",
      "modal.requestPlaceholder": "Describe the artwork you want: subject, style, colors, size...",
      "modal.submit": "Send order details",
      "modal.submitDone": "Opening your email app — press Send there. If nothing opens, write to",
      "modal.txInvalid": "Enter a valid 64-character transaction hash.",
      "modal.emailInvalid": "Enter a valid email address.",
      "modal.explorer": "Check this transaction",
      "preview.hint": "Watermarked preview — the clean full-size file is delivered by email after payment.",
      "preview.close": "Close preview",

      "product.cat.asset": "Digital artwork",
      "product.p7.name": "Parametric Architecture",
      "product.p7.desc":
        "Futuristic abstract parametric design in minimalist white concrete, sharp geometric shadows and cinematic lighting. Ultra-detailed photorealistic render — no people or living creatures.",
      "product.p8.name": "Desert Film Set",
      "product.p8.desc":
        "Aerial view of a geometric mud-brick film-set village among palm trees and sand dunes in the Tunisian desert. High-angle cinematic composition, sharp 8k-style detail — no people or living creatures.",
      "product.p9.name": "Sahara Golden Dunes",
      "product.p9.desc":
        "Epic cinematic landscape of massive orange Sahara dunes at golden hour, with tiny distant caravan silhouettes on the horizon, long shadows and a strong sense of vastness and isolation. Hyper-realistic detail.",
      "product.p10.name": "Libyan Bedla",
      "product.p10.desc":
        "A traditional Libyan Bedla with intricate silver and gold embroidery, folded inside an antique open wooden wardrobe with jewelry resting nearby. Nobody is wearing it — warm moody window light and vintage photorealistic detail.",
      "product.p11.name": "Retro Anime Steak & Fries",
      "product.p11.desc":
        "2D retro anime illustration of a juicy grilled steak with green herbs and golden crispy fries on a white ceramic plate, set on a wooden table with rising steam. Vibrant colors, clean lines and a cozy warm atmosphere.",
      "product.p12.name": "Retro Anime Spaghetti",
      "product.p12.desc":
        "2D retro anime illustration of spaghetti in rich red tomato marinara sauce, topped with a fresh basil leaf on a white ceramic plate. Rising steam, vibrant appetizing colors and clean outlines.",
    },

    ar: {
      "nav.products": "المنتجات",
      "nav.how": "كيف يعمل",
      "nav.why": "لماذا نحن",
      "nav.faq": "الأسئلة الشائعة",

      "hero.title": "منتجات رقمية، ادفع بالعملات الرقمية.",
      "hero.subtitle": "اختر منتجًا، وحدد الشبكة، وأرسل الدفع مباشرة إلى محفظتنا. لا بطاقات، لا حسابات، لا تعقيد.",
      "hero.cta": "تصفح المنتجات",
      "hero.ctaSecondary": "كيف يعمل",
      "hero.trust": "شبكات مدعومة",

      "products.title": "منتجاتنا",
      "products.titleAccent": "",
      "products.subtitle": "اختر منتجًا من القائمة وادفع بالعملة الرقمية التي تناسبك.",
      "products.previewNote": "اضغط على الصورة لتكبيرها. المعاينات مُصغّرة وموشومة بعلامة مائية، والملف كامل الحجم يُرسل بالبريد بعد الدفع.",
      "products.buy": "ادفع بالعملات الرقمية",
      "products.from": "يبدأ من",

      "why.title": "لماذا",
      "why.titleAccent": "bchain.ly؟",
      "why.card1Title": "دفع بسيط",
      "why.card1Text": "ثلاث خطوات فقط من اختيار المنتج حتى تأكيد الدفع.",
      "why.card2Title": "شبكات متعددة",
      "why.card2Text": "بيتكوين وإيثيريوم وUSDT على الشبكات التي تستخدمها بالفعل.",
      "why.card3Title": "لا حاجة لحساب",
      "why.card3Text": "أرسل الدفع من أي محفظة وتواصل معنا برقم المعاملة.",

      "how.title": "كيف",
      "how.titleAccent": "يعمل",
      "how.step1Title": "١. اختر منتجًا",
      "how.step1Text": "تصفح الكتالوج وافتح المنتج الذي تريده.",
      "how.step2Title": "٢. اختر الشبكة",
      "how.step2Text": "اختر BTC أو ETH أو USDT وانسخ عنوان المحفظة المناسب.",
      "how.step3Title": "٣. أرسل وتأكد",
      "how.step3Text": "أرسل المبلغ بالضبط، ثم شارك رقم المعاملة للتحقق منها.",

      "faq.title": "الأسئلة الشائعة",
      "faq.q1": "ما الشبكات المدعومة؟",
      "faq.a1": "بيتكوين، إيثيريوم (ERC-20) وUSDT على شبكة TRC-20. يمكن إضافة شبكات أخرى عند الطلب.",
      "faq.q2": "كيف أؤكد دفعي؟",
      "faq.a2": "بعد الإرسال، أدخل بريدك ورقم المعاملة في نافذة الدفع واضغط «إرسال تفاصيل الطلب»، وسنتحقق من الدفع على البلوكشين ونرسل ملفاتك عبر البريد.",
      "faq.q3": "هل تستردون مدفوعات العملات الرقمية؟",
      "faq.a3": "المدفوعات نهائية بعد تأكيدها على الشبكة. تحقق من العنوان والمبلغ قبل الإرسال.",
      "faq.q4": "هل يمكنني تنزيل الصورة المعروضة في الموقع؟",
      "faq.a4": "لا. الموقع يعرض معاينة مُصغّرة تحمل علامة مائية فقط، وبعد التحقق من الدفع نرسل الملف الأصلي كامل الحجم إلى بريدك.",

      "cta.title": "جاهز للدفع",
      "cta.titleAccent": "بالعملات الرقمية؟",
      "cta.subtitle": "تصفح الكتالوج وأكمل دفعك خلال دقائق.",
      "cta.button": "تسوق الآن",

      "footer.about": "واجهة ثنائية اللغة للمنتجات الرقمية مع دفع مباشر وبسيط بالعملات الرقمية.",
      "footer.linksTitle": "استكشف",
      "footer.supportTitle": "الدعم",
      "footer.faqLink": "مساعدة الدفع",
      "footer.copyright": "© ٢٠٢٦ bchain.ly. جميع الحقوق محفوظة.",
      "footer.privacy": "سياسة الخصوصية",
      "footer.terms": "شروط الاستخدام",

      "modal.title": "ادفع بالعملات الرقمية",
      "modal.qrTitle": "امسح للدفع — الطريقة الأسرع",
      "modal.qrHint": "وجّه كاميرا محفظتك إلى الرمز، وسيتم تعبئة العنوان والمبلغ تلقائيًا — فقط أكّد وأرسل.",
      "modal.qrHintManual": "امسح لتعبئة عنوان الاستلام، ثم أدخل المبلغ الظاهر أدناه يدويًا (محافظ TRC-20 لا تقرأ المبلغ من رمز QR).",
      "modal.qrManualTitle": "أو انسخ البيانات يدويًا",
      "modal.qrAlt": "رمز الدفع السريع",
      "modal.addressLabel": "عنوان المحفظة",
      "modal.copy": "نسخ",
      "modal.copied": "تم النسخ!",
      "modal.amountLabel": "المبلغ المطلوب إرساله",
      "modal.warning": "بعد الإرسال، أدخل بريدك ورقم المعاملة في النموذج أدناه. نتحقق من الدفع يدويًا ونرسل ملفاتك إلى بريدك.",
      "modal.orderTitle": "تفاصيل الطلب",
      "modal.emailLabel": "بريدك الإلكتروني (لاستلام الملفات)",
      "modal.emailPlaceholder": "you@example.com",
      "modal.txLabel": "رقم المعاملة (TXID)",
      "modal.txPlaceholder": "الصق رقم المعاملة هنا",
      "modal.requestLabel": "طلب مخصص (اختياري)",
      "modal.requestPlaceholder": "صف القطعة التي تريدها: الموضوع، الأسلوب، الألوان، المقاس...",
      "modal.submit": "إرسال تفاصيل الطلب",
      "modal.submitDone": "جارٍ فتح تطبيق البريد — اضغط «إرسال» هناك. إن لم يفتح، أرسل إلى",
      "modal.txInvalid": "أدخل رقم معاملة صالحًا من ٦٤ حرفًا.",
      "modal.emailInvalid": "أدخل بريدًا إلكترونيًا صالحًا.",
      "modal.explorer": "تحقق من هذه المعاملة",
      "preview.hint": "معاينة تحمل علامة مائية — الملف الأصلي كامل الحجم يُرسل بالبريد بعد الدفع.",
      "preview.close": "إغلاق المعاينة",

      "product.cat.asset": "عمل فني رقمي",
      "product.p7.name": "عمارة بارامترية",
      "product.p7.desc": "تصميم بارامتري مجردة مستقبلي بخرسانة بيضاء بسيطة، وظلال هندسية حادة، وإضاءة سينمائية. رسم واقعي فائق التفاصيل — بدون أشخاص أو كائنات حية.",
      "product.p8.name": "موقع تصوير صحراوي",
      "product.p8.desc": "لقطة جوية لقرية طينية هندسية بين النخيل والكثبان الرملية في الصحراء التونسية، بتكوين سينمائي عالٍ وتفاصيل حادة — بدون أشخاص أو كائنات حية.",
      "product.p9.name": "كثبان الصحراء الذهبية",
      "product.p9.desc": "منظر سينمائي مهيب لكثبان رملية برتقالية ضخمة في الصحراء عند الغروب، مع ظلال صغيرة لقافلة بعيدة في الأفق وظلال طويلة وإحساس قوي بالاتساع والعزلة، بتفاصيل واقعية فائقة.",
      "product.p10.name": "البدلة الليبية",
      "product.p10.desc": "بدلة ليبية تقليدية بتطريز فضي وذهبي دقيق، مطوية داخل خزانة خشبية عتيقة مفتوحة وبجانبها مجوهرات، دون أي شخص يرتديها — بإضاءة دافئة من نافذة جانبية وطابع واقعي قديم فائق التفاصيل.",
      "product.p11.name": "ستيك وبطاطس بأنمي ريترو",
      "product.p11.desc": "رسم أنمي ثنائي الأبعاد بأسلوب ريترو لشريحة لحم مشوية عصيرية مرشوشة بالأعشاب الخضراء، مع بطاطس مقلية ذهبية على طبق خزف أبيض فوق طاولة خشبية، وبخار متصاعد. ألوان زاهية وخطوط نظيفة وأجواء دافئة مريحة.",
      "product.p12.name": "سباغيتي بأنمي ريترو",
      "product.p12.desc": "رسم أنمي ثنائي الأبعاد بأسلوب ريترو لسباغيتي بصلصة طماطم مارينارا حمراء غنية، تعلوها ورقة ريحان طازجة على طبق خزف أبيض، مع بخار متصاعد وألوان زاهية شهية وخطوط نظيفة.",
    },
  };

  var current = "en";
  var listeners = [];

  function t(key) {
    var dict = dictionaries[current];
    if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    if (Object.prototype.hasOwnProperty.call(dictionaries.en, key)) return dictionaries.en[key];
    return key;
  }

  function apply(lang) {
    if (!dictionaries[lang]) lang = "en";
    current = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(el.getAttribute("data-i18n"));
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    listeners.forEach(function (fn) {
      fn(lang);
    });
  }

  function setLanguage(lang) {
    try {
      localStorage.setItem("bchain-lang", lang);
    } catch (e) {
      /* storage may be unavailable */
    }
    apply(lang);
  }

  function init() {
    var saved = null;
    try {
      saved = localStorage.getItem("bchain-lang");
    } catch (e) {
      /* ignore */
    }
    if (!saved) {
      saved = navigator.language && navigator.language.toLowerCase().indexOf("ar") === 0 ? "ar" : "en";
    }
    apply(saved);
  }

  return {
    t: t,
    apply: apply,
    init: init,
    setLanguage: setLanguage,
    getLanguage: function () {
      return current;
    },
    onChange: function (fn) {
      listeners.push(fn);
    },
  };
})();
