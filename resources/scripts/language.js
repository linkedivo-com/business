// language setter
const languageBtnActive = document.querySelector(".language");
const languageList = document.querySelector(".dropdown-options");

const languageBtn = document.querySelector('[data-translate="language"]');
const options = document.querySelectorAll(".dropdown-options li");
const elements = document.querySelectorAll("[data-translate]");
let lang;

// click on language btn
languageBtnActive.addEventListener("click", function (e) {
  languageList.classList.add("show");
  e.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (languageList.classList.contains("show")) {
    languageList.classList.remove("show");
  }
});

// check and save prefered language on local storage
let selectedLanguage = localStorage.getItem("language");
if (!selectedLanguage) {
  localStorage.setItem("language", "EN");
  languageBtn.innerText = localStorage.getItem("language").toUpperCase();
} else {
  languageBtn.innerText = localStorage.getItem("language").toUpperCase();
}

//language json
const language = {
  en: {
    dir: "ltr",
    language: "EN",
    en: "EN",
    fa: "FA",
    tr: "TR",
    ar: "AR",
    ge: "GE",
    home: "Home",
    search: "Search",
    explorer: "Explorer",
    contact: "Contact",
    favorite: "Favorite",
    addBusiness: "Add Business",
    name: "Innovative E-Commerce Solutions SPC",
  },
  fa: {
    dir: "rtl",
    language: "FA",
    en: "EN",
    fa: "FA",
    tr: "TR",
    ar: "AR",
    ge: "GE",
    home: "خانه",
    search: "جستجو",
    explorer: "کاوش‌گر",
    contact: "تماس",
    favorite: "موردعلاقه",
    addBusiness: "افزودن کسب و کار",
    name: "این یک آزمایش ساده برای یک قالب وب چندزبانه است",
  },
  tr: {
    dir: "ltr",
    language: "TR",
    en: "EN",
    fa: "FA",
    tr: "TR",
    ar: "AR",
    ge: "GE",
    home: "Ana Sayfa",
    search: "Arama",
    explorer: "Keşifçi",
    contact: "İletişim",
    favorite: "Favoriler",
    addBusiness: "İşletme Ekle",
    name: "Bu, çoklu dil web sitesi şablonu için basit bir testtir",
  },
  ge: {
    dir: "ltr",
    language: "GE",
    en: "EN",
    fa: "FA",
    tr: "TR",
    ar: "AR",
    ge: "GE",
    home: "მთავარი",
    search: "ძიება",
    explorer: "ექსპლორერი",
    contact: "კონტაქტი",
    favorite: "ფავორიტი",
    addBusiness: "ბიზნესის დამატება",
    name: "ეს არის საიმედო ტესტი სხვადასხვა ენების ვებ-საიტის შაბლონისთვის",
  },
  ar: {
    dir: "rtl",
    language: "AR",
    en: "EN",
    fa: "FA",
    tr: "TR",
    ar: "AR",
    ge: "GE",
    home: "الصفحة الرئيسية",
    search: "البحث",
    explorer: "المستكشف",
    contact: "الاتصال",
    favorite: "المفضلة",
    addBusiness: "إضافة عمل تجاري",
    name: "هذا اختبار بسيط لقالب موقع ويب متعدد اللغات",
  },
};

function languageUpdateter() {
  elements.forEach((e) => {
    const lang = languageBtn.innerText.toLowerCase();
    const langKey = e.getAttribute("data-translate");
    const direction = language[lang]["dir"];
    const htmlElements = document.documentElement;
    htmlElements.setAttribute("dir", direction);
    e.innerHTML = language[lang][langKey];
    if (direction === "ltr") {
      htmlElements.classList.add("ltr-font");
      htmlElements.classList.remove("rtl-font");
    } else if (direction === "rtl") {
      htmlElements.classList.remove("ltr-font");
      htmlElements.classList.add("rtl-font");
    }
  });
}
languageUpdateter();

// choose language on menu
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    languageList.classList.remove("show");
    console.log(languageList);
    languageBtn.innerHTML = option.textContent;
    languageUpdateter();
    localStorage.setItem("language", option.textContent.toLowerCase());
  });
});
