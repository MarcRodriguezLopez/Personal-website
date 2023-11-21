document
	.querySelector('nav.mobile i')
	.addEventListener('click', changeDisplayMenu);

function changeDisplayMenu() {
	const el = document.querySelector('nav.mobile > div');
	if (el.style.display == 'none' || el.style.display == '') {
		el.style.display = 'flex';
	} else {
		el.style.display = 'none';
	}
}

const elems = document.querySelectorAll('nav.mobile ul a');
for (elem of elems) {
	elem.addEventListener('click', hideMenuMobile);
}

function hideMenuMobile() {
	const el = document.querySelector('nav.mobile > div');
	el.style.display = 'none';
}

/*const sections = ['me', 'experience', 'education', 'abilities'];
var actualSectionIndex = 0;
const URL = window.location.href;
if (URL.includes('#')) {
	console.log('Holaaaa');
	actualSectionIndex = sections.indexOf('#' + URL.split('#')[1]);
}

document.addEventListener('wheel', (event) => {
	if (event.deltaY > 0) {
		actualSectionIndex =
			actualSectionIndex + 1 < 4 ? actualSectionIndex + 1 : actualSectionIndex;
	} else {
		actualSectionIndex =
			actualSectionIndex - 1 > -1 ? actualSectionIndex - 1 : actualSectionIndex;
	}
	console.log(sections[actualSectionIndex]);
	document.getElementById(sections[actualSectionIndex]).scrollIntoView();
});*/
