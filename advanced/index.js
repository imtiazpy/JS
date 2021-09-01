const myObject = {
    name: "Imtiaz Chowdhury",
    profession: "Web Developer",
    techStack: ['Javascript', 'react', 'html', 'css', 'expressjs', 'nodejs', 'MongoDB', 'python'],
    bestFriend: {
        name: "Elon Musk",
        profession: "Entrepreneur",
        company: [
            'Tesla',
            'Neuralink',
            'The Boring Company',
            'OpenAI',
            'SpaceX'
        ]
    },
    getName: function () {
        return this.name
    }
};

const myData = `
    Name: ${myObject.name}
    MyBestFriendName: ${myObject.bestFriend?.name}
    JsLibrary: ${myObject.techStack[1]}
`
// console.log(myData);

const zeroParamFunc = () => 89;
// console.log(zeroParamFunc());

const singleParamFunc = num => num / 7;
// console.log(singleParamFunc(42));

const twoParamFunc = (num1, num2) => (num1 + num2) / 2;
// console.log(twoParamFunc(60, 40));

const multiLineArrowFunc = (num1, num2) => {
    return (num1 + 7) + (num2 + 7);
};
// console.log(multiLineArrowFunc(5, 5));

// Using Map function
const numbers = [5, 7, 6, 8, 9, 4, 3].map(num => num / 7);
// console.log(numbers);

// destructuring
const { name, profession } = myObject;
// console.log(name, profession)

const [first, balance] = numbers;
console.log(balance);


