//  A function that convert Fahrenheit to Celcius using the formula -C = (F-32) * 5/9

const convertFahrToCelcius = (parameter) => {

    const isParseable = (typeof parameter === 'string' ||  typeof parameter === 'number') ? true : false

    const toNumber = parseFloat(parameter)
    
    if( isParseable && !isNaN(toNumber) ){
        return ((parameter - 32) * (5/9)).toFixed(4)
    }else{
        return `${parameter} is not a valid number but a/an ${typeof parameter}`
    }
}

// A function named "checkYuGiOh" that takes a number, 'n' as an argument,
// creates an array of numbers from 1 to n and replaces multiples of 2,3 and 5

const checkYuGiOh = (number) => {

    const isParseable = (typeof number === 'string' ||  typeof number === 'number') ? true : false

    const toNumber = parseInt(number)
    
    if ( isParseable && !isNaN(toNumber) ){
        let list = []

        for (let i = 1; i <= toNumber; i++) {

            if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
                list.push('yu-gi-oh')

            }else if (i % 2 === 0 && i % 3 === 0){
                list.push('yu-gi')

            }else if (i % 2 === 0 && i % 5 === 0){
                list.push('yu-oh')

            }else if (i % 3 === 0 && i % 5 === 0){
                list.push('gi-oh')

            }else if (i % 2 === 0){
                list.push('yu')

            }else if (i % 3 === 0){
                list.push('gi')

            }else if (i % 5 === 0){
                list.push('oh')

            }else {
                list.push(i)
            }
        }
        
        return list        
    }else{
        return `invalid parameter: ${number}`
    }
}
 