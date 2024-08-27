// script.js
function encrypt(text) {
    const map = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, letter => map[letter]);
}

function decrypt(text) {
    const map = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, substring => map[substring]);
}

document.getElementById('encrypt-btn').onclick = function() {
    const inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').value = encrypt(inputText);
};

document.getElementById('decrypt-btn').onclick = function() {
    const inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').value = decrypt(inputText);
};

document.getElementById('copy-btn').onclick = function() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
};
