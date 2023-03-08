const database = require('../models');

class ClassesController {
    static async catchAllClasses (req, res) {
        try {
            const allClasses = await database.Classes.findAll();
            return res.status(200).json(allClasses);
        }catch(error) {
            res.status(500).json(error.message);
        }
    }

    static async takeOneClass (req, res){
        try {
            const{ id } = req.params;
            const oneClass = await database.Classes.findByPk(id);
            return res.status(200).json(oneClass);
        }catch(error) {
            res.status(500).json(error.message);
        }
    }

    static async createClass (req, res) {
        try {
            const newClass = req.body;
            const newClassCreate = await database.Classes.create(newClass);
            return res.status(201).json(newClassCreate);
        }catch(error){
            res.status(500).json(error.message);
        }
    }
    
}

module.exports = ClassesController;