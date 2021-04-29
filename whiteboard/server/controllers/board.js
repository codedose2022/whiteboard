import boardModel from '../models/Board.js'

export const getBoard = async (req, res)=>{
    try {
        const boardData = await boardModel.find();
        res.status(200).json(boardData)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const addProject = async (req, res) => {
    const {projectName, projectEngr, tlExpiry, releaseDate } = req.body;
    const newProject = new boardModel({projectName, projectEngr, tlExpiry, releaseDate });
    try {
        await newProject.save();

        res.status(201).json(newProject)
    } catch (error) {
        res.status(409).json({message: error.message})
        console.log(error.message)
    }
}

export const updateProject = async (req, res) => {
    const { id: _id } = req.params;
    const project = req.body;
    if (mongoose.Type.ObjectId.isValid(_id)) return res.status(404).send('Noting found')
   const updatedProject = await boardModel.findByIdAndUpdate(_id, project, {new: true})
   res.json(updatedProject)
}