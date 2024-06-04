function nameValidator(username) {
    // const patern = /^[a-z0-9_-]{3,15}$/g
    // return patern.test(username)
    return !!(username?.trim().length)

}

function passwordValidator(password) {
    const patern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g
    return patern.test(password)
}

function phoneValidator(phone) {
    const patern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g
    return patern.test(phone)
}

export {
    nameValidator,
    passwordValidator,
    phoneValidator
}