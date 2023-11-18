// variables
const navOverview = document.querySelector(`.nav-overview`);
const navServices = document.querySelector(`.nav-services`);
const navContact = document.querySelector(`.nav-contact`);
const navGallery = document.querySelector(`.nav-gallery`);
const navMoreInfo = document.querySelector(`.nav-more-info`);

const mainOverview = document.querySelector(`.main-overview`);
const mainServices = document.querySelector(`.main-services`);
const mainContact = document.querySelector(`.main-contacts`);
const mainGallery = document.querySelector(`.main-gallery`);
const mainMoreInfo = document.querySelector(`.main-more-info`);

// header nav menu selection

function navMenuInitializr() {
  mainOverview.style.display = `block`;
  mainServices.style.display = `none`;
  mainContact.style.display = `none`;
  mainGallery.style.display = `none`;
  mainMoreInfo.style.display = `none`;

  navOverview.classList.add(`header-nav-selected`);
  navServices.classList.remove(`header-nav-selected`);
  navContact.classList.remove(`header-nav-selected`);
  navGallery.classList.remove(`header-nav-selected`);
  navMoreInfo.classList.remove(`header-nav-selected`);
}
navMenuInitializr();

navOverview.addEventListener("click", () => {
  navMenuInitializr();
});

navServices.addEventListener("click", () => {
  mainOverview.style.display = `none`;
  mainServices.style.display = `block`;
  mainContact.style.display = `none`;
  mainGallery.style.display = `none`;
  mainMoreInfo.style.display = `none`;

  navOverview.classList.remove(`header-nav-selected`);
  navServices.classList.add(`header-nav-selected`);
  navContact.classList.remove(`header-nav-selected`);
  navGallery.classList.remove(`header-nav-selected`);
  navMoreInfo.classList.remove(`header-nav-selected`);
});

navContact.addEventListener("click", () => {
  mainOverview.style.display = `none`;
  mainServices.style.display = `none`;
  mainContact.style.display = `block`;
  mainGallery.style.display = `none`;
  mainMoreInfo.style.display = `none`;

  navOverview.classList.remove(`header-nav-selected`);
  navServices.classList.remove(`header-nav-selected`);
  navContact.classList.add(`header-nav-selected`);
  navGallery.classList.remove(`header-nav-selected`);
  navMoreInfo.classList.remove(`header-nav-selected`);
});

navGallery.addEventListener("click", () => {
  mainOverview.style.display = `none`;
  mainServices.style.display = `none`;
  mainContact.style.display = `none`;
  mainGallery.style.display = `block`;
  mainMoreInfo.style.display = `none`;

  navOverview.classList.remove(`header-nav-selected`);
  navServices.classList.remove(`header-nav-selected`);
  navContact.classList.remove(`header-nav-selected`);
  navGallery.classList.add(`header-nav-selected`);
  navMoreInfo.classList.remove(`header-nav-selected`);
});

navMoreInfo.addEventListener("click", () => {
  mainOverview.style.display = `none`;
  mainServices.style.display = `none`;
  mainContact.style.display = `none`;
  mainGallery.style.display = `none`;
  mainMoreInfo.style.display = `block`;

  navOverview.classList.remove(`header-nav-selected`);
  navServices.classList.remove(`header-nav-selected`);
  navContact.classList.remove(`header-nav-selected`);
  navGallery.classList.remove(`header-nav-selected`);
  navMoreInfo.classList.add(`header-nav-selected`);
});
