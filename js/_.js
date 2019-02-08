const _ = {
  
    chunk (array, size){
      const resultat = [];
    
        for(let i = 0; i < array.length; i +=size){
            let tmpArray = array.slice(i, i+size);
            resultat.push(tmpArray)
        }
      return resultat;
    },
       
    dropWhile (array, predicate){ 
        const dropNumber = array.findIndex((element, index) => {
            let predicateReturn = !predicate(element, index, array);
            return predicateReturn;
        });   
       const droppedArray = this.drop(array, dropNumber);
       return droppedArray;
    },
      
    drop (array, number){
        if(number == null){
            number = 1;
        }
        let newArray = array.slice(number, array.length);
        return newArray;
    
    },
    
    findKey (object, predicate){
      
        for (let cles in object){
       
            let value = object[cles];
            let predicateReturn = predicate(value);
            
            if(predicateReturn){
                return cles;
            }    
        };
        return undefined;
    
    },
     
    invert (object) {
        let invObj = {
        }; 
    
    
        for (let cles in object){
           let originaleCle = `${cles}`;
           let originaleValeur = `${object[cles]}`;
           invObj[originaleValeur] = originaleCle;
           
        };
    
        return invObj;
    
    },
    
    has (object, key){
        if (key in object === false) {
            return false;
          }
    },
      
    pad(string, length){
        if(length <= string.length){
                return string;
            }else {
                let startPaddingLength = Math.floor((length - string.length)/2);
                let endPaddingLength = (length - string.length) - startPaddingLength;
    
                let paddedString = " ";
                paddedString = paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
    
    
                return paddedString;
            }
      },
      
    words(str){
        let words = str.split(' ');
        return words;
    },
      
    inRange(number, start, end){
        if(end === undefined ){
           end = start;
           start =0;
           }
        if(start > end){
           let tmp = end;
          end = start;
          start = tmp;
           }
        let isInRange;
        if(start <= number && number < end){
           isInRange = true;
           }else{
            isInRange = false;
           }
        return isInRange;
    },
      
    clamp (number, lower, upper){
        let min = Math.max(number, lower);
        let clampedValue = Math.min(min, upper);
        return clampedValue;
    },
      
      
    
    }
    
    // Do not write or modify code below this line.
    module.exports = _;