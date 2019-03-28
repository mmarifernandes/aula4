// oo= orientado a objeto
// funções executam sobre o this!
const texto = {
    txt: ' meu texto ',
    trimLeft: function() {
        console.log(this);

        let r = '';
        let copy = false;
        for (let i = 0; i < this.txt.length; i++) {
            if (copy || this.txt[i] != ' ') {
                copy = true;
                r += this.txt.charAt(i);
            }
        }

        return r;
    }
};
console.log((texto.trimLeft()));

