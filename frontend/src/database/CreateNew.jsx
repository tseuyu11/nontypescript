import {create} from 'zustand'


export const CreateNew = create((set) => ({
  
    symptoms: [],

    setSymptoms: (symptoms) => set({ symptoms }),

    createSymptoms: async (newSymptom) => {
      if (!newSymptom.disease_id || !newSymptom.category || !newSymptom.diseases ||
        !newSymptom.position || !newSymptom.primary_symptoms ||
         !newSymptom.time || !newSymptom.unique || !newSymptom.emergency
        || !newSymptom.home) {
        return { success: false, message: "Please fill in all fields." };
      }

		const res = await fetch("/api/symptoms", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newSymptom),
		});
		const data = await res.json();
		set((state) => ({ symptoms: [...state.symptoms, data.data] }));
		return { success: true, message: "Symptom created successfully" };
	},
	
	getSymptoms: async () => {
		const res = await fetch("/api/symptoms");
		const data = await res.json();
		set({ symptoms: data.data });
	},

	deleteSymptoms: async (id) => {
		const res = await fetch(`/api/symptoms/${id}`, {method: "DELETE"});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		set((state) => ({ symptoms: state.symptoms.filter((symptoms) => symptoms.id !== id) }));
		return { success: true, message: data.message };
	},

	updateSymptoms: async (id, updatedSymptoms) => {
		const res = await fetch(`/api/symptoms/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedSymptoms),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		set((state) => ({
			symptoms: state.symptoms.map((symptoms) => (symptoms.disease_id === id ? data.data : symptoms)),
		}));

		return { success: true, message: data.message };
	},

	findSymptoms: async (id,found) => {
		const res = await fetch (`api/symptoms/${id}`,
			{method: "GET", headers: {"Content-Type": "application/json"},
			body: JSON.stringify(found),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		;
	}}
));
