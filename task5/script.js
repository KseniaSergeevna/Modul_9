const input = document.querySelector ('input')
const button = document.querySelector ('button')
const duplicaterField = document.querySelector ('#duplicatorField')

input.addEventListener('input', function (event) {
    event.preventDefault();
    duplicateField.textContent = input.value;
})


button.addEventListener('click', function (event) {
    console.log(input.value)
    input.value = "";
    duplicateField.textContent = "";
})