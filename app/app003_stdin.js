const readline = require('readline');
const inquirer = require('inquirer');

// const readlineInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readlineInterface.question('Hello, how are you! \n', (name) => {
//     console.log(`Reply: ${name}`);
//     readlineInterface.close();
// })

var questions = [
    {
      type: 'input',
      name: 'name',
      message: "你叫什么名字?"
    }
  ]
  
  inquirer.prompt(questions).then(answers => {
    console.log(`你好 ${answers['name']}!`)
  })
