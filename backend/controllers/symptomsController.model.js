import Symptom from "../models/symptoms.model.js";
import mongoose from "mongoose";


export const getSymptoms = async(req, res) => {
    try{
    const symptoms = await Symptom.find({});
      res.status(200).json({success: true, data: symptoms});
    }
    catch(error){
    console.log("Symptoms not found", error.message)
    res.status(500).json({success: false, message: "Server Error" });
    }}


export const createSymptoms = async (req, res) => {
    const symptom = req.body;

    if (
        !symptom.disease_id ||
        !symptom.category|| 
        !symptom.diseases||
        !symptom.position|| 
        !symptom.primary_symptoms|| 
        !symptom.time|| 
        !symptom.unique||
        !symptom.emergency|| 
        !symptom.home)
    {
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }
    
    const newSymptom = new Symptom(symptom)

try{
    await newSymptom.save();
    res.status(201).json({success: true, data: newSymptom}); 
}
catch(error){
console.error("Error in Create Symptom:", error.message);
res.status(500).json({success: false, message: "Server Error"});
}}


export const updateSymptoms = async(req,res)=> {
    const{id} = req.params;

    const symptom =req.body;
    if(!mongoose.Types.ObjectId.isValid(id))
{
    return res.status(404).json({success: false, message: "Invalid Symptom Id"});
}
    try{
    const updatedSymptom = await Symptom.findByIdAndUpdate(id, symptom, {new: true});
    res.status(200).json({success: true, data: updatedSymptom});
    }
    catch(error){
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const deleteSymptoms = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		await Symptom.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Symptom deleted" });
	} catch (error) {
		console.log("error in deleting symptom:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
}

export const findSymptoms = async(req, res) => {
    const{id} = req.params;
    const symptomRes = req.body;

    try{
    const symptoms = await Symptom.find(id, symptomRes);
      res.status(200).json({success: true, data: symptoms});
    }
    catch(error){
    console.log("Symptoms not found", error.message)
    res.status(500).json({success: false, message: "Server Error" });
    }}