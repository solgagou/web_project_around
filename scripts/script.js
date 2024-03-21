const openFormButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');

const closeButton = document.querySelector('#close-profile-form');
const inputProfileName = document.querySelector('#input-name');
const inputProfileJob = document.querySelector('#input-job');
const formProfileButton = document.querySelector('#submit-profile-button');
const btnAddCard = document.querySelector('.profile__add-button');
const popUpCard = document.querySelector("#popup-add-card");
const btnCloseCardForm = document.querySelector('#close-addcard-form');
const templateCard = document.querySelector('.template-card');
const cardArea = document.querySelector(".cards");
const inputCardTitle = document.querySelector("#input-title");
const inputCardLink = document.querySelector("#input-url");
const FormCard = document.querySelector("#addcard-form");
const PopUpShowImage = document.querySelector("#popup-show-image");
const closeImage = document.querySelector("#close-image-button");
const popupTitle = document.querySelector(".popup__title");
const popupImage = document.querySelector(".popup__image");


const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];

 popup.style.display = "none";

function handleOpenProfileForm() {
  popup.style.display = "block";
   
}


function handleCloseProfileForm() {
  popup.style.display = "none";
    
}




function handleOpenCardForm() {
  popUpCard.classList.add("popup_show")



}

function handleCloseCardForm() {
  popUpCard.classList.remove("popup_show")
}

function handleOpenImage(title, link) {
  popupImage.src = link; 
  popupTitle.textContent = title;
  
}

function handleCloseImage() {
  PopUpShowImage.classList.remove("popup_show");
}

function handleOpenProfileSubmit (evt) {
    evt.preventDefault();


    const profileNameElement = document.querySelector(".profile__name");
    const profileJobElement = document.querySelector('.profile__job');


    profileNameElement.textContent = inputProfileName.value;
    profileJobElement.textContent = inputProfileJob.value;
   
    handleCloseProfileForm();
   
}


function cardGenerator(title, link) {
  const card = templateCard.cloneNode(true).content.querySelector('.card');
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const likeButton = card.querySelector(".card__button");
  const deleteButton = card.querySelector(".card__delete_button");
  cardImage.src = link;
  cardTitle.textContent = title;
  likeButton.addEventListener("click", function() {
    likeButton.classList.toggle("card__button:active");
  });
    cardImage.addEventListener("click", function() {
      handleOpenImage(title, link);
    })
  deleteButton.addEventListener("click", function() {
    card.remove();
  })
  //  deleteButton.classList.toggle("card__delete_button:active");
  
    return card;
 
}


initialCards.forEach(function (card) {
  const newCard = cardGenerator(card.name, card.link);
  cardArea.append(newCard);
})


function handleAddCardSubmit(evt) {
  evt.preventDefault()
  const newCard = cardGenerator (inputCardTitle.value, inputCardLink.value);
  cardArea.prepend(newCard);
  handleCloseCardForm();
  
}


openFormButton.addEventListener("click", handleOpenProfileForm);
closeButton.addEventListener("click", handleCloseProfileForm);

btnAddCard.addEventListener("click", handleOpenCardForm) 
btnCloseCardForm.addEventListener("click", handleCloseCardForm)
closeImage.addEventListener("click", handleCloseImage)

formProfileButton.addEventListener("click", handleOpenProfileSubmit)
FormCard.addEventListener("submit", handleAddCardSubmit)


