import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Cards.js";
import { Section } from "../components/Section.js";
import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

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
const openProfileAvatarButton = document.querySelector(".profile__avatar-edit-icon");
const closeProfileAvatarButton = document.querySelector("#close-profile-avatar-form");
const profileAvatar = document.querySelector(".profile__avatar");
const inputprofileAvatar = document.querySelector("#input-profile-avatar");
const formElementProfileAvatar = document.querySelector("#profile-avatar-form");

const user = new UserInfo({
  userName: ".profile__name",
  userJob: ".profile__job",
  userAvatar: ".profile__avatar",
  userId: "",
  });

const result = {
  name: "Sol",
  job: "developer",
  avatar: "https://ideogram.ai/assets/image/lossless/response/ReyVUFN5TE6hiU-47jJBmA",
  _id: "58122d55-c87e-4425-b657-5b9974dd4029",
};

const api = new Api ({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
      authorization: "58122d55-c87e-4425-b657-5b9974dd4029", "Content-Type": "application/json",
  },
});


api.getUserInfo().then((result) => {
  inputProfileName.value = result.name;
  inputProfileJob.value = result.about;
  profileAvatar.src = result.avatar;

const data = {
  name: result.name,
  job: result.about,
  userId: result._id
}

user.setUserInfo(data);

}).catch(error => {
  console.error('Error:', error);
}); 

let cardSection = ""

api.getInitialCards().then((result) => {
  cardSection = new Section(
    {
      items: result, 
      renderer: (item) => {
          const newCard = new Card(item, user.getUserId(),
          api.addLike,
          api.removeLike,
         () => {
          popupwithconfirmation.open(item._id)
           },
          handleOpenImage)
            .generateCard();
          cardSection.addItem(newCard);
      },
    },
    ".cards"
  );
    cardSection.renderItems();

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

popUpProfile.setEventListeners()

const popUpProfileAvatar = new PopupWithForm("#profile-avatar-popup", (inputs) => {
  const submitButton = document.querySelector("#submit-profile-avatar-button");
  submitButton.textContent = "Guardando...";
  submitButton.disabled = true;
  
  api.editAvatar(inputs).then((result) => {
    user.setUserAvatar(result.avatar);
    handleCloseProfileAvatarForm();
  })
    .catch(error => console.error('Error:', error))
    .finally(() => {
      if (submitButton) {
        submitButton.textContent = "Guardar";
        submitButton.disabled = false;
      } 
    });
});

popUpProfileAvatar.setEventListeners()

const popUpCards = new PopupWithForm("#popup-add-card", (inputs) => {
  const submitButton = document.querySelector("#addcard-form-button");
  submitButton.textContent = "Guardando...";
  submitButton.disabled = true;
  
  api.addCard(inputs).then((result) => {
    const newCard = new Card(result, () => {}).generateCard();
    cardSection.addItem(newCard);
    
  })
  .catch(error => console.error('Error:', error))
    .finally(() => {
      submitButton.textContent = "Crear";
      submitButton.disabled = false;
      handleCloseCardForm();
    });
});

const popupwithconfirmation = new PopupWithConfirmation("#popup-delete-card", (cardId) => {
  api.deleteCard(cardId).then(() => {
    document.querySelector(`#id-${ cardId }`).remove()
  }
  )
})

popupwithconfirmation.setEventListeners()


popUpCards.setEventListeners()

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

const validateFormProfileAvatar = new FormValidator(formElementProfileAvatar, settings);
validateFormProfileAvatar.enableValidation();

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
  const likes = [];
  const _id = "";
  const owner = user.getUserId();
  const userId = "";
  const item = {likes, _id, owner, userId, name: inputCardTitle.value, link: inputCardLink.value}
  const newCard = new Card(item, user.getUserId(), 
    api.addLike,
    api.removeLike,
    () => {
      popupwithconfirmation.open(item._id)
       },
    handleOpenImage)
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
  formProfileButton.textContent = "Guardando...";
  formProfileButton.disabled = true;

  const profileNameElement = document.querySelector(".profile__name");
  const profileJobElement = document.querySelector(".profile__job");

  profileNameElement.textContent = inputProfileName.value;
  profileJobElement.textContent = inputProfileJob.value;

  api.editProfile({ name: inputProfileName.value, job: inputProfileJob.value }).then((result) => {
    user.setUserInfo({
      name: result.name,
      job: result.job,
      userId: result._id,
    });
  })
  .catch(error => console.error('Error:', error))
  .finally(() => {
    formProfileButton.textContent = "Guardar";
    formProfileButton.disabled = false;
    handleCloseProfileForm();
  });
}

function handleOpenProfileAvatarForm() {
  popUpProfileAvatar.open();
}

function handleCloseProfileAvatarForm() {
  popUpProfileAvatar.close();
}

function handleOpenCardForm() {
  miPopupImage.classList.add("popup_opened");
}

function handleCloseCardForm() {
  miPopupImage.classList.remove("popup_opened");
}

function handleOpenImage(imageSrc, imageCaption) {
  const popupImage = document.querySelector('.popup__image');
  const popupTitle = document.querySelector('.popup__title');
  const miPopupImage = document.querySelector('#popup-show-image');
  
  popupImage.src = imageSrc;
  popupImage.alt = imageCaption;
  popupTitle.textContent = imageCaption;
  
  miPopupImage.classList.add('popup_opened');
}

function handleCloseImage(event, popupElement) {
return function (event) {
    if (event.key === "Escape") {
      popupElement.classList.remove('popup_opened');
    }
  };
}

openFormButton.addEventListener("click", handleOpenProfileForm);
closeButton.addEventListener("click", handleCloseProfileForm);

openProfileAvatarButton.addEventListener("click", handleOpenProfileAvatarForm);
closeProfileAvatarButton.addEventListener("click", handleCloseProfileAvatarForm);

btnAddCard.addEventListener("click", handleOpenCardForm);
btnCloseCardForm.addEventListener("click", handleCloseCardForm);
closeImage.addEventListener("click", () => {
  handleCloseImage(popup);
});

formProfileButton.addEventListener("click", handleOpenProfileSubmit);
FormCard.addEventListener("submit", handleAddCardSubmit);

//PopUpShowImage.addEventListener("click", handleClosePopup(PopUpShowImage));
popup.addEventListener("click", handleClosePopup(popup));
popup.addEventListener("click", handleCloseProfileFormEvent);
popUpCard.addEventListener("click", handleClosePopup(popUpCard));
document.addEventListener("keydown", handleCloseProfileFormEvent);
document.addEventListener("keydown", handleClosePopup(PopUpShowImage));
document.addEventListener("keydown", handleClosePopup(popup));
document.addEventListener("keydown", handleClosePopup(popUpCard)); 
document.addEventListener("keydown", (event) => handleCloseImage(event, PopUpShowImage));



