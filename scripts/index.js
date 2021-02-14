function validate() {

    const classes = ['errorContainer','closeable-c',
                    'fas fa-times','closeable','text'];

    const group_1 = document.getElementById("inputGroup-1");
    const group_2 = document.getElementById("inputGroup-2");

    let inputNumber1;
    let inputNumber2;

    inputNumber1 = document.getElementById("input-1");
    inputNumber2 = document.getElementById("input-2");

    let parentElement;
    let parentElement_2;
    let closeableParent;
    let closeableElement;
    let errorText;

    if (inputNumber1.value == "" && inputNumber2.value != "") {
        parentElement = document.createElement("div");
        parentElement.className = classes[0];
        closeableParent = document.createElement("div");
        closeableParent.className = classes[1];
        parentElement.appendChild(closeableParent);
        closeableElement = document.createElement("i");
        closeableElement.className = classes[2] +" "+ classes[3];
        closeableParent.appendChild(closeableElement);
        errorText = document.createElement("p");
        errorText.className = classes[4];
        errorText.innerText = "El campo esta vacio"
        parentElement.appendChild(errorText);
        group_1.appendChild(parentElement);
    }

    if (inputNumber2.value == "" && inputNumber1.value != "") {
        parentElement = document.createElement("div");
        parentElement.className = classes[0];
        closeableParent = document.createElement("div");
        closeableParent.className = classes[1];
        parentElement.appendChild(closeableParent);
        closeableElement = document.createElement("i");
        closeableElement.className = classes[2] + " " + classes[3];
        closeableParent.appendChild(closeableElement);
        errorText = document.createElement("p");
        errorText.className = classes[4];
        errorText.innerText = "El campo esta vacio"
        parentElement.appendChild(errorText);
        group_2.appendChild(parentElement);
    }

    if (inputNumber1.value == "" && inputNumber2.value == "") {
        parentElement = document.createElement("div");
        parentElement.className = classes[0];
        closeableParent = document.createElement("div");
        closeableParent.className = classes[1];
        parentElement.appendChild(closeableParent);
        closeableElement = document.createElement("i");
        closeableElement.className = classes[2] + " " + classes[3];
        closeableParent.appendChild(closeableElement);
        errorText = document.createElement("p");
        errorText.className = classes[4];
        errorText.innerText = "El campo esta vacio"
        parentElement.appendChild(errorText);
        // Parent #21
        parentElement_2 = document.createElement("div");
        parentElement_2.className = classes[0];
        closeableParent_2 = document.createElement("div");
        closeableParent_2.className = classes[1];
        parentElement_2.appendChild(closeableParent_2);
        closeableElement_2 = document.createElement("i");
        closeableElement_2.className = classes[2] + " " + classes[3];
        closeableParent_2.appendChild(closeableElement_2);
        errorText_2 = document.createElement("p");
        errorText_2.className = classes[4];
        errorText_2.innerText = "El campo esta vacio"
        parentElement_2.appendChild(errorText_2);

        group_1.appendChild(parentElement);
        group_2.appendChild(parentElement_2);
    }
    else {
        let number1 = parseInt(inputNumber1.value);
        let number2 = parseInt(inputNumber2.value);
        let resultElement = document.createElement("div");
        resultElement.className = "result";

        closeableParent = document.createElement("div");
        closeableParent.className = classes[1];

        closeableElement = document.createElement("i");
        closeableElement.className = classes[2] + " " + classes[3];
        closeableParent.appendChild(closeableElement)

        resultElement.appendChild(closeableParent);

        errorText = document.createElement("p");
        errorText.className = classes[4] + " " + "text-r";
        errorText.innerText = "Suma: " + number1 + " + " + number2 + " = " +
        calculate(number1,number2);
        resultElement.appendChild(errorText);

        document.getElementById("containerResults").appendChild(
            resultElement
        );
        inputNumber1.value = "";
        inputNumber2.value = "";
    }


}

const form_button = document.getElementById("button-form");
form_button.addEventListener("click", validate);


function calculate(a,b){
    return a + b;
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("input-1"), function (value) {
    return /^-?\d*$/.test(value);
});

setInputFilter(document.getElementById("input-2"), function (value) {
    return /^-?\d*$/.test(value);
});