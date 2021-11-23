
const Student = require('../models/studentdata');

const getStudents = async (req, res) => {
    try {
        const student = await Student.find();

        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const getSpecStudent = async (req, res) => {
    const roll = req.params.roll;

    try {
        const student = await Student.findOne({roll: roll});
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const createStudent = async (req, res) => {
    const newstudent = new Student({
        name: req.body.name,
        roll: req.body.roll,
        registration: req.body.registration,
        subjects: req.body.subjects,
        created_on: req.body.created_on
    });
    console.log("inside create student");
    console.log(req.body);
    try {
        await newstudent.save();
        res.status(201).json(newstudent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const updateStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        await Student.findOneAndUpdate({
                roll: roll,
            },
            {
                name: req.body.name,
                registration: req.body.registration,
                subjects: req.body.subjects,
                created_on: req.body.created_on
            }
        )
        res.status(202).json({roll: roll});
    } catch (error) {
        res.status(401).json({message: error.message});
    }
}

const deleteStudent = async (req, res) => {
    const roll = req.params.roll;
    try {
        await Student.findOneAndRemove({roll: roll});
        res.status(203).json({roll: roll});
    } catch (error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getStudents = getStudents;
module.exports.createstudent = createStudent;
module.exports.getspecStudent = getSpecStudent;
module.exports.updatestudent = updateStudent;
module.exports.deletestudent = deleteStudent;