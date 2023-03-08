const database = require ('../models');

class PeopleController {
    static async catchAllPeople (req, res) {
        try {
            const allPeople = await database.People.findAll();
            return res.status(200).json(allPeople);
        }catch(error){
            res.status(500).json(error.message);
        }
    }

    static async takeAperson (req, res) {
        try {
            const { id } = req.params;
            const onePerson = await database.People.findByPk(id);
            return res.status(200).json(onePerson);
        }catch(error) {
            res.status(500).json(error.message);
        }
    }

    static async creatPerson (req, res) {
        try {
            const newPerson = req.body;
            const newPersonCreate = await database.People.create(newPerson);
            return res.status(201).json(newPersonCreate);
        }catch(error){
            res.status(500).json(error.message);
        }
    }

    static async updatePerson (req, res) {
        const { id } = req.params;
        const newsInfo = req.body; 
        try {
            await database.People.update(newsInfo, {where: { id: id}});
            const updatedPerson = await database.People.findByPk(id);
            return res.status(200).json(updatedPerson);
        }catch(error){
            res.status(500).json(error.message);
        }
    }

    static async deletePerson (req, res) {
        try {
            const  { id } = req.params;
            await database.People.destroy({where: {id: id}});
            return res.status(200).json({message:`ID ${id} sucessfully deleted`})
        }catch(error){
            res.status(500).json(error.message);
        }
    }

    static async takeAregistration (req, res) {
        const { studentId, enrollmentId } = req.params;
        try {
            const oneRegistration = await database.Enrollment.findOne({
                where: { 
                    id: Number(enrollmentId),
                    student_id: Number(studentId)
                }
            });
            return res.status(200).json(oneRegistration)
        }catch(error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = PeopleController;