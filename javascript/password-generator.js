function createCharactersLibrary({ lowerCase, upperCase, numbers, special }) {
    let range = [];
    if (lowerCase) {
        range = [...range, ...lowerCaseCharacters];
    }
    if (upperCase) {
        range = [...range, ...upperCaseCharacters];
    }
    if (numbers) {
        range = [...range, ...numbersCharacters];
    }
    if (special) {
        range = [...range, ...specialCharacters];
    }
    if (range.length === 0) return null;
    return [...new Set(range)];
}

// Pollyfill crypto.randomInt
function random(min, max) {
    const range = max - min + 1
    const bytes_needed = Math.ceil(Math.log2(range) / 8)
    const cutoff = Math.floor((256 ** bytes_needed) / range) * range
    const bytes = new Uint8Array(bytes_needed)
    let value
    do {
        crypto.getRandomValues(bytes)
        value = bytes.reduce((acc, x, n) => acc + x * 256 ** n, 0)
    } while (value >= cutoff)
    return min + value % range
}

function createIndex(array) {
    return random(0, array.length - 1)
}

function createInitialPassword(length, charactersLibrary) {
    return new Array(length)
        .fill('')
        .map(() => charactersLibrary[createIndex(charactersLibrary)])
        .join('');
}

function calculateEntropy(length, possibleSymbolsCount) {
    const entropy =  Math.log2(Math.pow(possibleSymbolsCount, length));
    return Number(entropy.toFixed(2))
}

function passwordGenerator(options) {
    const charactersLibrary = createCharactersLibrary(options);
    if (!charactersLibrary) return defaultPassword;
    const { length } = options;
    return ({
        password: createInitialPassword(length, charactersLibrary),
        entropy: calculateEntropy(length, charactersLibrary.length),
    })
}