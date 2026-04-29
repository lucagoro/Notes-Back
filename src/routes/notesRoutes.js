import express from "express"
import Note from "../models/noteModel.js"

const router = express.Router()

// Obtener todas las notas
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error al obtener las notas", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// Obtener una nota por id
router.get("/:id", async (req, res) => {
   try {
     const id = req.params.id
     const note = await Note.findById(id)

     if (!note) return res.status(404).json({ error: "Nota no encontrada" })
        res.status(200).json(note)
   } catch (error) {
    console.error("Error al obtener nota por id", error)
    res.status(500).json({ error: "Internal server error" })
   }
})

// Crear una nota
router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body
        const note = new Note({ title, content })
        const savedNote = await note.save()

        if (savedNote)
        return res.status(201).json({ message: "Nota creada correctamente", note: savedNote })

    } catch (error) {
        console.error("Error al crear una nota", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// Eliminar una nota
router.delete("/:id", async (req, res) => {
    try {
     const id = req.params.id
     const deletedNote = await Note.findByIdAndDelete(id)

     if (!deletedNote) return res.status(404).json({ error: "Nota no eliminada" })
        res.status(200).json({ message: "Nota eliminada", note: deletedNote })
   } catch (error) {
    console.error("Error al eliminar nota por id", error)
    res.status(500).json({ error: "Internal server error" })
   }
})

router.put("/:id", async (req, res) => {
    try {
     const id = req.params.id
     const { title, content } = req.body
     const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true }) // new: true para que lo devuelva actualizado

     if (!updatedNote) return res.status(404).json({ error: "Nota no actualizada" })
        res.status(200).json({ message: "Nota actualizada", note: updatedNote })
   } catch (error) {
    console.error("Error al actualizar nota por id", error)
    res.status(500).json({ error: "Internal server error" })
   }
})

export default router