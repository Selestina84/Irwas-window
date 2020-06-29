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

    closeBtn.addEventListener('click', () => {
      modal.style.display = "none";
      document.body.classList.remove('modal-open')
    });

    modal.addEventListener('click', ({target})=> {
      if(target === modal){
        modal.style.display = "none";
        document.body.classList.remove('modal-open')
      }
    });

    document.body.addEventListener('keydown', (e)=> {
      if(e.keyCode === 27){
        modal.style.display = "none";
        document.body.classList.remove('modal-open')
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