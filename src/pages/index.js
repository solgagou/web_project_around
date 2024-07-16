import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Cards.js";
/*import yosemiteImage from "../images/yosemite.jpg";
import lakeLouiseImage from "../images/lake-louise.jpg";
import baldMountainsImage from "../images/bald-mountains.jpg";
import latemarImage from "../images/latemar.jpg";
import vanoiseImage from "../images/vanoise.jpg";
import lagoImage from "../images/lago.jpg";*/
import { Section } from "../components/Section.js";
import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const openFormButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const formElementProfile = document.querySelector("#profile-form");
const formElementCard = document.querySelector("#addcard-form");
const closeButton = document.querySelector("#close-profile-form");
const formProfileButton = document.querySelector("#submit-profile-button");
const btnAddCard = document.querySelector(".profile__add-button");
const popUpCard = document.querySelector("#popup-add-card");
const btnCloseCardForm = document.querySelector("#close-addcard-form");
const FormCard = document.querySelector("#addcard-form");
const PopUpShowImage = document.querySelector("#popup-show-image");
const closeImage = document.querySelector("#close-image-button");
const templateCard = document.querySelector(".template-card");
const cardArea = document.querySelector(".cards");
const inputCardTitle = document.querySelector("#input-title");
const inputCardLink = document.querySelector("#input-url");
const inputProfileName = document.querySelector("#input-name");
const inputProfileJob = document.querySelector("#input-job");
const miPopupImage = document.querySelector("#popup-add-card");
const profileAvatar = document.querySelector(".profile__avatar");
//const profileAvatarUrl = document.querySelector()

const user = new UserInfo({
  userName: ".profile__name",
  userJob: ".profile__job",
  userAvatar: ".profile__avatar",
  userId: "",
  _id: ""
});


const api = new Api ({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
      authorization: "58122d55-c87e-4425-b657-5b9974dd4029", "Content-Type": "application/json",
  },
});


api.getUserInfo().then((result) => {
  inputProfileName.value = result.name;
  inputProfileJob.value = result.job;
  profileAvatar.src = result.avatar;
  user.setUserInfo(result);
  }).catch(error => {
    console.error('Error:', error);
  }); 

  api.getInitialCards().then((result) => {
    const CardSection = new Section(
      {
        items: result, 
        renderer: (item) => {
            const newCard = new Card(item, user.getUserId(), () => {
              api.addLike(newCard._id);
            },
            () => {
              api.removeLike(newCard._id);
            }
          ).generateCard();
            CardSection.prepend(newCard);
        },
      },
      ".elements"
    );
      CardSection.renderItems();
  }).catch(error => {
    console.error('Error:', error);
  }); 

const popUpProfile = new PopupWithForm("#popup-profile", (inputs) => {
   api.editProfile(inputs).then((result) => {
    inputProfileName.value = result.name;
    inputProfileJob.value = result.job;
    profileAvatar.src = result.avatar;
   });
});

const popUpCards = new PopupWithImage("#popup-add-card", (inputs) => {
  templateCard = result.templateCard;
  api.addCard(inputs).then((result) => {
    const newCard = new Card(result, () => {}).generateCard();
    cardSection.addItem(newCard);
  });
});

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

const groupId = 'web_es_11';
const token = '58122d55-c87e-4425-b657-5b9974dd4029';

popup.style.display = "none";

function handleClosePopup(popupElement) {
  return function (event) {
    if (event.target === popupElement || event.key === "Escape") {
      popupElement.classList.remove("popup_opened");
    }
  };
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(inputCardTitle.value, inputCardLink.value, document.querySelector(".template-card"), likes,
  _id, owner, userId, handleOpenImage);
  cardArea.prepend(newCard.generateCard());
  handleCloseCardForm();
}



function handleOpenProfileForm() {
  popup.style.display = "flex";
}

function handleCloseProfileForm() {
  popup.style.display = "none";

}

function handleCloseProfileFormEvent(event) {
  if (event.target === popup || event.key === "Escape") {
    handleCloseProfileForm();
  }
}

function handleOpenProfileSubmit(evt) {
  evt.preventDefault();

  const profileNameElement = document.querySelector(".profile__name");
  const profileJobElement = document.querySelector(".profile__job");

  profileNameElement.textContent = inputProfileName.value;
  profileJobElement.textContent = inputProfileJob.value;

  handleCloseProfileForm();
}


function handleOpenCardForm() {
  miPopupImage.classList.add("popup_opened");
}

function handleCloseCardForm() {
  miPopupImage.classList.remove("popup_opened");
}


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


