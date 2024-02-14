const openFormButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup');

const closeButton = popup.querySelector('#close-profile-form');

const inputProfileName = document.querySelector('#input-name');
const inputProfileJob = document.querySelector('#input-job');
const formProfileButton = document.querySelector('.form_close-button');

function handleOpenProfileForm () {
    popUpProfile.classList.add("popup_opened")
}

function handleCloseProfileForm () {
    popUpProfile.classList.remove("popup_opened")
}

function handleOpenProfileSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = inputProfileName.value;
    profileJob.textContent = inputProfileJob.value;
    handleCloseProfileForm();
    
}

btnProfile.addEventListener("click", handleOpenProfileForm)
btnCloseProfile.addEventListener("click", handleCloseProfileForm)
formProfileButton.addEventListener("click", handleProfileSubmit)