import mongoose from "mongoose";


 const symptomSchema = new mongoose.Schema(
{
    id: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    diseases: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    primary_symptoms:{
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    unique: {
        type: String,
        required: true,
    },
    emergency: {
        type: String,
        required: true,
    },
    home:
    {
        type: String,
        required: true,
    }
}
);

const Symptom = mongoose.model("Symptom", symptomSchema);

export default Symptom