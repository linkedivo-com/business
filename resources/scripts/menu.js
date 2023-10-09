const menu = document.querySelector('.aside-menu');
const menuTitle = document.querySelectorAll('.menu-title');
const lock = document.querySelector('.menu-lock i');
let lockCheker = true;



// menu lock toggle
lock.addEventListener('click', () => {
    if (lock.classList.contains('fa-lock-open')) {
        lock.classList.remove('fa-lock-open');
        lock.classList.add('fa-lock');
        lockCheker = false;
    } else if (lock.classList.contains('fa-lock')) {
        lock.classList.add('fa-lock-open');
        lock.classList.remove('fa-lock');
        lockCheker = true;
    }
})


// functions for hovering menu 
menuTitle.forEach((e) => {
    e.style.display = 'none';
})

menu.addEventListener('mouseenter', () => {
    if (lockCheker) {
        menu.style.minWidth = '220px';
        menuTitle.forEach((e) => {
            e.style.display = 'flex';
        })
    }
})

menu.addEventListener('mouseleave', () => {
    if (lockCheker) {
        menu.style.minWidth = '60px';
        menuTitle.forEach((e) => {
            e.style.display = 'none';
        })
    }
})


