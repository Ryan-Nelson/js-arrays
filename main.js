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

palChecker('mom');
palChecker('mokeybutt');
palChecker('racecar');

let animls = ['spiders', 'snakes', 'gophers', 'big spiders'];

const lastItem = animls.pop();
const firstItem = animls.shift();
animls.push('bat');
animls.unshift('baby hippo');
console.log('animals', animls);




// what is your starting value
// what is your stopping value
// how are you incrementing 

for(let i = 0; i < animls.length; i++){
    console.log(animals[i]);
}