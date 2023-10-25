const dezenas = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60
];

const qtdSorteada = [69, 49, 73, 67, 92, 67, 59, 72, 62, 84, 68, 71, 66, 69, 56, 64, 68,
    54, 55, 55, 50, 52, 69, 66, 64, 46, 66, 60, 62, 46, 37, 63, 74, 64, 59, 64, 63, 60,
    61, 48, 53, 67, 55, 50, 55, 53, 46, 58, 61, 40, 54, 46, 60, 59, 39, 54, 55, 55, 49, 40
];


const megaSena = [];

for (let i = 0; i < dezenas.length; i++) {
    megaSena.push({ dezenas: dezenas[i], quantidade: qtdSorteada[i] });
}

const probabilidades = [];

for (let i = 0; i < megaSena.length; i++) {
    for (let j = 0; j < megaSena[i].quantidade; j++) {
        probabilidades.push(megaSena[i].dezenas);
    }
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    

     const result = array.slice(0, 6);
     result.sort((a, b) => a - b)
     return result;
}

function getRandom() {

    const btn = document.querySelector("#button");
    const input = document.querySelectorAll("input");

    btn.addEventListener("click", function () {

     
        valorDaBolinha = shuffleArray(probabilidades)
        
        for (let i = 0; i < input.length; i++){
            
                input[i].value = valorDaBolinha[i];
            }
     
       
           
        }

)}

getRandom();


