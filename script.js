
let massiv = [];

function processCommand(command) {
    let parts = command.split(", ");
    let action = parts[0];
    let element = parts[1];

    if (action === "add") {
        massiv.push("Ivan");
        console.log(`Element Ivan massivga qo'shildi.`);
    } else if (action === "del") {
        let index = massiv.indexOf(element);
        if (index !== -1) {
            massiv.splice(index, 1);
            console.log(`Element ${element} massivdan o'chirildi.`);
        } else {
            console.log(`Element ${element} massivda topilmadi.`);
        }
    } else if (command === "stop") {
        console.log("Matn kiritish to'xtatildi.");
        console.log("Final massiv:", massiv);
        return false;
    }

    return true;
}
function startInput() {
    let keepGoing = true;

    while (keepGoing) {
        let userInput = prompt("Kommandani kiriting (add, element | del, element | stop):");
        if (userInput) {
            keepGoing = processCommand(userInput);
        }
    }
}

startInput();
