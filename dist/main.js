(()=>{"use strict";var __webpack_modules__={872:()=>{eval("\n;// CONCATENATED MODULE: ./src/homepage.js\nfunction loadHomePage() {\r\n  const contentDiv = document.getElementById('content');\r\n  const headerDiv = document.createElement('div');\r\n  const textDiv = document.createElement('div');\r\n  const imgDiv = document.createElement('div');\r\n  const para = document.createElement('p');\r\n  const titleDiv = document.createElement('div');\r\n  const btn1 = document.createElement('button');\r\n  const btn2 = document.createElement('button');\r\n  const btn3 = document.createElement('button');\r\n\r\n  contentDiv.appendChild(headerDiv);\r\n  contentDiv.appendChild(imgDiv);\r\n  contentDiv.appendChild(textDiv);\r\n  headerDiv.appendChild(titleDiv);\r\n  headerDiv.appendChild(btn1);\r\n  headerDiv.appendChild(btn2);\r\n  headerDiv.appendChild(btn3);\r\n  textDiv.appendChild(para);\r\n\r\n  titleDiv.classList = 'title-div';\r\n  imgDiv.classList = 'img-div';\r\n  para.classList = 'para';\r\n  headerDiv.classList = 'header';\r\n  btn1.setAttribute('id', 'btn1');\r\n  btn2.setAttribute('id', 'btn2');\r\n  btn3.setAttribute('id', 'btn3');\r\n  textDiv.setAttribute('id', 'text-div');\r\n\r\n  titleDiv.innerHTML = 'Really Great Restaurant';\r\n  btn1.innerHTML = 'Home';\r\n  btn2.innerHTML = 'Menu';\r\n  btn3.innerHTML = 'Contact';\r\n  para.innerHTML =\r\n    \"We cook up bright, bold Korean dishes that are totally unique in Vancouver, you won't find our flavors and colors anywhere else. And we serve it all hot, fast and in a format that’s affordable and comfortable for urban Vancouverites to enjoy.\";\r\n\r\n  const myImage = new Image();\r\n  myImage.src = '../img/bacon.jpeg';\r\n  myImage.setAttribute('id', 'img');\r\n  imgDiv.appendChild(myImage);\r\n\r\n  btn1.disabled = true;\r\n\r\n  const content = {\r\n    contentDiv,\r\n    headerDiv,\r\n    myImage,\r\n    textDiv,\r\n    imgDiv,\r\n    btn1,\r\n    btn2,\r\n    btn3,\r\n  };\r\n  return { content };\r\n}\r\n\n;// CONCATENATED MODULE: ./src/menu.js\nfunction loadMenu() {\r\n  const contentDiv2 = document.getElementById('content');\r\n  const grid = document.createElement('div');\r\n  const menuGrid = document.createElement('div');\r\n  const menuItem1 = document.createElement('div');\r\n  const menuItem2 = document.createElement('div');\r\n  const menuItem3 = document.createElement('div');\r\n\r\n  contentDiv2.appendChild(grid).classList = 'grid-container';\r\n  grid.appendChild(menuGrid).classList = 'grid-item';\r\n  grid.appendChild(menuItem1).classList = 'grid-item';\r\n  grid.appendChild(menuItem2).classList = 'grid-item';\r\n  grid.appendChild(menuItem3).classList = 'grid-item';\r\n  \r\n\r\n  const myImage2 = new Image();\r\n  myImage2.src = '../img/onions.jpg';\r\n  myImage2.setAttribute('id', 'img2');\r\n  menuGrid.appendChild(myImage2);\r\n  const myImage3 = new Image();\r\n  myImage3.src = '../img/pepperoni.jpg';\r\n  myImage3.setAttribute('id', 'img3');\r\n  menuItem1.appendChild(myImage3);\r\n  const myImage4 = new Image();\r\n  myImage4.src = '../img/cheese-onion.jpg';\r\n  myImage3.setAttribute('id', 'img4');\r\n  menuItem2.appendChild(myImage4);\r\n  const myImage5 = new Image();\r\n  myImage5.src = '../img/mushroom.jpg';\r\n  myImage5.setAttribute('id', 'img5');\r\n  menuItem3.appendChild(myImage5);\r\n  \r\n  const content = {\r\n    grid,\r\n    menuGrid,\r\n    menuItem1,\r\n    menuItem2,\r\n    menuItem3,\r\n  };\r\n  return { content };\r\n}\r\n\n;// CONCATENATED MODULE: ./src/contact.js\nfunction loadContact() {\r\n  const contentDiv = document.getElementById('content');\r\n \r\n  const form = document.createElement('form');\r\n  const formDiv = document.createElement('div');\r\n  const input1 = document.createElement('input');\r\n  const flex1 = document.createElement('div');\r\n  const flex2 = document.createElement('div');\r\n  const flex3 = document.createElement('div');\r\n  const flex4 = document.createElement('div');\r\n  const contactDiv = document.createElement('div');\r\n  const label1 = document.createElement('label');\r\n  const input2 = document.createElement('input');\r\n  const label2 = document.createElement('label');\r\n  const input3 = document.createElement('input');\r\n  const label3 = document.createElement('label');\r\n  const input4 = document.createElement('input');\r\n  const label4 = document.createElement('label');\r\n\r\n\r\n\r\n  form.classList = 'form';\r\n  formDiv.classList = 'form-container';\r\n  contactDiv.classList = 'contact-div';\r\n\r\n \r\n  input1.setAttribute('type', 'text');\r\n  input1.setAttribute('id', 'firstname');\r\n  input1.setAttribute('name', 'fname');\r\n  label1.setAttribute('for', 'fname');\r\n  input2.setAttribute('type', 'text');\r\n  input2.setAttribute('id', 'lastname');\r\n  input2.setAttribute('name', 'lname');\r\n  label2.setAttribute('for', 'lname');\r\n  input3.setAttribute('type', 'email');\r\n  input3.setAttribute('id', 'mail');\r\n  input3.setAttribute('name', 'email');\r\n  label3.setAttribute('for', 'email');\r\n  input4.setAttribute('type', 'tel');\r\n  input4.setAttribute('id', 'telephone');\r\n  input4.setAttribute('name', 'tele');\r\n  label4.setAttribute('for', 'tele');\r\n\r\n  label1.innerHTML = 'First Name';\r\n  label2.innerHTML = 'Last Name';\r\n  label3.innerHTML = 'Email Address';\r\n  label4.innerHTML = 'Telephone #';\r\n  contactDiv.innerHTML = 'Contact Us';\r\n\r\n\r\n  flex1.appendChild(label1);\r\n  flex1.appendChild(input1);\r\n  flex2.appendChild(label2);\r\n  flex2.appendChild(input2);\r\n  flex3.appendChild(label3);\r\n  flex3.appendChild(input3);\r\n  flex4.appendChild(label4);\r\n  flex4.appendChild(input4);\r\n  form.appendChild(flex1);\r\n  form.appendChild(flex2);\r\n  form.appendChild(flex3);\r\n  form.appendChild(flex4);\r\n  \r\n  input1.parentNode.insertBefore(label1, input1);\r\n  input2.parentNode.insertBefore(label2, input2);\r\n  input3.parentNode.insertBefore(label3, input3);\r\n  input3.parentNode.insertBefore(label3, input3);\r\n  input4.parentNode.insertBefore(label4, input4);\r\n  formDiv.appendChild(contactDiv);\r\n  contentDiv.appendChild(formDiv);\r\n  formDiv.appendChild(form);\r\n}\r\n\n;// CONCATENATED MODULE: ./src/index.js\n\r\n\r\n\r\n\r\nfunction setEnabled(allButtons) {\r\n  allButtons.forEach((element) => {\r\n    element.disabled = false;\r\n  });\r\n}\r\n\r\nfunction clearPage(event) {\r\n  let elementsAfterHeader;\r\n  if (event.currentTarget !== btn1) {\r\n    elementsAfterHeader = document.body.querySelectorAll(\r\n      ':not(.header):not(#content):not(.title-div):not(button)'\r\n    );\r\n  } else {\r\n    elementsAfterHeader = document.body.querySelectorAll(':not(#content');\r\n  }\r\n  elementsAfterHeader.forEach((element) => {\r\n    element.outerHTML = '';\r\n  });\r\n}\r\n\r\nfunction handleHomeButtonClick(event) {\r\n  const allButtons = document.querySelectorAll('button');\r\n  setEnabled(allButtons);\r\n  event.currentTarget.disabled = true;\r\n  clearPage(event);\r\n  loadHomePage();\r\n  initEventListeners();\r\n}\r\n\r\nfunction handleMenuButtonClick(event) {\r\n  const allButtons = document.querySelectorAll('button');\r\n  setEnabled(allButtons);\r\n  event.currentTarget.disabled = true;\r\n  clearPage(event);\r\n  loadMenu();\r\n  initEventListeners();\r\n}\r\n\r\nfunction handleContactButtonClick(event) {\r\n  const allButtons = document.querySelectorAll('button');\r\n  setEnabled(allButtons);\r\n  event.currentTarget.disabled = true;\r\n  clearPage(event);\r\n  loadContact();\r\n  initEventListeners();\r\n}\r\n\r\nfunction initEventListeners() {\r\n  const homeBtn = document.getElementById('btn1');\r\n  const menuBtn = document.getElementById('btn2');\r\n  const contactBtn = document.getElementById('btn3');\r\n\r\n  homeBtn.addEventListener('click', handleHomeButtonClick);\r\n  menuBtn.addEventListener('click', handleMenuButtonClick);\r\n  contactBtn.addEventListener('click', handleContactButtonClick);\r\n}\r\n\r\nloadHomePage();\r\ninitEventListeners();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODcyLmpzIiwibWFwcGluZ3MiOiI7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7O0FDdERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7O0FDeENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkV5QztBQUNSO0FBQ007QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsWUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFFBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxXQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaG9tZXBhZ2UuanM/MTdiZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbWVudS5qcz9hYjA4Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250YWN0LmpzP2Q1NjUiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGltZ0Rpdik7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChidG4xKTtcclxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoYnRuMik7XHJcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGJ0bjMpO1xyXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQocGFyYSk7XHJcblxyXG4gIHRpdGxlRGl2LmNsYXNzTGlzdCA9ICd0aXRsZS1kaXYnO1xyXG4gIGltZ0Rpdi5jbGFzc0xpc3QgPSAnaW1nLWRpdic7XHJcbiAgcGFyYS5jbGFzc0xpc3QgPSAncGFyYSc7XHJcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdCA9ICdoZWFkZXInO1xyXG4gIGJ0bjEuc2V0QXR0cmlidXRlKCdpZCcsICdidG4xJyk7XHJcbiAgYnRuMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bjInKTtcclxuICBidG4zLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuMycpO1xyXG4gIHRleHREaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZXh0LWRpdicpO1xyXG5cclxuICB0aXRsZURpdi5pbm5lckhUTUwgPSAnUmVhbGx5IEdyZWF0IFJlc3RhdXJhbnQnO1xyXG4gIGJ0bjEuaW5uZXJIVE1MID0gJ0hvbWUnO1xyXG4gIGJ0bjIuaW5uZXJIVE1MID0gJ01lbnUnO1xyXG4gIGJ0bjMuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xyXG4gIHBhcmEuaW5uZXJIVE1MID1cclxuICAgIFwiV2UgY29vayB1cCBicmlnaHQsIGJvbGQgS29yZWFuIGRpc2hlcyB0aGF0IGFyZSB0b3RhbGx5IHVuaXF1ZSBpbiBWYW5jb3V2ZXIsIHlvdSB3b24ndCBmaW5kIG91ciBmbGF2b3JzIGFuZCBjb2xvcnMgYW55d2hlcmUgZWxzZS4gQW5kIHdlIHNlcnZlIGl0IGFsbCBob3QsIGZhc3QgYW5kIGluIGEgZm9ybWF0IHRoYXTigJlzIGFmZm9yZGFibGUgYW5kIGNvbWZvcnRhYmxlIGZvciB1cmJhbiBWYW5jb3V2ZXJpdGVzIHRvIGVuam95LlwiO1xyXG5cclxuICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbXlJbWFnZS5zcmMgPSAnLi4vaW1nL2JhY29uLmpwZWcnO1xyXG4gIG15SW1hZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdpbWcnKTtcclxuICBpbWdEaXYuYXBwZW5kQ2hpbGQobXlJbWFnZSk7XHJcblxyXG4gIGJ0bjEuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0ge1xyXG4gICAgY29udGVudERpdixcclxuICAgIGhlYWRlckRpdixcclxuICAgIG15SW1hZ2UsXHJcbiAgICB0ZXh0RGl2LFxyXG4gICAgaW1nRGl2LFxyXG4gICAgYnRuMSxcclxuICAgIGJ0bjIsXHJcbiAgICBidG4zLFxyXG4gIH07XHJcbiAgcmV0dXJuIHsgY29udGVudCB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbWVudUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29udGVudERpdjIuYXBwZW5kQ2hpbGQoZ3JpZCkuY2xhc3NMaXN0ID0gJ2dyaWQtY29udGFpbmVyJztcclxuICBncmlkLmFwcGVuZENoaWxkKG1lbnVHcmlkKS5jbGFzc0xpc3QgPSAnZ3JpZC1pdGVtJztcclxuICBncmlkLmFwcGVuZENoaWxkKG1lbnVJdGVtMSkuY2xhc3NMaXN0ID0gJ2dyaWQtaXRlbSc7XHJcbiAgZ3JpZC5hcHBlbmRDaGlsZChtZW51SXRlbTIpLmNsYXNzTGlzdCA9ICdncmlkLWl0ZW0nO1xyXG4gIGdyaWQuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKS5jbGFzc0xpc3QgPSAnZ3JpZC1pdGVtJztcclxuICBcclxuXHJcbiAgY29uc3QgbXlJbWFnZTIgPSBuZXcgSW1hZ2UoKTtcclxuICBteUltYWdlMi5zcmMgPSAnLi4vaW1nL29uaW9ucy5qcGcnO1xyXG4gIG15SW1hZ2UyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW1nMicpO1xyXG4gIG1lbnVHcmlkLmFwcGVuZENoaWxkKG15SW1hZ2UyKTtcclxuICBjb25zdCBteUltYWdlMyA9IG5ldyBJbWFnZSgpO1xyXG4gIG15SW1hZ2UzLnNyYyA9ICcuLi9pbWcvcGVwcGVyb25pLmpwZyc7XHJcbiAgbXlJbWFnZTMuc2V0QXR0cmlidXRlKCdpZCcsICdpbWczJyk7XHJcbiAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKG15SW1hZ2UzKTtcclxuICBjb25zdCBteUltYWdlNCA9IG5ldyBJbWFnZSgpO1xyXG4gIG15SW1hZ2U0LnNyYyA9ICcuLi9pbWcvY2hlZXNlLW9uaW9uLmpwZyc7XHJcbiAgbXlJbWFnZTMuc2V0QXR0cmlidXRlKCdpZCcsICdpbWc0Jyk7XHJcbiAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKG15SW1hZ2U0KTtcclxuICBjb25zdCBteUltYWdlNSA9IG5ldyBJbWFnZSgpO1xyXG4gIG15SW1hZ2U1LnNyYyA9ICcuLi9pbWcvbXVzaHJvb20uanBnJztcclxuICBteUltYWdlNS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltZzUnKTtcclxuICBtZW51SXRlbTMuYXBwZW5kQ2hpbGQobXlJbWFnZTUpO1xyXG4gIFxyXG4gIGNvbnN0IGNvbnRlbnQgPSB7XHJcbiAgICBncmlkLFxyXG4gICAgbWVudUdyaWQsXHJcbiAgICBtZW51SXRlbTEsXHJcbiAgICBtZW51SXRlbTIsXHJcbiAgICBtZW51SXRlbTMsXHJcbiAgfTtcclxuICByZXR1cm4geyBjb250ZW50IH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiBcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGZsZXgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZmxleDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBmbGV4MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGZsZXg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBpbnB1dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IGxhYmVsNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblxyXG5cclxuXHJcbiAgZm9ybS5jbGFzc0xpc3QgPSAnZm9ybSc7XHJcbiAgZm9ybURpdi5jbGFzc0xpc3QgPSAnZm9ybS1jb250YWluZXInO1xyXG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0ID0gJ2NvbnRhY3QtZGl2JztcclxuXHJcbiBcclxuICBpbnB1dDEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBpbnB1dDEuc2V0QXR0cmlidXRlKCdpZCcsICdmaXJzdG5hbWUnKTtcclxuICBpbnB1dDEuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZuYW1lJyk7XHJcbiAgbGFiZWwxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZuYW1lJyk7XHJcbiAgaW5wdXQyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgaW5wdXQyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGFzdG5hbWUnKTtcclxuICBpbnB1dDIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xuYW1lJyk7XHJcbiAgbGFiZWwyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xuYW1lJyk7XHJcbiAgaW5wdXQzLnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xyXG4gIGlucHV0My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haWwnKTtcclxuICBpbnB1dDMuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XHJcbiAgbGFiZWwzLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2VtYWlsJyk7XHJcbiAgaW5wdXQ0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZWwnKTtcclxuICBpbnB1dDQuc2V0QXR0cmlidXRlKCdpZCcsICd0ZWxlcGhvbmUnKTtcclxuICBpbnB1dDQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RlbGUnKTtcclxuICBsYWJlbDQuc2V0QXR0cmlidXRlKCdmb3InLCAndGVsZScpO1xyXG5cclxuICBsYWJlbDEuaW5uZXJIVE1MID0gJ0ZpcnN0IE5hbWUnO1xyXG4gIGxhYmVsMi5pbm5lckhUTUwgPSAnTGFzdCBOYW1lJztcclxuICBsYWJlbDMuaW5uZXJIVE1MID0gJ0VtYWlsIEFkZHJlc3MnO1xyXG4gIGxhYmVsNC5pbm5lckhUTUwgPSAnVGVsZXBob25lICMnO1xyXG4gIGNvbnRhY3REaXYuaW5uZXJIVE1MID0gJ0NvbnRhY3QgVXMnO1xyXG5cclxuXHJcbiAgZmxleDEuYXBwZW5kQ2hpbGQobGFiZWwxKTtcclxuICBmbGV4MS5hcHBlbmRDaGlsZChpbnB1dDEpO1xyXG4gIGZsZXgyLmFwcGVuZENoaWxkKGxhYmVsMik7XHJcbiAgZmxleDIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcclxuICBmbGV4My5hcHBlbmRDaGlsZChsYWJlbDMpO1xyXG4gIGZsZXgzLmFwcGVuZENoaWxkKGlucHV0Myk7XHJcbiAgZmxleDQuYXBwZW5kQ2hpbGQobGFiZWw0KTtcclxuICBmbGV4NC5hcHBlbmRDaGlsZChpbnB1dDQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmxleDEpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmxleDIpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmxleDMpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmxleDQpO1xyXG4gIFxyXG4gIGlucHV0MS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsYWJlbDEsIGlucHV0MSk7XHJcbiAgaW5wdXQyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxhYmVsMiwgaW5wdXQyKTtcclxuICBpbnB1dDMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGFiZWwzLCBpbnB1dDMpO1xyXG4gIGlucHV0My5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsYWJlbDMsIGlucHV0Myk7XHJcbiAgaW5wdXQ0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxhYmVsNCwgaW5wdXQ0KTtcclxuICBmb3JtRGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybURpdik7XHJcbiAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxufVxyXG4iLCJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gJy4vaG9tZXBhZ2UuanMnO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XHJcblxyXG5mdW5jdGlvbiBzZXRFbmFibGVkKGFsbEJ1dHRvbnMpIHtcclxuICBhbGxCdXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJQYWdlKGV2ZW50KSB7XHJcbiAgbGV0IGVsZW1lbnRzQWZ0ZXJIZWFkZXI7XHJcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQgIT09IGJ0bjEpIHtcclxuICAgIGVsZW1lbnRzQWZ0ZXJIZWFkZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICc6bm90KC5oZWFkZXIpOm5vdCgjY29udGVudCk6bm90KC50aXRsZS1kaXYpOm5vdChidXR0b24pJ1xyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxlbWVudHNBZnRlckhlYWRlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnOm5vdCgjY29udGVudCcpO1xyXG4gIH1cclxuICBlbGVtZW50c0FmdGVySGVhZGVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gJyc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUhvbWVCdXR0b25DbGljayhldmVudCkge1xyXG4gIGNvbnN0IGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICBzZXRFbmFibGVkKGFsbEJ1dHRvbnMpO1xyXG4gIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGNsZWFyUGFnZShldmVudCk7XHJcbiAgbG9hZEhvbWVQYWdlKCk7XHJcbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1lbnVCdXR0b25DbGljayhldmVudCkge1xyXG4gIGNvbnN0IGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICBzZXRFbmFibGVkKGFsbEJ1dHRvbnMpO1xyXG4gIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGNsZWFyUGFnZShldmVudCk7XHJcbiAgbG9hZE1lbnUoKTtcclxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ29udGFjdEJ1dHRvbkNsaWNrKGV2ZW50KSB7XHJcbiAgY29uc3QgYWxsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gIHNldEVuYWJsZWQoYWxsQnV0dG9ucyk7XHJcbiAgZXZlbnQuY3VycmVudFRhcmdldC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgY2xlYXJQYWdlKGV2ZW50KTtcclxuICBsb2FkQ29udGFjdCgpO1xyXG4gIGluaXRFdmVudExpc3RlbmVycygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4xJyk7XHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4yJyk7XHJcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4zJyk7XHJcblxyXG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVIb21lQnV0dG9uQ2xpY2spO1xyXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNZW51QnV0dG9uQ2xpY2spO1xyXG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDb250YWN0QnV0dG9uQ2xpY2spO1xyXG59XHJcblxyXG5sb2FkSG9tZVBhZ2UoKTtcclxuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///872\n")}},__webpack_exports__={};__webpack_modules__[872]()})();