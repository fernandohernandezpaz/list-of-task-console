const Tarea = require('./tarea');

/**
 *
 * _listado:
 *          {
 *          'uuid-123712-1': {id: 'xxxx', description: 'xxxxx...', completed: null},
 *          'uuid-223712-2': {id: 'yxxxx', description: 'xyxxxx...', completed: false},
 *          }
 *
 * **/
class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    get listadoArr() {
        const listado = Object.values(this._listado);

        return listado;
    }

    createTask(description = '') {
        const tarea = new Tarea(description);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;