const popup = document.querySelector(".popup");

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
  popUpCard.classList.add("popup_opened");
}

export function handleCloseCardForm() {
  popUpCard.classList.remove("popup_opened");
}

export function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = _generateCard(inputCardTitle.value, inputCardLink.value);
  cardArea.prepend(newCard);
  handleCloseCardForm();
}

export function handleOpenImage(title, link) {
  PopUpShowImage.classList.add("popup_opened");
  popupImage.src = link;
  popupTitle.textContent = title;
}

export function handleCloseImage() {
  PopUpShowImage.classList.remove("popup_opened");
}

export function handleClosePopup(popupElement) {
  return function(event) {
    if (event.target === popupElement || event.key === "Escape") {
      popupElement.classList.remove("popup_opened");
    }
  };
}