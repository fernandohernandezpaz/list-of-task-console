const {v4: uuid4} = require('uuid');

class Tarea {
    id = '';
    description = '';
    completed = null;

    constructor(description) {
        this.id = uuid4();
        this.description = description
    }
}

module.exports = Tarea;