const popupEditProfile = document.querySelector('.popup_edit'); 
const popupAddPlace = document.querySelector('.popup_place');
const popupPhoto = document.querySelector('.popup-photo')

const profileEditButton = document.querySelector('.profile__edit-button'); 
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close-button'); 

const formElement = document.querySelector('.form'); /*Заводим постоянную переменную выбирая из всего документа форму редактирования профиля*/
const popupNameInput = formElement.querySelector('.form__input_type_name'); /*Объявляем переменную (элемент формы) выбирая первый нужный инпут из этой формы*/
const popupAboutInput = formElement.querySelector('.form__input_type_about'); /*Объявляем переменную (элемент формы) выбирая второй нужный инпут из этой формы*/
const nameInput = document.querySelector('.profile__name'); /*Объявляем первую переменную ввода выбирая из всего документа нужный текст*/
const aboutInput = document.querySelector('.profile__caption'); /*Объявляем вторую переменную ввода выбирая из всего документа нужный текст*/

const profileAddPlaceButton = document.querySelector('.profile__add-button'); /*Заводим постоянную переменную выбирая из всего документа кнопку добавления фото*/
const buttonCloseAddPlace = popupAddPlace.querySelector('.popup__close-button'); /*Заводим постоянную переменную выбирая из выше найденного попапа кнопку закрытия*/

const formPlaceElement = document.querySelector('#form_place'); //заводим переменную для формы добавления новой карточки
const titleInput = formPlaceElement.querySelector('.form__input_type_title'); /*Объявляем переменную (элемент формы) выбирая первый нужный инпут из этой формы*/
const linkInput = formPlaceElement.querySelector('.form__input_type_link'); /*Объявляем переменную (элемент формы) выбирая второй нужный инпут из этой формы*/

const closeButtonPhotoPopup = document.querySelector('.popup-photo__close-button'); //создаем переменную кнопки закрытия фото выбрав из документа класс кнопки этой
let photo = popupPhoto.querySelector('.popup-photo__image'); //создаем переменную фотографии выбрав из ранее созданной переменной класс с картинкой
let title = popupPhoto.querySelector('.popup-photo__title'); //создаем переменную заголовка выбрав из ранее созданной переменной класс с заголовком

const cardsContainer = document.querySelector('.cards'); //создали переменную карточки выбрав из документа класс cards
let cardTemplate = document.querySelector('#card').content; //создали переменную из template из которой нам нужен будет контент

initialCards.forEach((item) => { //перебираем массив с переменной item
    let card = createCard(item.name, item.link) //создаем переменную карточки внутри которй будет созданы переменные со значениями name и link как в нашем массиве
    cardsContainer.prepend(card) //объявляем переменную карточки появляющуся ПЕРЕД всеми остальными из массива
})

//Функция открывания попапов
function openPopup(popup) {
    popup.classList.add('popup_opened'); /*Добавляется модификатор открытия со свойством видимости*/
    popupNameInput.value = nameInput.textContent; /*В первый элемент формы даем значение равное первому тексту (у нас это имя) и говорим что это текст-Это для редактирования информации*/
    popupAboutInput.value = aboutInput.textContent; /*Во второй элемент формы даем значение равное второму тексту (профессия) и говорим что это текст*/
    titleInput.value = ''; //даем значение названия для добавления новой карточки
    linkInput.value = ''; //даем значение ссылки для добавления новой карточки
    titleInput.placeholder = 'Название'; //тут пишем что по умолчанию будет в поле прописано
    linkInput.placeholder = 'Ссылка на картинку'; //тут то же самое
}

//функция закрывания попапов
function closePopup(popup) {
    popup.classList.remove('popup_opened'); /*Удаляется модификатор открытия, попап становится снова невидимым*/
}

profileEditButton.addEventListener('click', () => {openPopup(popupEditProfile)}); /*кнопка редактирования слышит как при нажатии на нее запускается Функция редактирования профиля*/
buttonCloseEditProfile.addEventListener('click',() => {closePopup(popupEditProfile)}); /*кнопка закрытия на попапе слышит как при нажатии на нее запускается Функция закрытия попапа*/

profileAddPlaceButton.addEventListener('click', () => {openPopup(popupAddPlace)});//кнопка с плюсиком слышит как при клике на нее запускается функция открытия попапа
buttonCloseAddPlace.addEventListener('click', () => {closePopup(popupAddPlace)}); //кнопка с плюсиком слышит как при клике на нее запускается функция закрытия попапа

closeButtonPhotoPopup.addEventListener('click', () => {closePopup(popupPhoto)}) //кнопка крестика на фото слышит как при клике на нее попап закрывается

//функция Сохранения информации при редактировании профиля
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    nameInput.textContent = popupNameInput.value;
    aboutInput.textContent = popupAboutInput.value;
    closePopup(popupEditProfile);
}

formElement.addEventListener('submit', handleFormSubmit); //наша форма для редактирования слышит как при сохранении запускается функция сохранения информации при редактировании профиля

//функция создания новой карточки
function createCard (name, link) { //написали функцию с двумя переменными имя и ссылки (как в нашем массиве)
    const card = cardTemplate.querySelector('.cards__list-item').cloneNode(true); //создали переменную выбрав из ранее созданной переменной нужный нам класс и клонируем его содержимое
    const likeButton = card.querySelector('.cards__like-button'); //создали переменную лайка
    const deleteButton = card.querySelector('.cards__delete-button'); //создали переменную кнопки удаления
    const cardImage = card.querySelector('.cards__image'); //создали переменную изображения карточки
    cardImage.src =  link //говоорим что искать мы ее будем из ссылки
    const cardTitle = card.querySelector('.cards__title'); //создали переменную заголовка карточки
    cardTitle.textContent = name; //сказали что текст для нее будем брать из имени
    likeButton.addEventListener('click', function() { //кнопка лайка слушает как при клике на нее запускается функция:
        likeButton.classList.toggle('cards__like-button_active'); //в которой переключается состояние нашего сердечка на активное
    });
    deleteButton.addEventListener('click', function() { //кнопка удаления прик клике запускает функцию:...
        let element = deleteButton.closest('.cards__list-item'); //создадим переменную при которой корзина наша с классом
        element.remove(); //...при которой наша переменная с карточкой удаляется
    });
    cardImage.addEventListener('click', function(){  //картинка слушает при клике вызывается функция, при которой:
        popupPhoto.classList.add('popup_opened'); //добавляется класс открывашки
        photo.src = cardImage.src; //фото ищется в картимэдже
        title.textContent = cardTitle.textContent; //заголовок ищется в заголовке
    })
    return(card); //возвращаем готовую карточку со всем что выше мы в нее положили
}
//функция сохранения новой карточки
function submitCard(evt) { 
    evt.preventDefault();
    let card = createCard(titleInput.value, linkInput.value);
    cardsContainer.prepend(card);
    closePopup(popupAddPlace);
  }  
  
  formPlaceElement.addEventListener('submit', submitCard); //наша форма создания новой краточки слышит как при сохранении запускается функция созданная выше
  