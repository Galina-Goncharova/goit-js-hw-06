const textInput = document.querySelector("#validation-input");
const textInputValid = Number(textInput.dataset.length);


textInput.addEventListener("blur",
    function inputTargets(event) {
        const inputTarget = event.currentTarget.value.length;
        if (inputTarget === textInputValid) {
            textInput.classList.add("valid");
            textInput.classList.remove("invalid");
        }
        else {
            textInput.classList.add("invalid");
            textInput.classList.remove("valid");
        };
    }
);



