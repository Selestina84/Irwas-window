const modals = () => {

  function bindModal(triggerSelector, modalSelector, closeSelector){
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        closeBtn = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener ('click', (e)=>{
        if (e.target){
          e.preventDefault()
        }
        modal.style.display = "block";
        document.body.classList.add('modal-open');
      })
    });

    function closeModal(modalSelector) {
      document.querySelector(modalSelector).style.display ="none";
      document.body.classList.remove('modal-open')
    };

    closeBtn.addEventListener('click', () => {
      closeModal(modalSelector)
    });

    modal.addEventListener('click', ({target})=> {
      if(target === modal){
        closeModal(modalSelector)
      }
    });

    document.body.addEventListener('keydown', (e)=> {
      if(e.keyCode === 27){
        closeModal(modalSelector)
      }
    });

  }

    function showModalByTime(selector, time){
      setTimeout(()=>{
        document.querySelector(selector).style.display = "block",
        document.body.classList.add('modal-open');
      },time)
    };

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
 // showModalByTime('.popup', 60000);

}

export default modals;