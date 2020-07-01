const closeModal = (selector) => {
  document.querySelectorAll(selector).forEach(item => {
    item.style.display ="none";
    document.body.classList.remove('modal-open')
  })
}

export default closeModal;