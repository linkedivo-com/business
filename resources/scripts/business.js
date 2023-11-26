// variables 
const metaDescription = document.querySelector('meta[name="description"]');

const headerProfileLogo = document.querySelector(`.header-profile-logo`);
const businessName = document.querySelector(`.business-name`);
const businessField = document.querySelector(`.business-field`);

const headerInfoLocation = document.querySelector(`.header-info-location`);
const headerInfoWebsite = document.querySelector(`.header-info-website`);
const headerInfoPhone = document.querySelector(`.header-info-phone`);
const headerInfoEmail = document.querySelector(`.header-info-email`);

const headerQrCode = document.querySelector(`.header-qr-code-img`);


const overview = document.querySelector(`.main-overview`);
const services = document.querySelector(`.main-services`);
const contacts = document.querySelector(`.contact-info-details`);
const mapIframe = document.querySelector(`.contact-info-map iframe`);
const gallery = document.querySelector(`.main-gallery`);
const moreInfo = document.querySelector(`.main-more-info`);

const loader = document.querySelector(`.loader-wrapper`);



let username = 'navan';


window.onload = function () {
    loader.style.display = "none";
}


// read info from API 
async function fetchBusinessInformation() {
    let data;
    try {
        const response = await fetch(`resources/businesses/${username}/information/en.json`);
        if (response) {
            data = await response.json();

        } else {
            console.log('we have error')
        }
        businessInfo = data;
        initializer();
        return data;
    } catch (error) {
        // You can handle errors or return a default value here if needed
        return error;
    }
}

fetchBusinessInformation();


