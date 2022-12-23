/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  
  if (text === "quit\n") {
    quit();
  } else if (text === "exit\n") {
    exit();
  } else if (text.startsWith("hello")) {
    hello(text);
  }
  else if (text === "help\n") {
    help();
  }
  else if (text.startsWith("add")) {
    add (text)
  }
  else if (text === "list\n"){
    list()
  } else if(text==='remove\n'){
    tasksArray.pop()
  } else if(text.startsWith('remove ')){
    remove(text.slice(6, text.length-1))
  }
  else if(text.startsWith("edit")){
    edit(text)
  }
  else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 * @param {string} h
 * @returns {void}
 */
function hello(h) {
  console.log(h.trim ()+"!");
em
}


/**
 * Exits the application
 * @returns {void}
 */
function quit() {
  console.log("goodbye!");
  process.exit();
}
function exit() {
  console.log("goodbye");
  process.exit();
}

/**
*This function prints the comands with the description 
*@returns {void}  
*/
function help (){
  console.log('hello\n  quit or exit\n   help\n   hello world return hello world!\n   list\n    add\n    remove\n')

}

const tasksArray = ['task1' , 'task2' ,'task3'];

function list (key){
let li= tasksArray.map((task,key)=> `${key+1} - ${task}`).join(`\n`)
console.log(li);
}
function add (some){
if (some =="add\n") {
  console.log("error")
}
else {
 let newtask = some.trim().split(" ")[1]
 tasksArray.push(newtask)
}
}

function remove(number){
  number=number.trim()
  let index=parseInt(number);
  if(!index && number!='0'){
    tasksArray.pop()
  } else if(index>=1 && index<=tasksArray.length){
    tasksArray.splice(index-1, 1)
  } 
  else if (index>tasksArray.length) {
console.log("doesn't exist")
  }
  else{
    console.log('error!!!!!')
  }
}
function edit (one)  {
  if (one =="edit\n") {
    console.log("error")
}
else {
  let ones=one.split(" ")[1]
  if(!parseInt(ones)){
    tasksArray[tasksArray.length-1]=one.trim().replace("edit ","")
  }
  else{
    tasksArray[ones-1]=one.trim().replace(`edit ${ones}`,'')
  }
}

}
// The following line starts the application
startApp("yahya");

