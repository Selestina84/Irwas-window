const tabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector)

  function hideTabsContent() {
      content.forEach(item => {
        item.style.display = "none"
      });

      tabs.forEach(item => {
        item.classList.remove(activeClass)
      })
  };

  function showTabsContent(i){
      content[i].style.display ="block";
      tabs[i].classList.add(activeClass)
  }

  hideTabsContent();
  showTabsContent(2);

  header.addEventListener('click', ({target}) => {
    if(target && (target.classList.contains(tabsSelector.replace(/\./, ""))) ||
      (target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
        tabs.forEach((item, i) => {
          if(target == item){
            console.log(target)
            showTabsContent(i)
          };
        });
      };
  });
}

export default tabs;