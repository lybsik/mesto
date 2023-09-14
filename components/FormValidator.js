export const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveButtonClass: 'form__button-save_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__input-error_visible'
}

export class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement;
    }
    
    enableValidation() {  
        this._setEventListeners()
    }
    
    _showInputError(input, errorMessage) {
        const span = this._formElement.querySelector(`.${input.id}-error`)
        input.classList.add(this._validationConfig.inputErrorClass)
        span.textContent = errorMessage
        span.classList.add(this._validationConfig.errorClass)
    }

    _hideInputError(input) {
        input.classList.remove(this._validationConfig.inputErrorClass)
        const span = this._formElement.querySelector(`.${input.id}-error`)
        span.textContent = ''
        span.classList.remove(this._validationConfig.errorClass)
    }

    _isValid (input) {
        if (!input.validity.valid) {
            this._showInputError(input, input.validationMessage)
        } else {
            this._hideInputError(input)
        }
    }

    _setEventListeners() {
        this._inputs = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
        this._button = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._isValid(input)
                this._toggleButtonState(this._inputs, this._button)
            })
        })
    }

    _hasInvalidValue(inputs) {
        return this._inputs.some((input) => {
            return !input.validity.valid;})
        }

    _toggleButtonState(inputs, button) {
        if (this._hasInvalidValue(inputs)) {
            this._button.classList.add(this._validationConfig.inactiveButtonClass)
            this._button.disabled = true
        } else {
            this._button.classList.remove(this._validationConfig.inactiveButtonClass)
            this._button.disabled = false
        }
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputs.forEach((input) => {
            this._hideInputError(input)
        })
    }
}










    
// function enableValidation (config) {}

    
     // const showInputError = (form, input) => {
    //     input.classList.add(config.inputErrorClass)
    //     const span = form.querySelector(`.${input.id}-error`)
    //     span.textContent = input.validationMessage
    //     span.classList.add(config.errorClass)
    // }
    // const hideInputError = (form, input) => {
    //     input.classList.remove(config.inputErrorClass)
    //     const span = form.querySelector(`.${input.id}-error`)
    //     span.textContent = ''
    //     span.classList.remove(config.errorClass)
    // }
    // const isValid = (form, input) => {
    //     if (!input.validity.valid) {
    //         showInputError(form, input)
    //     } else {
    //         hideInputError(form, input)
    //     }
    // }
    // const hasInvalidValue = (inputs) => {
    //     return inputs.some(input => !input.validity.valid)
    //     }
        
    // const toggleButtonState = (inputs, button) => {
    //     if (hasInvalidValue(inputs)) {
    //         button.classList.add(config.inactiveButtonClass)
    //         button.disabled = true
    //     } else {
    //         button.classList.remove(config.inactiveButtonClass)
    //         button.disabled = false
    //     }
    // }
// const setEventListeners = (form) => {
//     const inputs = Array.from(form.querySelectorAll(config.inputSelector));
//     const button = form.querySelector(config.submitButtonSelector);

//     toggleButtonState(inputs, button)
//     inputs.forEach(input => {
//         input.addEventListener('input', () => {
//             isValid(form, input)
//             toggleButtonState(inputs, button)
//         })
//     })
//     }
// const forms = Array.from(document.querySelectorAll(config.formSelector));
//     forms.forEach(form => {
//         setEventListeners(form);
//     })




    
