const checkBoxes = document.querySelectorAll(".form-check-input");
checkBoxes.forEach((eachCheckBox) => {
    eachCheckBox.addEventListener("change", showComponents);
  });
  function showComponents(event) {
    let target = event.target;
    let targetId = target.id;
    // condition to check whether the checkbox is checked or not
    if (target.checked) {
      // show the question label
      document.getElementById("questionLabel").classList.add("d-block");
      document.getElementById("questionLabel").classList.remove("d-none");
      // condition to identify the checkbox that triggers the event
      if (targetId === "smartphone") {
        // if smartphone checkbox is checked, display the phoneUsageBlock
        let phoneUsageBlock = document.getElementById("phoneUsageBlock");
        phoneUsageBlock.classList.add("d-flex");
        phoneUsageBlock.classList.remove("d-none");
      }
      else if (targetId === "laptop") {
        // if laptop checkbox is checked, display the laptopUsageBlock
        let laptopUsageBlock = document.getElementById("laptopUsageBlock");
        laptopUsageBlock.classList.add("d-flex");
        laptopUsageBlock.classList.remove("d-none");
      }
      else if (targetId === "gamingConsole") {
       // if gamingConsole checkbox is checked, display the consoleUsageBlock
        let consoleUsageBlock = document.getElementById("consoleUsageBlock");
        consoleUsageBlock.classList.add("d-flex");
        consoleUsageBlock.classList.remove("d-none");
      }
      else if (targetId === "television") {
        // if television checkbox is checked, display the tvUsageBlock
        let tvUsageBlock = document.getElementById("tvUsageBlock");
        tvUsageBlock.classList.add("d-flex");
        tvUsageBlock.classList.remove("d-none");
      }
    }
    else {
        // check  whether all the checkboxes are unchecked
       let isChecked = false;
       checkBoxes.forEach((eachCheckBox) => {
         if (eachCheckBox.checked) {
           isChecked = true;
         }
       });
        // if all the checkboxes are unchecked, hide the second question label
       if (!isChecked) {
         document.getElementById("questionLabel").classList.add("d-none");
         document.getElementById("questionLabel").classList.remove("d-block");
       }
       // condition to identify the checkbox that triggers the event
       if (targetId === "smartphone") {
         // if smartphone checkbox is unchecked, hide the phoneUsageBlock
         let phoneUsageBlock = document.getElementById("phoneUsageBlock");
         phoneUsageBlock.classList.add("d-none");
         phoneUsageBlock.classList.remove("d-flex");
       }
       else if (targetId === "laptop") {
         // if laptop checkbox is unchecked, hide the laptopUsageBlock
         let laptopUsageBlock = document.getElementById("laptopUsageBlock");
         laptopUsageBlock.classList.add("d-none");
         laptopUsageBlock.classList.remove("d-flex");
       }
       else if (targetId === "gamingConsole") {
        // if gamingConsole checkbox is unchecked, hide the consoleUsageBlock
         let consoleUsageBlock = document.getElementById("consoleUsageBlock");
         consoleUsageBlock.classList.add("d-none");
         consoleUsageBlock.classList.remove("d-flex");
       }
       else if (targetId === "television") {
         // if television checkbox is unchecked, hide the tvUsageBlock
         let tvUsageBlock = document.getElementById("tvUsageBlock");
         tvUsageBlock.classList.add("d-none");
         tvUsageBlock.classList.remove("d-flex");
       }
     }
  }

  nextButton.addEventListener("click", showNextTab);
  function showNextTab() {
    const activeTabLink = document.querySelector('.nav-link.active');
    // get the next tab list item  
    const nextTabListItem = activeTabLink.parentElement.nextElementSibling;
    // condition to check whether the next tab list exists or not
    if (nextTabListItem) {
      // get all the tab links
      let allTabs = document.querySelectorAll('.nav-link');
      // disable all the tab links
      allTabs.forEach((tab) => {
        tab.setAttribute('disabled', 'true');
      });
      // get the next tab link element
      const nextTab = nextTabListItem.querySelector('.nav-link');
        // enable the next tab link
        nextTab.removeAttribute('disabled');
        // display the corresponding tab contents
        nextTab.click();
    }
    if (activeTabLink.textContent === "Electronic usage") {
        nextButton.classList.add("d-none");
        nextButton.classList.remove("d-inline");
        submitButton.classList.add("d-inline");
        submitButton.classList.remove("d-none");
      }
  }

  const prevButton = document.getElementById("prevButton");
  prevButton.addEventListener("click", showPreviousTab);

  function showPreviousTab() {
    const activeTabLink = document.querySelector('.nav-link.active');
    // get the previous tab list element
    const prevTabListItem = activeTabLink.parentElement.previousElementSibling;
     // condition to check whether the previous tab list exists or not
     if (prevTabListItem) {
        // get all the tab links
        let allTabs = document.querySelectorAll('.nav-link');
        // disable all the tab links
        allTabs.forEach((tab) => {
           tab.setAttribute('disabled', 'true');
        });
        // get the previous tab link
        const prevTab = prevTabListItem.querySelector('.nav-link');
        // enable the previous tab link
        prevTab.removeAttribute('disabled');
        // display the corresponding tab contents
        prevTab.click(); 
    }
    if (activeTabLink.textContent === "Shopping") {
        nextButton.classList.add("d-inline");
        nextButton.classList.remove("d-none");
        submitButton.classList.add("d-none");
        submitButton.classList.remove("d-inline");
     }
  }

  const homeButton = document.getElementById("homeButton");
  homeButton.addEventListener("click", showHome);
  function showHome() {
    window.location.href = "index.html";
  }