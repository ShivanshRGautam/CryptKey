// entropy
function defineEntropyLevel(entropy) {
    switch (true) {
        case entropy > EntropyLib[EntropyDescriptors.default].value && entropy <= EntropyLib[EntropyDescriptors.very_weak].value: return EntropyDescriptors.very_weak
        case entropy > EntropyLib[EntropyDescriptors.very_weak].value && entropy <= EntropyLib[EntropyDescriptors.weak].value: return EntropyDescriptors.weak
        case entropy > EntropyLib[EntropyDescriptors.weak].value && entropy <= EntropyLib[EntropyDescriptors.reasonable].value: return EntropyDescriptors.reasonable
        case entropy > EntropyLib[EntropyDescriptors.reasonable].value && entropy <= EntropyLib[EntropyDescriptors.strong].value: return EntropyDescriptors.strong
        case entropy > EntropyLib[EntropyDescriptors.strong].value && entropy <= EntropyLib[EntropyDescriptors.very_strong].value: return EntropyDescriptors.very_strong
        case entropy > EntropyLib[EntropyDescriptors.very_strong].value: return EntropyDescriptors.max
        default: return EntropyDescriptors.default
    }
}

// getter
function getLengthValue(id) {
    const element = document.getElementById(id);
    return parseInt(element.value, 10)
};

function getSwitchValue(id) {
    return document.getElementById(id).checked;
}

// setter
function setPassword(password) {
    const element = document.getElementById(elements.password);
    element.innerHTML = password;
}

function setProgress(entropy) {
    const element = document.getElementById(elements.progressBar);
    const level = defineEntropyLevel(entropy)
    element.innerHTML = entropy.toString();
    element.value = (entropy * 100) / EntropyLib[EntropyDescriptors.max].value;
    element.style = EntropyLib[level].style;
}

function setEntropy(entropy) {
    const element = document.getElementById(elements.entropy);
    element.innerHTML = entropy;
}

function setEntropyLabel(entropy) {
    const element = document.getElementById(elements.label);
    const level = defineEntropyLevel(entropy);
    const label = EntropyLib[level].description;
    element.innerHTML = label;
}

function setLengthDescription(length) {
    const element = document.getElementById(elements.lengthDescription);
    element.innerHTML = length;
}