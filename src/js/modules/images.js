import calcScroll from './calcScroll'
const images =() => {
  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img'),
    scroll = calcScroll();

    imgPopup.classList.add('popup', 'faded');
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgPopup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'

    workSection.appendChild(imgPopup);

    bigImage.style.maxWidth = '90%';
    bigImage.style.maxHeight = '100vh'


    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.classList.add('modal-open')
            document.body.style.marginRight = `${scroll}px`;
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.classList.remove('modal-open')
            document.body.style.marginRight = `0px`;
        }
    });

}

export default images;