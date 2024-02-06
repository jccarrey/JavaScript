/*  Haz una página que pida el número de DNI y la letra y compruebe si se corresponden. Para ello
    utiliza el siguiente array:
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
    Para averiguar la letra, divide el número del DNI por 23 y obtén el resto. La letra correspondiente a
    ese DNI ocupa en el array de letras el lugar indicado por el resto de la división. */

class Dni {
    constructor() {
        this.letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    }

    verifyDni(DNI) {
        if (DNI.length === 9 &&
                this.letras.find(element => element == DNI.substring(8, 9).toUpperCase()) &&
                    parseInt(DNI.substring(0, 8)) == DNI.substring(0, 8)) {

            let result = parseInt(DNI.substring(0, 8)) % 23;
            console.log(result);

            if (this.letras[result] == DNI.substring(8, 9).toUpperCase()) {
                return "Correct Letter";
            } else {
                return "Incorrect Letter";
            }
        } else {
            return "Your DNI is not valid";
        }
    }

}


export { Dni };