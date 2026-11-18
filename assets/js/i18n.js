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
      "modal.submitDone": "Opening your email app. If nothing opens, write to",

      "product.cat.gift": "Gift card",
      "product.cat.sub": "Subscription",
      "product.cat.asset": "Digital asset",
      "product.cat.service": "Service",
      "product.p1.name": "Starter Gift Card",
      "product.p1.desc": "A flexible gift card for everyday purchases.",
      "product.p2.name": "Monthly Access Pass",
      "product.p2.desc": "One month of full access to our digital toolkit.",
      "product.p3.name": "Builder Asset Pack",
      "product.p3.desc": "A curated bundle of templates and design files.",
      "product.p4.name": "Priority Support",
      "product.p4.desc": "Fast, dedicated help for your orders and setup.",
      "product.p5.name": "Starter Token Pack",
      "product.p5.desc": "A starter bundle for your first on-chain project.",
      "product.p6.name": "Pro Bundle",
      "product.p6.desc": "Everything in one package at a bundle price.",
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
      "modal.submitDone": "جارٍ فتح تطبيق البريد. إذا لم يفتح، أرسل إلى",

      "product.cat.gift": "بطاقة هدية",
      "product.cat.sub": "اشتراك",
      "product.cat.asset": "أصل رقمي",
      "product.cat.service": "خدمة",
      "product.p1.name": "بطاقة هدية للمبتدئين",
      "product.p1.desc": "بطاقة هدية مرنة للمشتريات اليومية.",
      "product.p2.name": "اشتراك الوصول الشهري",
      "product.p2.desc": "شهر كامل من الوصول الكامل إلى أدواتنا الرقمية.",
      "product.p3.name": "حزمة الأصول للمطورين",
      "product.p3.desc": "مجموعة مختارة من القوالب وملفات التصميم.",
      "product.p4.name": "دعم ذو أولوية",
      "product.p4.desc": "مساعدة سريعة ومخصصة لطلباتك وإعداداتك.",
      "product.p5.name": "حزمة توكن للمبتدئين",
      "product.p5.desc": "حزمة تمهيدية لمشروعك الأول على البلوكشين.",
      "product.p6.name": "الحزمة الاحترافية",
      "product.p6.desc": "كل شيء في حزمة واحدة بسعر مخفض.",
      "product.p7.name": "عمارة بارامترية",
      "product.p7.desc": "تصميم بارامتري مجردة مستقبلي بخرسانة بيضاء بسيطة، وظلال هندسية حادة، وإضاءة سينمائية. رسم واقعي فائق التفاصيل — بدون أشخاص أو كائنات حية.",
      "product.p8.name": "موقع تصوير صحراوي",
      "product.p8.desc": "لقطة جوية لقرية طينية هندسية بين النخيل والكثبان الرملية في الصحراء التونسية، بتكوين سينمائي عالٍ وتفاصيل حادة — بدون أشخاص أو كائنات حية.",
      "product.p9.name": "كثبان الصحراء الذهبية",
      "product.p9.desc": "منظر سينمائي مهيب لكثبان رملية برتقالية ضخمة في الصحراء عند الغروب، مع ظلال صغيرة لقافلة بعيدة في الأفق وظلال طويلة وإحساس قوي بالاتساع والعزلة، بتفاصيل واقعية فائقة.",
      "product.p10.name": "البدلة الليبية",
      "product.p10.desc": "بدلة ليبية تقليدية بتطريز فضي وذهبي دقيق، مطوية داخل خزانة خشبية عتيقة مفتوحة وبجانبها مجوهرات، دون أي شخص يرتديها — بإضاءة دافئة من نافذة جانبية وطابع واقعي قديم فائق التفاصيل.",
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
