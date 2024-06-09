import { FormValidator } from "./FormValidator.js";
import { Card } from "./Cards.js";
import { handleOpenProfileForm, 
  handleCloseProfileForm, 
  handleCloseProfileFormEvent,
  handleOpenProfileSubmit,
  handleOpenCardForm, 
  handleCloseCardForm, 
  handleAddCardSubmit,
  handleOpenImage, 
  handleCloseImage,
  handleClosePopup } from "./utils.js";

import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";



const openFormButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const formElementProfile =  document.querySelector("#profile-form");
const formElementCard =  document.querySelector("#addcard-form");
const closeButton = document.querySelector("#close-profile-form");
const formProfileButton = document.querySelector("#submit-profile-button");
const btnAddCard = document.querySelector(".profile__add-button");
const popUpCard = document.querySelector("#popup-add-card");
const btnCloseCardForm = document.querySelector("#close-addcard-form");
const templateCard = document.querySelector(".template-card");
const cardArea = document.querySelector(".cards");
const FormCard = document.querySelector("#addcard-form");
const PopUpShowImage = document.querySelector("#popup-show-image");
const closeImage = document.querySelector("#close-image-button");


const initialCards = [
  {
    title: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    title: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    title: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];


initialCards.forEach(function (card) {
  const newCard = new Card(card.title, card.link, templateCard, handleOpenImage);
  cardArea.append(newCard.generateCard());
});


openFormButton.addEventListener("click", handleOpenProfileForm);
closeButton.addEventListener("click", handleCloseProfileForm);

btnAddCard.addEventListener("click", handleOpenCardForm);
btnCloseCardForm.addEventListener("click", handleCloseCardForm);
closeImage.addEventListener("click", () => { 
  handleCloseImage(popup);
});

formProfileButton.addEventListener("click", handleOpenProfileSubmit);
FormCard.addEventListener("submit", handleAddCardSubmit);

PopUpShowImage.addEventListener("click", handleClosePopup(PopUpShowImage));
popup.addEventListener("click", handleClosePopup(popup));
popup.addEventListener("click", handleCloseProfileFormEvent);
popUpCard.addEventListener("click", handleClosePopup(popUpCard));
document.addEventListener("keydown", handleCloseProfileFormEvent);
document.addEventListener("keydown", handleClosePopup(PopUpShowImage));
document.addEventListener("keydown", handleClosePopup(popup));
document.addEventListener("keydown", handleClosePopup(popUpCard));

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "popup__error_visible"
};

const validateFormProfile = new FormValidator(formElementProfile, settings);
validateFormProfile.enableValidation();

const validateFormCard = new FormValidator(formElementCard, settings);
validateFormCard.enableValidation();