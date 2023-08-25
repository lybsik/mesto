import Card from "./Card.js";
import { validationConfig, FormValidator } from './FormValidator.js';

const popupEditProfile = document.querySelector('.popup_edit');
const popupAddPlace = document.querySelector('.popup_place');
const popupPhoto = document.querySelector('.popup-photo');

const profileEditButton = document.querySelector('.profile__edit-button');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close-button');

const formElementEditProfile = document.querySelector('#form_edit');
const popupNameInput = formElementEditProfile.querySelector('.form__input_type_name');
const popupAboutInput = formElementEditProfile.querySelector('.form__input_type_about');
const nameInput = document.querySelector('.profile__name');
const aboutInput = document.querySelector('.profile__caption');

const profileAddPlaceButton = document.querySelector('.profile__add-button');
const buttonCloseAddPlace = popupAddPlace.querySelector('.popup__close-button');


const formPlaceElement = document.querySelector('#form_place');
const titleInput = formPlaceElement.querySelector('.form__input_type_title');
const linkInput = formPlaceElement.querySelector('.form__input_type_link');
const submitButton = formPlaceElement.querySelector('.form__button-save');

const closeButtonPhotoPopup = document.querySelector('.popup-photo__close-button');
const photo = popupPhoto.querySelector('.popup-photo__image');
const title = popupPhoto.querySelector('.popup-photo__title');

const cardsContainer = document.querySelector('.cards');
const templateElement = document.querySelector('#card').content; //создали переменную из template из которой нам нужен будет контент

const validationAddForm = new FormValidator(validationConfig, formPlaceElement)
validationAddForm.enableValidation();
const validationEditForm = new FormValidator(validationConfig, formElementEditProfile)
validationEditForm.enableValidation();

//функция закрытия попапа через оверлей
function closeByOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(evt.target)
    }
  } 
  
const popupArray = Array.from(document.querySelectorAll('.popup'))
  popupArray.forEach((item) => {
    item.addEventListener('click', (evt) => {closeByOverlay(evt)})
    })

//функция закрытия при нажатии на ESCAPE
  function closeEscButton(evt) {
    if (evt.key === "Escape") {
      const popup = document.querySelector('.popup_opened')
      closePopup(popup)
    }
  }  

//Функция открывания попапов
export function openPopup(popup) {
    popup.classList.add('popup_opened'); /*Добавляется модификатор открытия со свойством видимости*/
    document.addEventListener('keyup', closeEscButton);
}

//функция закрывания попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened'); /*Удаляется модификатор открытия, попап становится снова невидимым*/
    document.removeEventListener('keyup', closeEscButton);
}



//функция открытия редактирования профиля
function openEditProfilePopup(){
    formElementEditProfile.reset();
    popupNameInput.value = nameInput.textContent; /*В первый элемент формы даем значение равное первому тексту (у нас это имя) и говорим что это текст-Это для редактирования информации*/
    popupAboutInput.value = aboutInput.textContent; /*Во второй элемент формы даем значение равное второму тексту (профессия) и говорим что это текст*/
    openPopup(popupEditProfile);
}

//функция открытия добавления карточки
function openAddPlacePopup() {
    formPlaceElement.reset();
    openPopup(popupAddPlace);
    
}


profileEditButton.addEventListener('click', () => {
  openEditProfilePopup() 
  validationEditForm.resetValidation();
});
buttonCloseEditProfile.addEventListener('click',() => {closePopup(popupEditProfile)}); 
profileAddPlaceButton.addEventListener('click', () => {   
  openAddPlacePopup() 
  validationEditForm.resetValidation();
});
buttonCloseAddPlace.addEventListener('click', () => {closePopup(popupAddPlace)}); 
closeButtonPhotoPopup.addEventListener('click', () => {closePopup(popupPhoto)});

//функция Сохранения информации при редактировании профиля
function handleSaveEditProfile(evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameInput.value;
    aboutInput.textContent = popupAboutInput.value;
    closePopup(popupEditProfile);
}

formElementEditProfile.addEventListener('submit', handleSaveEditProfile);


function renderCard(cardData) {
  const card = new Card(cardData, '.card_default');
  const cardElement = card.getView();
  return cardElement
}

initialCards.forEach((cardData) => {
  cardsContainer.prepend(renderCard(cardData)); 
});

//функция сохранения новой карточки
function handleSaveCreateCard(evt) {
    evt.preventDefault();
    const cardData = {name: titleInput.value, link: linkInput.value};
    cardsContainer.prepend(renderCard(cardData));
    formPlaceElement.reset();
    closePopup(popupAddPlace);
}

  formPlaceElement.addEventListener('submit', handleSaveCreateCard); 
