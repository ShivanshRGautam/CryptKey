const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseCharacters = lowerCaseCharacters.map((character) => character.toUpperCase());
const numbersCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['_', '@', '+', '#', "'", '-', '.', ':', ',', ';', '*', '`', '"', '$', '%', '&', '/', '|', '!', '?', '=', '(', ')', '{', '}', '[', ']', '<', '>'];

const elements = {
    characterLength: 'length',
    lowercaseCheckbox: 'lowercase',
    uppercaseCheckbox: 'uppercase',
    numberCheckbox: 'numbers',
    specialCheckbox: 'special',
    progressBar: 'progress',
    lengthDescription: 'lengthDescription',
    password: 'generated_password',
    entropy: 'entropy',
    label: 'entropy_label',
    regenerate: 'regenerate',
    copy: 'copyToClipboard',
};

const EntropyDescriptors = {
    default: 0,
    very_weak: 1,
    weak: 2,
    reasonable: 3,
    strong: 4,
    very_strong: 5, 
    max: 6
}

const EntropyLib = {
    [EntropyDescriptors.default]: {
        description: 'no password generated',
        style: '',
        value: 0,
    },
    [EntropyDescriptors.very_weak]: {
        description: 'very weak',
        style: '--color-progress: rgba(255, 0,0,0.5)',
        value: 18.80,
    },
    [EntropyDescriptors.weak]: {
        description: 'weak',
        style: '--color-progress: rgba(255, 0,0,0.5)',
        value: 37.60,
    },
    [EntropyDescriptors.reasonable]: {
        description: 'reasonable',
        style: '--color-progress: rgba(255, 255, 52, 0.903)',
        value: 59.00,
    },
    [EntropyDescriptors.strong]: {
        description: 'strong',
        style: '--color-progress: rgba(147, 255, 52, 0.903)',
        value: 80.00,
    },
    [EntropyDescriptors.very_strong]: {
        description: 'very strong',
        style: '--color-progress: rgba(147, 255, 52, 0.903)',
        value: 100.00,
    },
    [EntropyDescriptors.max]: {
        description: 'secure',
        style: '--color-progress: rgba(147, 255, 52, 0.903)',
        value: 208.25
    },
};

const defaultPassword = {
    password: 'please activate one option',
    entropy: 0,
};