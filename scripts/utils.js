//import { PopUpShowImage } from "./index";

const popup = document.querySelector(".popup");
const inputProfileName = document.querySelector("#input-name");
const inputProfileJob = document.querySelector("#input-job");
const popUpCard = document.querySelector(".profile__add-button");
const inputCardTitle = document.querySelector("#input-title");
const inputCardLink = document.querySelector("#input-url");
const popupTitle = document.querySelector(".popup__title");
const popupImage = document.querySelector(".popup__image");
const miPopupImage = document.querySelector("#popup-add-card");

popup.style.display = "none";

export function handleOpenProfileForm() {
  popup.style.display = "flex";
}

export function handleCloseProfileForm() {
  popup.style.display = "none";

}

export function handleCloseProfileFormEvent(event) {
  if (event.target === popup || event.key === "Escape") {
    handleCloseProfileForm();
  }
}

export function handleOpenProfileSubmit(evt) {
  evt.preventDefault();

  const profileNameElement = document.querySelector(".profile__name");
  const profileJobElement = document.querySelector(".profile__job");

  profileNameElement.textContent = inputProfileName.value;
  profileJobElement.textContent = inputProfileJob.value;

  handleCloseProfileForm();
}

export function handleOpenCardForm() {
  miPopupImage.classList.add("popup_opened");
}

export function handleCloseCardForm() {
  miPopupImage.classList.remove("popup_opened");
}

export function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = _generateCard(inputCardTitle.value, inputCardLink.value);
  cardArea.prepend(newCard);
  handleCloseCardForm();
}

export function handleOpenImage(PopUpShowImage, title, link) {
  PopUpShowImage.classList.add("popup_opened");
  popupImage.src = link;
  popupTitle.textContent = title;
}

export function handleCloseImage(PopUpShowImage) {
  PopUpShowImage.classList.remove("popup_opened");
}

export function handleClosePopup(popupElement) {
  return function(event) {
    if (event.target === popupElement || event.key === "Escape") {
      popupElement.classList.remove("popup_opened");
    }
  };
}