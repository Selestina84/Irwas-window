import checkNumInputs from './checkNumInputs';
import closeModal from './closeModal';

const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');
       // modals = document.querySelectorAll('[data-modal]');

  const message = {
    loading: "Идет загрузка",
    success: "Спасибо! Мы свяжемся с вами в ближайшее время!",
    failure: "Что то пошло не так..."
  };

  checkNumInputs('input[name = "user_phone"]')

  const clearInputs = () => {
    input.forEach(item => item.value = "")

  };

  const postData = async(url, data) => {
    document.querySelector('.status').textContent = message.loading;
    const res = await fetch (url, {
        method: "POST",
        body: data
     });
    return await res.text();
  };



  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.append(statusMessage);

      const formData = new FormData(item);
        if (item.getAttribute('data-calc') === "end") {
          for (let key in state) {
              formData.append(key, state[key]);
          }
        };

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res)
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
         // clearInputs();
          setInterval(()=>{
            form.forEach(item => item.reset())
            statusMessage.remove();
            closeModal('[data-modal]');
          },5000);
        });
    });
  });
}

export default forms;

