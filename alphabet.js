let alphabet = [];
for (let i = 97; i < 123; i++) {
    alphabet.push(String.fromCharCode(i))
};
console.log(alphabet.join().replace(/,/g, ' '));