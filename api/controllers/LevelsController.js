const database = require('../models');

class LevelController {
    static async catchAllLevels (req, res) {
        try {
            const allLevels = await database.Levels.findAll();
            return res.status(200).json(allLevels);
        }catch(error){
            res.status(500).json(error.message);
        }

    }

    static async takeOneLevel (req, res) {
        try{
            const { id } = req.params;
            const oneLevel = await database.Levels.findByPk(id);
            return res.status(200).json(oneLevel);
        }catch(error) {
            res.status(500).json(error.message);
        }
    }

    static async createAlevel (req, res) {
        try {
            const newLevel = req.body;
            const newLevelCreate = await database.Levels.create(newLevel);
            return res.status(201).json(newLevelCreate);
        }catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async updateLevel (req, res) {
        const { id } = req.params;
        const newsInfo = req.body;
        try {
            await database.Levels.update(newsInfo, {where: {id: id}});
            const updateLevel = await database.Levels.findByPk(id);
            return res.status(200).json(updateLevel);
        }catch(error) {
            res.status(500).json(error.message);
        }
    }

    static async deleteLevel (req, res) {
        try {
            const  { id } = req.params;
            await database.Levels.destroy({ where: {id: id}});
            return res.status(200).json({message: `ID ${id} sucessfully deleted`})
        }catch(error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = LevelController;