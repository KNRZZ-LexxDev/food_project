export const getTextError = (type) => {
    switch(type){
        case "required":
            return "Поле обязательно для заполнения"
        case "minLength":
            return "В данном поле должно быть больше символов"
        case "maxLength":
            return "В данном поле должно быть меньше символов"
        case "pattern":
            return "Ошибка ввода"
        default:
            return `${type} - ошибка`
    }
}; 