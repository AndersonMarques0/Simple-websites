const decimalNumber = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const romanNumber = document.getElementById("output");

// verifica se a entrada é um número válido
const isNumberValid = (num) => {

    if(!num || isNaN(num)) {
        return "Please enter a valid number";
    } else if(num < 1) {
        return "Please enter a number greater than or equal to 1";
    } else if(num > 3999) {
        return "Please enter a number less than or equal to 3999";
    }
    return
}

let romanArray = [];
const convertNumber = (decimal) => {
    let contagem;

    if(decimal === 0) {

        const convertedNumber = romanArray.join("");
        romanArray = []
        return convertedNumber;

    } else if(decimal >= 1000) {
        
        for(contagem = decimal / 1000; contagem > 1; contagem--) {
            romanArray.push("M");
        }
        
        return convertNumber(decimal % 1000);
    } else if(decimal >= 900) {
        
        romanArray.push("CM");

        return convertNumber(decimal % 900);
    } else if (decimal >= 100 && decimal < 900) {

        if(decimal > 500) {
            
            romanArray.push("D");
            for(contagem = (decimal % 500) / 100; contagem > 1; contagem--) {
                romanArray.push("C");
            }
            
            return convertNumber(decimal % 100);
            
        } else if(decimal === 500) {

            romanArray.push("D");
            return convertNumber(decimal % 100);

        } else {

            if(decimal >= 400 && decimal < 500) {

                romanArray.push("CD");
                return convertNumber(decimal % 100);

            } else {
                
                for(contagem = Math.floor(decimal / 100); contagem > 1; contagem--) {
                    romanArray.push("C");
                }

                return convertNumber(decimal % 100);
            }

        }

        
    } else if(decimal >= 10 && decimal < 100) {

        if(decimal >= 90) {

            romanArray.push("XC");
            return convertNumber(decimal % 10);  

        } else if(decimal > 50 && decimal < 90) {
            
            romanArray.push("L");
            for(contagem = (decimal % 50) / 10; contagem > 0; contagem--) {
                romanArray.push("X");
            }
            
            return convertNumber(decimal % 10);
        } else if(decimal === 50) {

            romanArray.push("L");
            return convertNumber(decimal % 10);

        } else {

            if(decimal >= 40) {

                romanArray.push("X");
                romanArray.push("L");
                return convertNumber(decimal % 10);

            } else {
                
                contagem = decimal / 10;
                for(contagem; contagem > 1; contagem--) {
                    romanArray.push("X");
                }
                
                return convertNumber(decimal % 10);
            }

        }

    } else if(decimal > 0 && decimal < 10) {

        if (decimal === 9) {

            romanArray.push("IX");
            return convertNumber(decimal % 1);  

        } else if(decimal > 5 && decimal < 9) {
            
            romanArray.push("V");
            contagem = (decimal % 5) / 1;
            for(contagem ; contagem > 0; contagem--) {
                romanArray.push("I");
            }
            
            return convertNumber(decimal % 1);
        } else if(decimal === 5) {

            romanArray.push("V");
            return convertNumber(decimal % 1);

        } else if(decimal === 4) {

            romanArray.push("IV");
            return convertNumber(decimal % 1);

        } else  if(decimal > 0 && decimal < 4) {
            
            contagem = decimal / 1;
            for(contagem; contagem > 0; contagem--) {
                romanArray.push("I");
            }
            
            return convertNumber(decimal % 1);
        }


    }

}

btn.addEventListener("click", () => {

    let resultado = isNumberValid(Number(decimalNumber.value))
    
    romanNumber.textContent = resultado??convertNumber(Number(decimalNumber.value));

});

decimalNumber.addEventListener("keydown", (e) => {

    if(e.key === "Enter") {
        let resultado = isNumberValid(Number(decimalNumber.value))
    
        romanNumber.textContent = resultado??convertNumber(Number(decimalNumber.value));
    }
    

});
