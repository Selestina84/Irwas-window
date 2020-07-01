const timer = (deadline) => {

function getTimeRemaining(endTime){
    let timeDiff = Date.parse(endTime)- Date.parse(new Date()),
        seconds = Math.floor((timeDiff/1000) % 60),
        minutes = Math.floor((timeDiff/1000/60) % 60),
        hours = Math.floor((timeDiff/1000/60/60) % 24),
        days = Math.floor(timeDiff/(1000*60*60*24));
    return {
        'total' : timeDiff,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setTimerValue(timerSelector, daysSelector, daysNameSelector, hoursSelector, hoursNameSelector, minutesSelector, minutesNameSelector, secondsSelector, secondsNameSelector, endTime){
    let timer = document.getElementById(timerSelector),
        timerDays = document.querySelector(daysSelector),
        timerDaysName = document.querySelector(daysNameSelector),
        timerHours = document.querySelector(hoursSelector),
        timerHoursName = document.querySelector(hoursNameSelector),
        timerMinutes = document.querySelector(minutesSelector),
        timerMinutesName = document.querySelector(minutesNameSelector),
        timerSeconds = document.querySelector(secondsSelector),
        timerSecondsName = document.querySelector(secondsNameSelector),
        timerInterval = setInterval(updateTimer, 1000);

    function updateTimer(){
        let t = getTimeRemaining(endTime);
        const addZero = (num) => {
          if (num <= 9) {
              return '0' + num;
          } else {
              return num;
          }
        };

        timerDays.textContent = addZero(t.days);
        timerHours.textContent = addZero(t.hours);
        timerMinutes.textContent = addZero(t.minutes);
        timerSeconds.textContent = addZero(t.seconds);

        let days = String(t.days);
        let hours = String(t.hours);
        let minutes = String(t.minutes);
        let seconds = String(t.seconds);

        function changeNames(param, tagName, str1, str2, str3){
          if(/1$/.test(param)){
              tagName.textContent = str1;
          } else if (/2$/.test(param) || /3$/.test(param) || /4$/.test(param)){
              tagName.textContent = str2
          } else {
              tagName.textContent = str3;
          }
        }

        changeNames(days, timerDaysName, 'день', 'дня', 'дней')
        changeNames(hours, timerHoursName, 'час', 'часа', 'часов')
        changeNames(minutes, timerMinutesName, 'минута', 'минуты', 'минут')
        changeNames(seconds, timerSecondsName, 'секунда', 'секунды', 'секунд')

        if(t.total <= 0){
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(timerInterval);
        }
    }

}
setTimerValue('#timer','#days', '[data-days-name]', '#hours', '[data-hours-name]', '#minutes', '[data-minutes-name]', '#seconds', '[data-seconds-name]', deadline);
}

export default timer