const closeModal = (selector) => {
  document.querySelectorAll(selector).forEach(item => {
    item.style.display ="none";
    document.body.style.overflow = '';
  })
}

export default closeModal;