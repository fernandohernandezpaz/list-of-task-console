const fs = require('fs');
const guardarDB = (data) => {
    const directory = './db';
    const archivo = `${directory}/data.json`;

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    if (typeof (data) !== "string"){
        data = JSON.stringify(data);
    }

    fs.writeFileSync(archivo, data);
}

module.exports = {
    guardarDB
}