document.querySelector('nav.mobile i').addEventListener("click", changeDisplayMenu);

function changeDisplayMenu() {
    const el = document.querySelector('nav.mobile > div')
    if (el.style.display == 'none' || el.style.display == "") {
        el.style.display = 'flex';
    } else {
        el.style.display = 'none';
    }
}

const elems = document.querySelectorAll('nav.mobile ul a')
for (elem of elems) {
    elem.addEventListener('click', hideMenuMobile)
}

function hideMenuMobile() {
    const el = document.querySelector('nav.mobile > div')
    el.style.display = "none"
}