
const lightTheme = document.querySelector('.fa-toggle-on');
const darkTheme = document.querySelector('.fa-toggle-off');
const theme = document.querySelectorAll('.theme');
const logoTheme = document.querySelectorAll('.theme-logo');
const themeText = document.querySelectorAll('.theme-text');
// Check the user's preferred color scheme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;



function themeSetter(check) {
    if (check === 'light') {
        // theme toggeler
        lightTheme.style.display = 'none';
        darkTheme.style.display = 'inline-flex';
        //for box with background theme
        theme.forEach((e) => {
            e.classList.add('light-theme');
            e.classList.remove('dark-theme');
        })
        //for text teme
        themeText.forEach((e) => {
            e.classList.add('light-theme-text');
            e.classList.remove('dark-theme-text');
        })
        // for logo 
        logoTheme.forEach(function (e) {
            e.setAttribute('src', 'resources/images/linkedivo-logo-dark.svg');
        })
    }
    else if (check === 'dark') {
        // theme toggeler
        lightTheme.style.display = 'inline-flex';
        darkTheme.style.display = 'none';
        //for box with background theme
        theme.forEach((e) => {
            e.classList.add('dark-theme');
            e.classList.remove('light-theme');
        })
        //for text teme
        themeText.forEach((e) => {
            e.classList.add('dark-theme-text');
            e.classList.remove('light-theme-text');
        })
        // for logo 
        logoTheme.forEach(function (e) {
            e.setAttribute('src', 'resources/images/linkedivo-logo-light.svg');
        })
    }

}

let selectedTheme = localStorage.getItem('theme');
if (!selectedTheme) {
    if (prefersDark) {
        themeSetter('dark');
        localStorage.setItem('theme', 'dark');

    } else {
        themeSetter('light');
        localStorage.setItem('theme', 'light');
    }

} else {
    themeSetter(localStorage.getItem('theme'));
}


// if (prefersDark) {
//     themeSetter('dark');

// } else {
//     themeSetter('light');
// }

lightTheme.addEventListener('click', () => {
    themeSetter('light');
    localStorage.setItem('theme', 'light');
})

darkTheme.addEventListener('click', () => {
    themeSetter('dark');
    localStorage.setItem('theme', 'dark');
})