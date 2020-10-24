/* menue bar function*/
function toggleSidebar(ref){
    document.getElementById("sidebar").classList.toggle('active');
  }





//Add a JQuery click event handler onto our checkbox.
$("#storagePermission").click(function () {
  //If the checkbox is checked.
  if ($(this).is(":checked")) {
    //Enable the submit button.
    $(".storageButton").attr("disabled", false);
  } else {
    //If it is not checked, disable the button.
    $(".storageButton").attr("disabled", true);
  }
});
let formoobj = {
  name: null,
  email: null,
  DOB: null,
  phone: null,
  pass: null,
};
function fillform() {
  let storeref = null;
  if (localStorage.getItem("formoobj") != null) {
    storeref = localStorage;
  } else if (sessionStorage.getItem("formoobj") != null) {
    storeref = sessionStorage;
  }
  if (storeref != null) {
    formoobj = JSON.parse(storeref.formoobj);
    document.getElementById("Username").value = formoobj.name;
    document.getElementById("email").value = formoobj.email;
    document.getElementById("phone").value = formoobj.phone;
    document.getElementById("pass").value = formoobj.pass;
    document.getElementById("DOB").value = formoobj.DOB;
  }
}
function localsessionstore(storetype) {
  formoobj.name = document.getElementById("Username").value;
  formoobj.email = document.getElementById("email").value;
  formoobj.phone = document.getElementById("phone").value;
  formoobj.pass = document.getElementById("pass").value;
  formoobj.DOB = document.getElementById("DOB").value;
  if (storetype == "local") {
    localStorage.setItem("formoobj", JSON.stringify(formoobj));
    if (sessionStorage.getItem("formoobj") != null) {
      sessionStorage.removeItem("formoobj");
    }
  } else {
    sessionStorage.setItem("formoobj", JSON.stringify(formoobj));
    if (localStorage.getItem("formoobj") != null) {
      localStorage.removeItem("formoobj");
    }
  }
}

function clearall() {
  if (localStorage.getItem("formoobj") != null) {
    localStorage.removeItem("formoobj");
  }
  if (sessionStorage.getItem("formoobj") != null) {
    sessionStorage.removeItem("formoobj");
  }
  document.getElementById("Username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("DOB").value = "";
}

function validation() {
  var name = document.getElementById("Username").value;
  var email = document.getElementById("email").value;
  var DOB = document.getElementById("DOB").value;
  var phone = document.getElementById("phone").value;
  var pass = document.getElementById("pass").value;
  var Regexname = /^[A-Za-z]{3,20}/;
  var Regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var RegexDOB = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  var Regexphone = /^\962?([7-9]{2})\)?([0-9]{7})$/;
  var Regexpass = /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/;

  if (Regexname.test(name)) {
    document.getElementById("name_err").innerHTML = "";
  } else {
    document.getElementById("name_err").innerHTML =
      "Please Enter a valid  name";
    return false;
  }
  if (Regexemail.test(email)) {
    document.getElementById("email_err").innerHTML = "";
  } else {
    document.getElementById("email_err").innerHTML =
      "Please Enter a valid email";
    return false;
  }

  if (Regexpass.test(pass)) {
    document.getElementById("pass_err").innerHTML = "";
  } else {
    document.getElementById("pass_err").innerHTML =
      "Please Enter a valid password";
    return false;
  }
  if (Regexphone.test(phone)) {
    document.getElementById("phone_err").innerHTML = "";
  } else {
    document.getElementById("phone_err").innerHTML =
      "Please Enter a valid phone no.";
    return false;
  }
  if (RegexDOB.test(DOB)) {
    document.getElementById("DOB").innerHTML = "";
  } else {
    document.getElementById("DOB_err").innerHTML = "Please Enter DOB";
    return false;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("pw", email);
  alert("Your account has been created");
}

/* cal code*/
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    let f = 1

    for(let i=prev; i>=1; i--){
      f = f * i;
    }

    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      case '|X|':
        computation = Math.abs(prev - current) 
        break
      case 'X^':
        computation = Math.pow(prev, current) 
        break
        case 'X!':
        computation = f
          break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})