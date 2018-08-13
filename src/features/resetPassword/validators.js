
// @flow

function validate(values: any) {
    let errors: any = {};
    
    if(!values.password){
        errors.password ="Заполните поле";
    }
    else if(values.password.length < 6){
        errors.password = "Минимум 6 символов";
    }
    if(!values.confirm_password){
        errors.confirm_password = "Заполните поле";
    }
    else if(values.confirm_password !== values.password){
        errors.confirm_password = "Пароли не совпадают";
    }
    return errors;
}

export default validate;