const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function morse(text) {
  let outCome = '';
  let str = '';


  if(text === ''){return "";}
  if(typeof text != 'string'){
    throw('Please provide a morse string');
  }
  else{
    text = text.trim();

    if(text.indexOf(' ') === -1){return(MORSE_CODE[text]);}

    text = text.replace(/   /g, '+');
     for(let i = 0; i < text.length; i++){
        if(text[i] !== ' ' && text[i] !== '+'){
          str += text[i];
        }
        else if(text[i] === " "){
          outCome += MORSE_CODE[str];
          str = "";
        }
        else if(text[i] = "+"){
          outCome += MORSE_CODE[str] + " ";
          str = "";
        }
        if(i === text.length - 1){
          outCome += MORSE_CODE[str];
        }
     }
     console.log(outCome);
     return outCome;

  }

  }

module.exports = morse;
