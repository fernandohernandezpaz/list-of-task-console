require('colors');

const {inquirerMenu, pausa, readInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const {guardarDB} = require("./models/guardarArchivo");
console.clear();

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //create task
                const description = await readInput('Please insert the descripction for the task')
                tareas.createTask(description);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }
        guardarDB(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');
}

main();