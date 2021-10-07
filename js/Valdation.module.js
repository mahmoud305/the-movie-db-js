 var isFormReady=false;
function isInputEmty(input) {
    console.log("inside empty");
    if ($(input).val() == "") {
        console.log("inside empty");
        $(input).next().css("display", "block");
        $(input).next().html("this input is required");
        isFormReady=false;
        return false;
    }
    isFormReady=true;
    $(input).next().css("display", "none");
    return true;
};

function formValidation(regex,input,errorMessage) {
 
    let inputAlertDiv = $(input).next();
    console.log(regex.test(input.value));
    if (!regex.test($(input).val())) {
        console.log("hello invalidarion");
        isFormReady=false
        inputAlertDiv.css("display", "block");
        inputAlertDiv.html(errorMessage);
    }
    else {
        console.log("bye");
        isFormReady=true;
        inputAlertDiv.css("dispaly", "none");
    }
}

$("#name").blur(function (e) {
    let nameRegx = /^[a-zA-Z]{3,20}$/;
    // console.log(this);
    if(isInputEmty(this))
    formValidation(nameRegx,this, " name must be in range  from 3 to 20 -(upper or lower)- Characters ");
    
    // nameValidation(this);

});

$("#email").blur(function (e) {
    let emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(isInputEmty(this))
    formValidation(emailRegex ,this,"Invalid email ,please write valid email");

});


$("#phone").blur(function (e) {
    let phoneRegex=/^(002)?01[0125][0-9]{8}$/;
    if(isInputEmty(this))
    formValidation(  phoneRegex,this,"Invalid phone ,(002) is optional , phone number must contain 11 numbers");

});
$("#age").blur(function (e) {
    let ageRegex=/^([1-7][0-9]|80)$/;
    if(isInputEmty(this))
    formValidation(  ageRegex ,this,"Invalid Age ,you must be greater than 9 and smaller than 81 years old");

});
$("#password").blur(function (e) {
    let passwordRegex=/^[A-Za-z]\w{7,14}$/;
    if(isInputEmty(this))
    formValidation(   passwordRegex ,this,"[7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter");

});
$("#rePassword").blur(function (e) {
     
    if(isInputEmty(this))
    if($("#password").val()!=this.value){
        isFormReady=false;
        $(this).next().css("display", "block");
        $(this).next().html("password doesnot match");
    }
    else {
        isFormReady=true;
        $(this).next().css("display", "none");
    }

});

export default isFormReady;
// function nameValidation(name) {
//     console.log(name);
//     console.log("in validation");
//     let nameRegx = /^[a-zA-Z]{3,20}$/;
//     let regxDefination = " name must be in range  from 3 to 20 -(upper or lower)- Characters ";
//     let nameAlertDiv = $("#name").next();
//     console.log(nameRegx.test(name));
//     if (!nameRegx.test($(name).val())) {
//         console.log("hello invalidarion");
//         nameAlertDiv.css("display", "block");
//         nameAlertDiv.html(regxDefination);
//     }
//     else {
//         console.log("bye");
//         nameAlertDiv.css("dispaly", "none");
//     }
// }
