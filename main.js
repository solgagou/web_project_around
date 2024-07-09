!function(){var e={43:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.p="",function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function r(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}var o=function(){return e=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.formElement=t,this.formSelector=n.formSelector,this.inputSelector=n.inputSelector,this.inactiveButtonClass=n.inactiveButtonClass,this.inputErrorClass=n.inputErrorClass,this.errorClass=n.errorClass,this.buttonElement=this.formElement.querySelector(n.submitButtonSelector),this.inputList=Array.from(this.formElement.querySelectorAll(this.inputSelector))},(n=[{key:"_showInputError",value:function(e,t){this.formError=this.formElement.querySelector(".".concat(e.id,"-error")),e.classList.add(this.inputErrorClass),this.formError.textContent=t,this.formError.classList.add(this.errorClass)}},{key:"_hideInputError",value:function(e){this.formError=this.formElement.querySelector(".".concat(e.id,"-error")),e.classList.remove(this.inputErrorClass),this.formError.classList.remove(this.errorClass),this.formError.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this.inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this.buttonElement.classList.add(this.inactiveButtonClass),this.buttonElement.setAttribute("disabled",!0)):(this.buttonElement.classList.remove(this.inactiveButtonClass),this.buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this.formElement.addEventListener("submit",(function(e){e.preventDefault()})),this.inputList.forEach((function(t){e._checkInputValidity(t),e._toggleButtonState(),t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}}])&&t(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function u(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var a=function(){return e=function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t,this._link=n,this._template=r,this._handleCardClick=o},(t=[{key:"_getTemplate",value:function(){return this._template.content.cloneNode(!0)}},{key:"_handleLikeButton",value:function(){this._likeButton.classList.toggle("card__button_active")}},{key:"_handleRemoveCard",value:function(){this._cardElement.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._imageElement.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._deleteButton.addEventListener("click",(function(){e._handleRemoveCard()})),this._likeButton.addEventListener("click",(function(){e._handleLikeButton()}))}},{key:"_setProperties",value:function(){this._imageElement.src=this._link,this._imageElement.alt=this._title,this._titleElement.textContent=this._title}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardElement=this._element.querySelector(".card"),this._imageElement=this._element.querySelector(".card__image"),this._titleElement=this._element.querySelector(".card__title"),this._likeButton=this._element.querySelector(".card__button"),this._deleteButton=this._element.querySelector(".card__delete-button"),this._setProperties(),this._setEventListeners(),this._element}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),c=n.p+"e01dc605e5683f041c32.jpg",s=n.p+"0fe271a843c82036222a.jpg",d=n.p+"939d1b9ffc366a2e4b46.jpg",m=n.p+"1a7470341e9406aa961f.jpg",p=n.p+"698e9a23d360c5a4557c.jpg",f=n.p+"43e5900e45701017467a.jpg",y=n(43),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".popup"),_=document.querySelector("#profile-form"),b=document.querySelector("#addcard-form"),E=document.querySelector("#close-profile-form"),S=document.querySelector("#submit-profile-button"),k=document.querySelector(".profile__add-button"),L=document.querySelector("#popup-add-card"),g=document.querySelector("#close-addcard-form"),C=document.querySelector("#addcard-form"),q=document.querySelector("#popup-show-image"),w=document.querySelector("#close-image-button"),B=document.querySelector(".template-card"),j=document.querySelector(".cards"),I=document.querySelector("#input-title"),P=document.querySelector("#input-url"),x=document.querySelector("#input-name"),V=document.querySelector("#input-job"),T=document.querySelector("#popup-add-card"),O={formSelector:".popup__form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_disabled",inputErrorClass:"form__input-error",errorClass:"popup__error_visible"},A=[{title:"Valle de Yosemite",link:c},{title:"Lago Louise",link:s},{title:"Montañas Calvas",link:d},{title:"Latemar",link:m},{title:"Parque Nacional de la Vanoise",link:p},{title:"Lago di Braies",link:f}];function D(e){return function(t){t.target!==e&&"Escape"!==t.key||e.classList.remove("popup_opened")}}function N(){h.style.display="none"}function R(e){e.target!==h&&"Escape"!==e.key||N()}function M(){T.classList.remove("popup_opened")}new o(_,O).enableValidation(),new o(b,O).enableValidation(),h.style.display="none",v.addEventListener("click",(function(){h.style.display="flex"})),E.addEventListener("click",N),k.addEventListener("click",(function(){T.classList.add("popup_opened")})),g.addEventListener("click",M),w.addEventListener("click",(function(){(0,y.handleCloseImage)(h)})),S.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector(".profile__name"),n=document.querySelector(".profile__job");t.textContent=x.value,n.textContent=V.value,N()})),C.addEventListener("submit",(function(e){e.preventDefault();var t=new a(I.value,P.value,document.querySelector(".template-card"),y.handleOpenImage);j.prepend(t.generateCard()),M()})),q.addEventListener("click",D(q)),h.addEventListener("click",D(h)),h.addEventListener("click",R),L.addEventListener("click",D(L)),document.addEventListener("keydown",R),document.addEventListener("keydown",D(q)),document.addEventListener("keydown",D(h)),document.addEventListener("keydown",D(L)),A.forEach((function(e){var t=new a(e.title,e.link,B);j.append(t.generateCard())}))}()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBY25FLE1BQU9vRCxTQUFTM0QsY0FBYyxrQkFBbUJtRyxFQUFBQSxpQkFDOUczQixFQUFTNEIsUUFBUUYsRUFBUUcsZ0JBQ3pCUixHQUNGLElBb0RBeEIsRUFBZTNDLGlCQUFpQixRQUFTMkQsRUFBaUJoQixJQUMxRFQsRUFBTWxDLGlCQUFpQixRQUFTMkQsRUFBaUJ6QixJQUNqREEsRUFBTWxDLGlCQUFpQixRQUFTa0UsR0FDaEMxQixFQUFVeEMsaUJBQWlCLFFBQVMyRCxFQUFpQm5CLElBQ3JEUCxTQUFTakMsaUJBQWlCLFVBQVdrRSxHQUNyQ2pDLFNBQVNqQyxpQkFBaUIsVUFBVzJELEVBQWlCaEIsSUFDdERWLFNBQVNqQyxpQkFBaUIsVUFBVzJELEVBQWlCekIsSUFDdERELFNBQVNqQyxpQkFBaUIsVUFBVzJELEVBQWlCbkIsSUFFdERZLEVBQWFqRCxTQUFRLFNBQVV5RSxHQUM3QixJQUFNSixFQUFVLElBQUlqRSxFQUFLcUUsRUFBS3BFLE1BQU9vRSxFQUFLbkUsS0FBTW9DLEdBQ2hEQyxFQUFTK0IsT0FBT0wsRUFBUUcsZUFDMUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9DYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZm9ybUVsZW1lbnQsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZm9ybVNlbGVjdG9yID0gc2V0dGluZ3MuZm9ybVNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgICAgICB0aGlzLmlucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcclxuICAgICAgICB0aGlzLmVycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRWxlbWVudCA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5pbnB1dExpc3QgPSBBcnJheS5mcm9tKHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmlucHV0U2VsZWN0b3IpKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuZm9ybUVycm9yID0gdGhpcy5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuZm9ybUVycm9yLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuZm9ybUVycm9yLmNsYXNzTGlzdC5hZGQodGhpcy5lcnJvckNsYXNzKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRoaXMuZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgICAgICB0aGlzLmZvcm1FcnJvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZXJyb3JDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9oYXNJbnZhbGlkSW5wdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUFkZENhcmRTdWJtaXQoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGlucHV0Q2FyZFRpdGxlLnZhbHVlLCBpbnB1dENhcmRMaW5rLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBsYXRlLWNhcmRcIiksIGhhbmRsZU9wZW5JbWFnZSk7XHJcbiAgY2FyZEFyZWEucHJlcGVuZChuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpKTtcclxuICBoYW5kbGVDbG9zZUNhcmRGb3JtKCk7XHJcbn0gXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGxpbmssIHRlbXBsYXRlLCBoYW5kbGVDYXJkQ2xpY2spIHtcclxuXHJcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5fbGluayA9IGxpbms7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gIH1cclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUxpa2VCdXR0b24oKSB7XHJcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRfX2J1dHRvbl9hY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVSZW1vdmVDYXJkKCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKClcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspOyBcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlUmVtb3ZlQ2FyZCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUJ1dHRvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0UHJvcGVydGllcygpIHtcclxuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgdGhpcy5fdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcclxuICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2ltYWdlJyk7XHJcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190aXRsZScpO1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2J1dHRvbicpO1xyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fZGVsZXRlLWJ1dHRvbicpO1xyXG5cclxuICAgIHRoaXMuX3NldFByb3BlcnRpZXMoKTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRzLmpzXCI7XHJcbmltcG9ydCB5b3NlbWl0ZUltYWdlIGZyb20gXCIuLi9pbWFnZXMveW9zZW1pdGUuanBnXCI7XHJcbmltcG9ydCBsYWtlTG91aXNlSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9sYWtlLWxvdWlzZS5qcGdcIjtcclxuaW1wb3J0IGJhbGRNb3VudGFpbnNJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhbGQtbW91bnRhaW5zLmpwZ1wiO1xyXG5pbXBvcnQgbGF0ZW1hckltYWdlIGZyb20gXCIuLi9pbWFnZXMvbGF0ZW1hci5qcGdcIjtcclxuaW1wb3J0IHZhbm9pc2VJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3Zhbm9pc2UuanBnXCI7XHJcbmltcG9ydCBsYWdvSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9sYWdvLmpwZ1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVPcGVuSW1hZ2UsIFxyXG4gIGhhbmRsZUNsb3NlSW1hZ2V9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzLmpzXCI7IFxyXG5cclxuY29uc3Qgb3BlbkZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XHJcbmNvbnN0IGZvcm1FbGVtZW50UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1mb3JtXCIpO1xyXG5jb25zdCBmb3JtRWxlbWVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZGNhcmQtZm9ybVwiKTtcclxuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXByb2ZpbGUtZm9ybVwiKTtcclxuY29uc3QgZm9ybVByb2ZpbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdC1wcm9maWxlLWJ1dHRvblwiKTtcclxuY29uc3QgYnRuQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuY29uc3QgcG9wVXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1hZGQtY2FyZFwiKTtcclxuY29uc3QgYnRuQ2xvc2VDYXJkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYWRkY2FyZC1mb3JtXCIpO1xyXG5jb25zdCBGb3JtQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkY2FyZC1mb3JtXCIpO1xyXG5jb25zdCBQb3BVcFNob3dJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtc2hvdy1pbWFnZVwiKTtcclxuY29uc3QgY2xvc2VJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtaW1hZ2UtYnV0dG9uXCIpO1xyXG5jb25zdCB0ZW1wbGF0ZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBsYXRlLWNhcmRcIik7XHJcbmNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKTtcclxuY29uc3QgaW5wdXRDYXJkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXRpdGxlXCIpO1xyXG5jb25zdCBpbnB1dENhcmRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC11cmxcIik7XHJcbmNvbnN0IGlucHV0UHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LW5hbWVcIik7XHJcbmNvbnN0IGlucHV0UHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtam9iXCIpO1xyXG5jb25zdCBtaVBvcHVwSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWFkZC1jYXJkXCIpO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogXCIucG9wdXBfX2Zvcm1cIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zdWJtaXQtYnV0dG9uXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtX19zdWJtaXQtYnV0dG9uX2Rpc2FibGVkXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm1fX2lucHV0LWVycm9yXCIsXHJcbiAgZXJyb3JDbGFzczogXCJwb3B1cF9fZXJyb3JfdmlzaWJsZVwiXHJcbn07XHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJWYWxsZSBkZSBZb3NlbWl0ZVwiLFxyXG4gICAgbGluazogeW9zZW1pdGVJbWFnZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxhZ28gTG91aXNlXCIsXHJcbiAgICBsaW5rOiBsYWtlTG91aXNlSW1hZ2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb250YcOxYXMgQ2FsdmFzXCIsXHJcbiAgICBsaW5rOiBiYWxkTW91bnRhaW5zSW1hZ2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBsYXRlbWFySW1hZ2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQYXJxdWUgTmFjaW9uYWwgZGUgbGEgVmFub2lzZVwiLFxyXG4gICAgbGluazogdmFub2lzZUltYWdlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IGxhZ29JbWFnZSxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IHZhbGlkYXRlRm9ybVByb2ZpbGUgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtRWxlbWVudFByb2ZpbGUsIHNldHRpbmdzKTtcclxudmFsaWRhdGVGb3JtUHJvZmlsZS5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCB2YWxpZGF0ZUZvcm1DYXJkID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybUVsZW1lbnRDYXJkLCBzZXR0aW5ncyk7XHJcbnZhbGlkYXRlRm9ybUNhcmQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxucG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xvc2VQb3B1cChwb3B1cEVsZW1lbnQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBwb3B1cEVsZW1lbnQgfHwgZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHBvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlbmVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUFkZENhcmRTdWJtaXQoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKGlucHV0Q2FyZFRpdGxlLnZhbHVlLCBpbnB1dENhcmRMaW5rLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBsYXRlLWNhcmRcIiksIGhhbmRsZU9wZW5JbWFnZSk7XHJcbiAgY2FyZEFyZWEucHJlcGVuZChuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpKTtcclxuICBoYW5kbGVDbG9zZUNhcmRGb3JtKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVPcGVuUHJvZmlsZUZvcm0oKSB7XHJcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbG9zZVByb2ZpbGVGb3JtKCkge1xyXG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsb3NlUHJvZmlsZUZvcm1FdmVudChldmVudCkge1xyXG4gIGlmIChldmVudC50YXJnZXQgPT09IHBvcHVwIHx8IGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgaGFuZGxlQ2xvc2VQcm9maWxlRm9ybSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlT3BlblByb2ZpbGVTdWJtaXQoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IHByb2ZpbGVOYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcclxuICBjb25zdCBwcm9maWxlSm9iRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fam9iXCIpO1xyXG5cclxuICBwcm9maWxlTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dFByb2ZpbGVOYW1lLnZhbHVlO1xyXG4gIHByb2ZpbGVKb2JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRQcm9maWxlSm9iLnZhbHVlO1xyXG5cclxuICBoYW5kbGVDbG9zZVByb2ZpbGVGb3JtKCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVPcGVuQ2FyZEZvcm0oKSB7XHJcbiAgbWlQb3B1cEltYWdlLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsb3NlQ2FyZEZvcm0oKSB7XHJcbiAgbWlQb3B1cEltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XHJcbn1cclxuXHJcblxyXG5vcGVuRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlT3BlblByb2ZpbGVGb3JtKTtcclxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsb3NlUHJvZmlsZUZvcm0pO1xyXG5cclxuYnRuQWRkQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlT3BlbkNhcmRGb3JtKTtcclxuYnRuQ2xvc2VDYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xvc2VDYXJkRm9ybSk7XHJcbmNsb3NlSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBoYW5kbGVDbG9zZUltYWdlKHBvcHVwKTtcclxufSk7XHJcblxyXG5mb3JtUHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlT3BlblByb2ZpbGVTdWJtaXQpO1xyXG5Gb3JtQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZENhcmRTdWJtaXQpO1xyXG5cclxuUG9wVXBTaG93SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsb3NlUG9wdXAoUG9wVXBTaG93SW1hZ2UpKTtcclxucG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsb3NlUG9wdXAocG9wdXApKTtcclxucG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsb3NlUHJvZmlsZUZvcm1FdmVudCk7XHJcbnBvcFVwQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xvc2VQb3B1cChwb3BVcENhcmQpKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlQ2xvc2VQcm9maWxlRm9ybUV2ZW50KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlQ2xvc2VQb3B1cChQb3BVcFNob3dJbWFnZSkpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVDbG9zZVBvcHVwKHBvcHVwKSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUNsb3NlUG9wdXAocG9wVXBDYXJkKSk7IFxyXG5cclxuaW5pdGlhbENhcmRzLmZvckVhY2goZnVuY3Rpb24gKGNhcmQpIHtcclxuICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoY2FyZC50aXRsZSwgY2FyZC5saW5rLCB0ZW1wbGF0ZUNhcmQsIC8qIGhhbmRsZU9wZW5JbWFnZSAqLyk7XHJcbiAgY2FyZEFyZWEuYXBwZW5kKG5ld0NhcmQuZ2VuZXJhdGVDYXJkKCkpO1xyXG59KTsiXSwibmFtZXMiOlsiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJwIiwiRm9ybVZhbGlkYXRvciIsImZvcm1FbGVtZW50Iiwic2V0dGluZ3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiYnV0dG9uRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJrZXkiLCJ2YWx1ZSIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImZvcm1FcnJvciIsImNvbmNhdCIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJyZW1vdmUiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwic29tZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiQ2FyZCIsInRpdGxlIiwibGluayIsInRlbXBsYXRlIiwiaGFuZGxlQ2FyZENsaWNrIiwiX3RpdGxlIiwiX2xpbmsiLCJfdGVtcGxhdGUiLCJfaGFuZGxlQ2FyZENsaWNrIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9saWtlQnV0dG9uIiwidG9nZ2xlIiwiX2NhcmRFbGVtZW50IiwiX2ltYWdlRWxlbWVudCIsIl9uYW1lIiwiX2RlbGV0ZUJ1dHRvbiIsIl9oYW5kbGVSZW1vdmVDYXJkIiwiX2hhbmRsZUxpa2VCdXR0b24iLCJzcmMiLCJhbHQiLCJfdGl0bGVFbGVtZW50IiwiX2VsZW1lbnQiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0UHJvcGVydGllcyIsIm9wZW5Gb3JtQnV0dG9uIiwiZG9jdW1lbnQiLCJwb3B1cCIsImZvcm1FbGVtZW50UHJvZmlsZSIsImZvcm1FbGVtZW50Q2FyZCIsImNsb3NlQnV0dG9uIiwiZm9ybVByb2ZpbGVCdXR0b24iLCJidG5BZGRDYXJkIiwicG9wVXBDYXJkIiwiYnRuQ2xvc2VDYXJkRm9ybSIsIkZvcm1DYXJkIiwiUG9wVXBTaG93SW1hZ2UiLCJjbG9zZUltYWdlIiwidGVtcGxhdGVDYXJkIiwiY2FyZEFyZWEiLCJpbnB1dENhcmRUaXRsZSIsImlucHV0Q2FyZExpbmsiLCJpbnB1dFByb2ZpbGVOYW1lIiwiaW5wdXRQcm9maWxlSm9iIiwibWlQb3B1cEltYWdlIiwiaW5pdGlhbENhcmRzIiwieW9zZW1pdGVJbWFnZSIsImxha2VMb3Vpc2VJbWFnZSIsImJhbGRNb3VudGFpbnNJbWFnZSIsImxhdGVtYXJJbWFnZSIsInZhbm9pc2VJbWFnZSIsImxhZ29JbWFnZSIsImhhbmRsZUNsb3NlUG9wdXAiLCJwb3B1cEVsZW1lbnQiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUNsb3NlUHJvZmlsZUZvcm0iLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVDbG9zZVByb2ZpbGVGb3JtRXZlbnQiLCJoYW5kbGVDbG9zZUNhcmRGb3JtIiwiZW5hYmxlVmFsaWRhdGlvbiIsImhhbmRsZUNsb3NlSW1hZ2UiLCJwcm9maWxlTmFtZUVsZW1lbnQiLCJwcm9maWxlSm9iRWxlbWVudCIsIm5ld0NhcmQiLCJoYW5kbGVPcGVuSW1hZ2UiLCJwcmVwZW5kIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZCIsImFwcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=