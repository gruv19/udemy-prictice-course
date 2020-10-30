const images = () => {

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');
    const scroll = calcScroll();
    const body = document.querySelector('body');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    bigImage.style.height = '70vh';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            body.style.overflow = 'hidden';
            body.style.marginRight = `${scroll}px`;
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            body.style.overflow = 'auto';
            body.style.marginRight = `0px`;
        }
    });

};

export default images;