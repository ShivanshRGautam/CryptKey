document.getElementById(elements.regenerate).addEventListener('click', () => {
    generatePassword();
});

document.getElementById(elements.copy).addEventListener('click', () => {
    const element = document.getElementById('generated_password');
    navigator.clipboard.writeText(element.innerHTML);
});

document.getElementById(elements.characterLength).addEventListener('change', () => {
    generatePassword();
});

document.getElementById(elements.lowercaseCheckbox).addEventListener('change', () => {
    generatePassword();
});

document.getElementById(elements.uppercaseCheckbox).addEventListener('change', () => {
    generatePassword();
});

document.getElementById(elements.numberCheckbox).addEventListener('change', () => {
    generatePassword();
});

document.getElementById(elements.specialCheckbox).addEventListener('change', () => {
    generatePassword();
});