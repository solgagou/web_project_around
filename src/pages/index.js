import "./index.css";

import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Cards.js";
import { handleOpenProfileForm, 
  handleCloseProfileForm, 
  handleCloseProfileFormEvent,
  handleOpenProfileSubmit,
  handleOpenCardForm, 
  handleCloseCardForm, 
  handleAddCardSubmit,
  handleOpenImage, 
  handleCloseImage,
  handleClosePopup } from "../components/utils.js";

import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";


/*import logoImage from "../images/logo_around.png";
import lineImage from "../images/Line.jpg";
import profileImage from "../images/profile_image.jpg";
import addButtonImage from "../images/Add_Button.png";
import closeIconImage from "../images/Close_Icon.png";
import trashIconImage from "../images/Trash_icon.png";*/


const openFormButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const formElementProfile =  document.querySelector("#profile-form");
const formElementCard =  document.querySelector("#addcard-form");
const closeButton = document.querySelector("#close-profile-form");
const formProfileButton = document.querySelector("#submit-profile-button");
const btnAddCard = document.querySelector(".profile__add-button");
const popUpCard = document.querySelector("#popup-add-card");
const btnCloseCardForm = document.querySelector("#close-addcard-form");
const FormCard = document.querySelector("#addcard-form");
const PopUpShowImage = document.querySelector("#popup-show-image");
const closeImage = document.querySelector("#close-image-button");

import yosemiteImage from "../images/yosemite.jpg";
import lakeLouiseImage from "../images/lake-louise.jpg";
import baldMountainsImage from "../images/bald-mountains.jpg";
import latemarImage from "../images/latemar.jpg";
import vanoiseImage from "../images/vanoise.jpg";
import lagoImage from "../images/lago.jpg"; 

const initialCards = [
  {
    title: "Valle de Yosemite",
    link: yosemiteImage,
  },
  {
    title: "Lago Louise",
    link: lakeLouiseImage,
  },
  {
    title: "Montañas Calvas",
    link: baldMountainsImage,
  },
  {
    title: "Latemar",
    link: latemarImage,
  },
  {
    title: "Parque Nacional de la Vanoise",
    link: vanoiseImage,
  },
  {
    title: "Lago di Braies",
    link: lagoImage,
  },
];

export { initialCards }; 


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