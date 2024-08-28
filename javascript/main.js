function generatePassword() {
    const length = getLengthValue(elements.characterLength);
    const lowerCase = getSwitchValue(elements.lowercaseCheckbox);
    const upperCase = getSwitchValue(elements.uppercaseCheckbox);
    const numbers = getSwitchValue(elements.numberCheckbox);
    const special = getSwitchValue(elements.specialCheckbox);

    const result = passwordGenerator({ length, lowerCase, upperCase, numbers, special });

    setPassword(result.password);
    setLengthDescription(length);
    setEntropy(result.entropy);
    setEntropyLabel(result.entropy);
    setProgress(result.entropy);
}
