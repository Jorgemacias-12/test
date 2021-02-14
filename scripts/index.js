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

    if (inputNumber1.value == "" && inputNumber2.value != "") {
        parentElement = document.createElement("div");
        parentElement.className = classes[0];
        group_1.appendChild(parentElement);
    }

    if (inputNumber2.value == "" && inputNumber1.value != "") {
        parentElement = document.createElement("div");
        parentElement.className = classes[0];
        group_2.appendChild(parentElement);
    }

    if (inputNumber1.value == "" && inputNumber2.value == "") {
        parentElement = document.createElement("div");
        parentElement_2 = document.createElement("div");
        parentElement.className = classes[0];
        parentElement_2.className = classes[0];
        group_1.appendChild(parentElement);
        group_2.appendChild(parentElement_2);
    }
    else {

    }


}

const form_button = document.getElementById("button-form");
form_button.addEventListener("click", validate);