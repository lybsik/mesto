const profileEditButton = document.querySelector(".profile__edit-button"); /*Заводим постоянную переменную выбирая из всего документа кнопку редактирования профиля*/
const popupEditProfile = document.querySelector(".popup_type_edit-profile"); /*Заводим постоянную переменную выбирая из всего документа попап редактирования профиля*/
const buttonCloseEditProfile = popupEditProfile.querySelector(".popup__close-button"); /*Заводим постоянную переменную выбирая из выше найденного попапа кнопку закрытия*/
const formElement = document.querySelector(".form"); /*Заводим постоянную переменную выбирая из всего документа форму редактирования профиля*/
const popupNameInput = formElement.querySelector(".form__input_type_name"); /*Объявляем переменную (элемент формы) выбирая первый нужный инпут из этой формы*/
const popupAboutInput = formElement.querySelector(".form__input_type_about"); /*Объявляем переменную (элемент формы) выбирая второй нужный инпут из этой формы*/
const nameInput = document.querySelector(".profile__name"); /*Объявляем первую переменную ввода выбирая из всего документа нужный текст*/
const aboutInput = document.querySelector(".profile__caption"); /*Объявляем вторую переменную ввода выбирая из всего документа нужный текст*/

/*При открытии попапа*/

function openPopupEdit() {
    /*Функция редактирования профиля*/

    popupEditProfile.classList.add("popup_opened"); /*Добавляется модификатор открытия со свойством видимости*/
    popupNameInput.value = nameInput.textContent; /*В первый элемент формы даем значение равное первому тексту (у нас это имя) и говорим что это текст*/
    popupAboutInput.value = aboutInput.textContent; /*Во второй элемент формы даем значение равное второму тексту (профессия) и говорим что это текст*/
}

function closePopupEdit() {
    /*Функция закрытия попапа*/

    popupEditProfile.classList.remove("popup_opened"); /*Удаляется модификатор открытия, попап становится снова невидимым*/
}

/*Отслеживаем события*/

profileEditButton.addEventListener("click", openPopupEdit); /*кнопка редактирования слышит как при нажатии на нее запускается Функция редактирования профиля*/
buttonCloseEditProfile.addEventListener("click", closePopupEdit); /*кнопка закрытия на попапе слышит как при нажатии на нее запускается Функция закрытия попапа*/

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    nameInput.textContent = popupNameInput.value;
    aboutInput.textContent = popupAboutInput.value;
    closePopupEdit();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
