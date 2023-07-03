




/* import './index.css';
// кнопка открытия попапа редактирования профиля
buttonEdit.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();//профиль инфо - объект, содержащий имя и описание профиля, записанные в разметку страницы
  nameInput.value = profileInfo.name;//при открытии попапа значение инпута имени равно имени профиля, берется из значения name объекта профиль инфо
  aboutInput.value = profileInfo.about;//при открытии попапа значение инпута о себе равно о себе профиля, берется из значения name объекта профиль инфо
  validationPopupProfile.resetPopupForm(); //сбасываем ошибки валидации и проверяем на валидность поля
  popupWithFormEdit.open();
});

// экземпляр класса для попапа редактирования профиля
const popupWithFormEdit = new PopupWithForm(
  {
    submitForm: (data) => {
      popupWithFormEdit.loading(true);
      api.setUserInfo(data)
        .then((res) => {
          userInfo.setUserInfo(res);
          popupWithFormEdit.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormEdit.loading(false);
        })
    }
  }, '#popup-edit');
popupWithFormEdit.setEventListeners();
*/
