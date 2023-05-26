
const validation = (userData, errors, setErrors) => {
    if (!userData.username)
        setErrors({ ...errors, username: "Por favor, completa este campo" })
    else if(userData.username.length > 35)
        setErrors({ ...errors, username: "No puede superar los 35 caracteres" })
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setErrors({ ...errors, username: "Email inválido" })
    }else{
        setErrors({ ...errors, username: "" })
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        setErrors({ ...errors, password: "Introduzca una contraseña entre 6 y 10 caracteres" })
    }else if(!/\d/.test(userData.password)){
        setErrors({ ...errors, password: "Debe contener al menos un número" })
    }
};

export default validation


// /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/