function pageMaker() {
    // header //////////////////////////////////////////////////////

    metaDescription.setAttribute('content', businessInfo.info.metaDescription);
    document.title = `${businessInfo.info.name} | ${businessInfo.info.slogan}`;

    businessName.innerHTML = businessInfo.info.name;
    headerProfileLogo.setAttribute('src', `resources/businesses/${username}/images/${username}-logo.png`);
    headerProfileLogo.setAttribute('alt', `${businessInfo.info.name} logo`);
    businessField.innerHTML = businessInfo.info.slogan; // need to change

    headerInfoLocation.innerHTML = `${businessInfo.info.country} | ${businessInfo.info.city}`

    headerInfoWebsite.setAttribute('href', businessInfo.info.url);
    headerInfoWebsite.innerHTML = `www.${businessInfo.info.url.split('//')[1]}`;

    headerInfoEmail.setAttribute('href', `mailto:${businessInfo.info.email}`);
    headerInfoEmail.innerHTML = businessInfo.info.email;

    headerInfoPhone.setAttribute('href', `tel:${businessInfo.info.phone}`);
    headerInfoPhone.innerHTML = businessInfo.info.phone;

    headerQrCode.setAttribute('src', `resources/businesses/${username}/images/${username}-qr-code.svg`);
    headerQrCode.setAttribute('alt', `${businessInfo.info.name} QR code`);


    // body //////////////////////////////////////////////////////
    // overview
    // summary
    if (businessInfo.overview.mission) {
        overview.innerHTML += `<div class="overview-card details-card box-shadow">
            <h2 class="summary-title">Executive Summary</h2>
            <p class="summary-description">
            ${businessInfo.overview.summary}
            </p>
            </div>`;
    }
    // mission
    if (businessInfo.overview.mission) {
        overview.innerHTML += `
            <div class="overview-card details-card box-shadow">
            <h2 class="mission-title">Mission</h2>
            <p class="mission-description">
            ${businessInfo.overview.mission}
            </p>
            </div>`;
    }
    // vision
    if (businessInfo.overview.vision) {
        overview.innerHTML += `
            <div class="overview-card details-card box-shadow">
            <h2 class="vision-title">Vision</h2>
            <p class="vision-description">
            ${businessInfo.overview.vision}
            </p>
            </div>`;
    }
    // values
    if (businessInfo.overview.values) {
        overview.innerHTML += `
            <div class="overview-card details-card box-shadow">
            <h2 class="values-title">Values</h2>
            <p class="values-description">
            ${businessInfo.overview.values}
            </p>
            </div>`;
    }

    // services
    Object.keys(businessInfo.services).forEach((key) => {
        services.innerHTML += `<div class="service-card box-shadow">
            <div class="service-info">
                <h3>${businessInfo.services[key].title}</h3>
                <p>
                    ${businessInfo.services[key].description};
                </p>
            </div>
            <div class="service-img">
                <img src='resources/businesses/${username}/images/${key}.svg' alt="${username}-${businessInfo.services[key].title}" />
            </div>
        </div>`
    });

    //contacts 
    //address
    if (businessInfo.contacts.address) {
        contacts.innerHTML += `
          <div class="contacts-address info-details-card">
                <i class="fa fa-map-marker-alt"></i>
                <p>${businessInfo.contacts.address}</p>
              </div>`;
    }
    // phone
    if (businessInfo.contacts.phone) {
        contacts.innerHTML += `
            <div class="contacts-phone info-details-card">
        <i class="fa fa-phone"></i>
        <a href="tel:${businessInfo.contacts.phone}">${businessInfo.contacts.phone}</a>
    </div>`;
    }
    // website
    if (businessInfo.contacts.website) {
        contacts.innerHTML += `
              <div class="contacts-phone info-details-card">
                <i class="fa fa-globe"></i>
                <a href="${businessInfo.contacts.website}">www.${businessInfo.contacts.website.split('//')[1]}</a>
              </div>`;
    }
    // email
    if (businessInfo.contacts.email) {
        contacts.innerHTML += `
              <div class="contacts-email info-details-card">
                <i class="fa fa-envelope"></i>
                <a href="mailto:${businessInfo.contacts.email}">${businessInfo.contacts.email}</a>
              </div>`;
    }
    //Social Media
    if (businessInfo.contacts.socialMedia) {
        contacts.innerHTML += `<div class="contacts-social-media info-details-card"></div>`;
    }
    const socialMedia = document.querySelector(`.contacts-social-media`);

    //instagram
    if (businessInfo.contacts.socialMedia.instagram) {
        socialMedia.innerHTML += `
              <a href="${businessInfo.contacts.socialMedia.instagram}">
                  <i class="fab fa-instagram"></i>
                </a>`;
    }
    //facebook
    if (businessInfo.contacts.socialMedia.facebook) {
        socialMedia.innerHTML += `
              <a href="${businessInfo.contacts.socialMedia.facebook}">
                  <i class="fab fa-facebook"></i>
                </a>`;
    }
    //linkedin
    if (businessInfo.contacts.socialMedia.linkedin) {
        socialMedia.innerHTML += `
              <a href="${businessInfo.contacts.socialMedia.linkedin}">
                  <i class="fab fa-linkedin"></i>
                </a>`;
    }
    //whatsapp
    if (businessInfo.contacts.socialMedia.whatsapp) {
        socialMedia.innerHTML += `
              <a href="${businessInfo.contacts.socialMedia.whatsapp}">
                  <i class="fab fa-whatsapp"></i>
                </a>`;
    }
    //telegram
    if (businessInfo.contacts.socialMedia.telegram) {
        socialMedia.innerHTML += `
              <a href="${businessInfo.contacts.socialMedia.telegram}">
                  <i class="fab fa-telegram"></i>
                </a>`;
    }
    //youtube
    if (businessInfo.contacts.socialMedia.youtube) {
        socialMedia.innerHTML += `
              <a href="${businessInfo.contacts.socialMedia.youtube}">
                  <i class="fab fa-youtube"></i>
                </a>`;
    }
    //twitter
    if (businessInfo.contacts.socialMedia.twitter) {
        socialMedia.innerHTML += `
              <a href="${businessInfo.contacts.socialMedia.twitter}">
                  <i class="fab fa-twitter"></i>
                </a>`;
    }
    // google map
    if (businessInfo.contacts.googleMap) {
        mapIframe.setAttribute(`src`, businessInfo.contacts.googleMap)
    }


    console.log(businessInfo.moreInfo)

    // gallery
    Object.keys(businessInfo.gallery).forEach((key) => {
        gallery.innerHTML += `        
        <div class="gallery-card box-shadow">
            <div class="gallery-info">
              <h3>${businessInfo.gallery[key].title}</h3>
              <p>
               ${businessInfo.gallery[key].description}
              </p>
            </div>
            <div class="gallery-img">
                <img src='resources/businesses/${username}/images/${key}.svg' alt="${username}-${businessInfo.gallery[key].title}" /> 
            </div>
          </div>`
    });

    //more info
    Object.keys(businessInfo.moreInfo).forEach((key) => {
        moreInfo.innerHTML += `   
         <div class="more-info-card">
            <a href="${businessInfo.moreInfo[key].link}"
            >- ${businessInfo.moreInfo[key].title}</a>
        </div>`
    });

}

// Initialaizer
function initializer() {
    pageMaker();
}


