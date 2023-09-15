// import './index.css';
import Card from "../components/Card.js";
import { validationConfig, FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../scripts/initial-cards.js';
import Section from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

// const popupEditProfile = document.querySelector('.popup_edit'); ------------
// const popupAddPlace = document.querySelector('.popup_place'); ------------------

const profileEditButton = document.querySelector('.profile__edit-button'); //ok//
const formElementEditProfile = document.querySelector('.popup__form'); //ok//
const popupNameInput = formElementEditProfile.querySelector('.form__input_type_name'); //ok//
const popupAboutInput = formElementEditProfile.querySelector('.form__input_type_about'); //ok//
const profileAddPlaceButton = document.querySelector('.profile__add-button'); //ok//
const formPlaceElement = document.querySelector('#form_place'); //ok//
const popupPhoto = new PopupWithImage('.popup-photo'); //ok//
// const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close-button');
// const nameInput = document.querySelector('.profile__name');
// const aboutInput = document.querySelector('.profile__caption');
// const buttonCloseAddPlace = popupAddPlace.querySelector('.popup__close-button');
// const titleInput = formPlaceElement.querySelector('.form__input_type_title');
// const linkInput = formPlaceElement.querySelector('.form__input_type_link');
// const submitButton = formPlaceElement.querySelector('.form__button-save');
// const closeButtonPhotoPopup = document.querySelector('.popup-photo__close-button');
// const photo = popupPhoto.querySelector('.popup-photo__image');
// const title = popupPhoto.querySelector('.popup-photo__title');
const popupAddPlace = new PopupWithForm({
  popupSelector: '.popup-place', 
  submitForm: (cardData) => {
    const card = renderCard(cardData)
    cardList.addItem(card)  
  }
})

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup-edit', 
  submitForm: (cardData) => {
   profile.setUserInfo(cardData)
 }
})

const profile = new UserInfo({nameSelector: '.profile__name', infoSelector: '.profile__about'});

popupPhoto.setEventListeners();
popupAddPlace.setEventListeners();
popupEditProfile.setEventListeners();

function handleCardClick(cardData) {
  popupPhoto.open(cardData);
}

// const cardsContainer = document.querySelector('.cards');
// const templateElement = document.querySelector('#card').content; //создали переменную из template из которой нам нужен будет контент

const validationAddForm = new FormValidator(validationConfig, formPlaceElement)
validationAddForm.enableValidation();
const validationEditForm = new FormValidator(validationConfig, formElementEditProfile)
validationEditForm.enableValidation();

profileEditButton.addEventListener('click', () => {
  popupEditProfile.open();
  const userInfo = profile.getUserInfo();
  popupNameInput.value = userInfo.name;
  popupAboutInput.value = userInfo.info;
  validationEditForm.resetValidation();
});

profileAddPlaceButton.addEventListener('click', () => {   
  popupAddPlace.open();
  validationEditForm.resetValidation();
});

const cardList = new Section ({
  items: initialCards,
  renderer: (cardData) => {
    const card = renderCard(cardData);
    cardList.addItem(card)
  },
},
'.cards'
)

cardList.renderItems();

function renderCard(cardData) {
  const card = new Card(cardData, '.card_default', () => handleCardClick(cardData));
  const cardElement = card.getView();
  return cardElement
}  
// const popupArray = Array.from(document.querySelectorAll('.popup'))
//   popupArray.forEach((item) => {
//     item.addEventListener('click', (evt) => {closeByOverlay(evt)})
//     })


// //функция Сохранения информации при редактировании профиля
// function handleSaveEditProfile(evt) {
//     evt.preventDefault();
//     nameInput.textContent = popupNameInput.value;
//     aboutInput.textContent = popupAboutInput.value;
//     closePopup(popupEditProfile);
// }

// formElementEditProfile.addEventListener('submit', handleSaveEditProfile);




// initialCards.forEach((cardData) => {
//   cardsContainer.prepend(renderCard(cardData)); 
// });

// //функция сохранения новой карточки
// function handleSaveCreateCard(evt) {
//     evt.preventDefault();
//     const cardData = {name: titleInput.value, link: linkInput.value};
//     cardsContainer.prepend(renderCard(cardData));
//     formPlaceElement.reset();
//     closePopup(popupAddPlace);
// }

//   formPlaceElement.addEventListener('submit', handleSaveCreateCard); 
