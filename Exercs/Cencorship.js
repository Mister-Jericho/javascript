
function cencor(input) {
    let text = input[0];
    let words = input.slice(1);

    for (let current of words) {
        let replaced = '-'.repeat(current.length);

        while (text.indexOf(current) > -1) {
            text = text.replace(current, replaced);
        }
    }

    return text;
}

console.log(cencor(['roses are red, violets are blue', ', violets are', 'red']));
