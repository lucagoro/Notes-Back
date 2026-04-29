import mongoose from "mongoose"

const noteSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true }) // timestamps para que se guarde con la hs en la que fue creada para poder utilizarlo dsp ese dato

const Note = new mongoose.model("Note", noteSchema)

export default Note

