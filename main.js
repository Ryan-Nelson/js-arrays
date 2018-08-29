// const cats = ['fluffy', 'spike', 'killer'];
// console.log('1st cat', cats[0]);

// const favoriteAnimal = 'cow';
// const favoriteAnimal = favoriteAnimal.split('')
// console.log('favoriteAnimalArray', favoriteAnimalArray)

// const numArray = [1, 2, 3, 4, 5];
// const newNum = numArray.join('');
// console.log('newNum', newNum);

//mini challenge

const palChecker = (word) => {
    let p = word.split("").reverse().join("");

    if(p === word){
        return(console.log(`${word} is a palindrome`))
        }else{
            return(console.log(`${word} is not a palindrome`))
        }
};

palChecker('mom');;
palChecker('mokeybutt');
palChecker('racecar')
