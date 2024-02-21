const openFormButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup');

const closeButton = document.querySelector('#close-profile-form');
const inputProfileName = document.querySelector('#input-name');
const inputProfileJob = document.querySelector('#input-job');
const formProfileButton = document.querySelector('#submit-profile-button');

function handleOpenProfileForm () {
    popup.classList.add("popup_opened")
}

function handleCloseProfileForm () {
    popup.classList.remove("popup_opened")
}

function handleOpenProfileSubmit (evt) {
    evt.preventDefault();

    const profileNameElement = document.querySelector(".profile__name");
    const profileJobElement = document.querySelector('.profile__job');

    profileNameElement.textContent = inputProfileName.value;
    profileJobElement.textContent = inputProfileJob.value;
    
    handleCloseProfileForm();
    
}

 
openFormButton.addEventListener("click", handleOpenProfileForm)
closeButton.addEventListener("click", handleCloseProfileForm)
formProfileButton.addEventListener("click", handleOpenProfileSubmit)