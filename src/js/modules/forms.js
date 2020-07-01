import {closeModal} from "./modals";

const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

  const message = {
    loading: "Идет загрузка",
    success: "Спасибо! Мы свяжемся с вами в ближайшее время!",
    failure: "Что то пошло не так..."
  };

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
      console.log((e.target.parentNode).parentNode)

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.append(statusMessage);

      const formData = new FormData(item);

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setInterval(()=>{
            statusMessage.remove();
          },5000);
        });
    });
  });
}

export default forms;

