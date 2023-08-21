import { openPopup } from './index.js';

class Card {
 constructor ({ name, link }, templateSelector ) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._popupPhoto = document.querySelector('.popup-photo');
    this._photo = this._popupPhoto.querySelector('.popup-photo__image');
    this._title = this._popupPhoto.querySelector('.popup-photo__title');
    
 }

 _getTemplate () {
    const cardTemplate = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.cards__list-item')
    .cloneNode(true);  
    return cardTemplate;
 }

 _setData() {
    const cardTitle = this._newCard.querySelector('.cards__title');
    cardTitle.textContent = this._name;
    this._cardImage = this._newCard.querySelector('.cards__image');
    this._cardImage.src =  this._link;
    this._cardImage.alt = `Фотография ${cardTitle.textContent}`;
    this._deleteButton = this._newCard.querySelector('.cards__delete-button');
    this._likeButton = this._newCard.querySelector('.cards__like-button');

 }

_handleDeleteCard() {
    this._newCard.remove();
    //this._newCard = null;
}

_handleLikeCard() {
    this._likeButton.classList.toggle('cards__like-button_active');
}

_handleOpenImageCard() {
    openPopup(this._popupPhoto); 
        this._photo.src = this._link; 
        this._title.textContent = this._name; 
        this._photo.alt = `Фотография ${this._title.textContent}`;
    }


 _setListeners() {
    this._deleteButton.addEventListener('click', () => { this._handleDeleteCard() } );
    this._likeButton.addEventListener('click', () => { this._handleLikeCard() } );
    this._cardImage.addEventListener('click', () => { this._handleOpenImageCard() } );
}

 getView () {
    this._newCard = this._getTemplate();
    this._setData();
    this._setListeners();

    return this._newCard;
 }

}

export default Card;