export class form {
    constructor() {
        this.free = document.getElementById("free")
        this.succses = document.getElementById("succses");
        this.Inputs = document.getElementsByClassName("form-control");
        this.imgerrorfirst = document.getElementById("img-error-first");
        this.imgerrorlast = document.getElementById("img-error-last");
        this.imgerroremail = document.getElementById("img-error-email");
        this.imgerrorpassword = document.getElementById("img-error-password");
        this.errorFirst = document.getElementById("errorFirst");
        this.errorLast = document.getElementById("errorLast");
        this.errorEmail = document.getElementById("errorEmail");
        this.errorPassword = document.getElementById("errorPassword");
        this.rejexFirstName = document.getElementById("firstname");
        this.rejexLastName = document.getElementById("lastname");
        this.rejexEmail = document.getElementById("email");
        this.rejexPassword = document.getElementById("password");
        this.rejexBtn = document.getElementById("btnForm");
        this.free.onclick = () => this.validtionBtn();
        this.rejexBtn.onclick = () => this.validtionBtn();
        this.rejexFirstName.onkeyup = () => this.validationFirstName();
        this.rejexLastName.onkeyup = () => this.validationLastName();
        this.rejexEmail.onkeyup = () => this.validtionEmail();
        this.rejexPassword.onkeyup = () => this.validtionPassword();
    }
    walcome() {
        let name = this.rejexFirstName.value;
        alert("Welcom " + name)
    }

    validationFirstName() {
        let nameRejex = /^[A-Z|a-z|0-9][^.]{2,10}$/;
        if (!nameRejex.test(this.rejexFirstName.value)) {

            this.errorFirst.style.display = "inline";
            this.imgerrorfirst.style.display = "inline";
            this.rejexBtn.disabled = "true";
            return false
        }
        else {
            this.imgerrorfirst.style.display = "none";
            this.errorFirst.style.display = "none";
            this.rejexBtn.removeAttribute("disabled");
            console.log("okName/////////")
            return true;
        }
    };
    validationLastName() {
        let lastNameRejex = /^[A-Z|a-z|0-9][^.]{2,20}$/;
        if (!lastNameRejex.test(this.rejexLastName.value)) {
            console.log("not Ok Name");
            this.errorLast.style.display = "inline";
            this.imgerrorlast.style.display = "inline";
            this.rejexBtn.disabled = "true";
            return false

        } else {
            console.log("okName/////////")
            this.errorLast.style.display = "none";
            this.imgerrorlast.style.display = "none";
            this.rejexBtn.removeAttribute("disabled");
            return true;
        }
    };
    validtionEmail() {
        let emailRejex = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
        if (!emailRejex.test(this.rejexEmail.value)) {
            console.log("not Ok email");
            this.errorEmail.style.display = "inline";
            this.imgerroremail.style.display = "inline";
            // $("#errorEmail").attr(placeholder, "New placeholder text");
            this.rejexBtn.disabled = "true";

            return false;
        } else {
            console.log(" Ok email");
            this.errorEmail.style.display = "none";
            this.imgerroremail.style.display = "none";
            this.rejexBtn.removeAttribute("disabled");
            return true;
        }
    };
    validtionPassword() {
        let PasswordRejex = /^[a-zA-Z||0-9]{7,}/
        if (!PasswordRejex.test(this.rejexPassword.value)) {
            console.log("not Ok pasword");
            this.errorPassword.style.display = "inline";
            this.imgerrorpassword.style.display = "inline";
            this.rejexBtn.disabled = "true";
            return false;
        } else {
            console.log(" Ok pasword");
            this.errorPassword.style.display = "none";
            this.imgerrorpassword.style.display = "none";
            this.rejexBtn.removeAttribute("disabled");

            return true;
        }
    }
    validtionBtn() {
        if (this.validationFirstName() && this.validationLastName() && this.validtionEmail() && this.validtionPassword() == true) {
            this.succses.style.display = "inline";
            this.walcome()
            this.resetForm();

        } else {
            this.rejexBtn.disabled = "true";
        }
    }
    resetForm() {
        for (let i = 0; i < this.Inputs.length; i++) {
            this.Inputs[i].value = "";
        }
    }
}