function openSchemat(index) {
    const overlay = document.getElementById('overlay');
    if (!overlay.classList.contains('visible')) {
        const pages = document.querySelector(`.pages[data-schemat-index="${index}"]`);
        overlay.classList.add('visible');
        pages.classList.add('visible');
    }
}

function closeOverlay(event) {
    if (event.target.matches('#overlay, .pages')) {
        const allPages = document.getElementsByClassName('pages');
        const overlay = document.getElementById('overlay');
        Array.from(allPages).forEach(element => {
            element.classList.remove('visible');
        });
        overlay.classList.remove('visible');
    } else {
        event.stopImmediatePropagation();
        return false;
    }
}

function openImg(event) {
    window.open(event.target.src, '_self');
}

function addPages(index, length) {
    const overlay = document.getElementById('overlay');
    const pagesContainer = document.createElement('div');
    pagesContainer.className = 'pages';
    pagesContainer.setAttribute('data-schemat-index', index);
    for (let i = 1; i <= length; ++i) {
        const filename = './assets/pages/' + index + '/' + String(i).padStart(2, '0') + '.jpg';
        const img = document.createElement('img');
        img.src = filename;
        img.className = 'page';
        img.onclick = openImg;
        pagesContainer.appendChild(img);
    }
    overlay.appendChild(pagesContainer);
}

function main() {
    addPages(0, 9);
    addPages(1, 11);
    addPages(2, 9);
    addPages(3, 4);
}
