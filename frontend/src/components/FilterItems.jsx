/*import { useState } from "react";

export function InputItem () {
  const[diseaseInput,setdiseaseInput]= useState("")
  const [newSymptom,setNewSymptom] = useState([])

  function handleSubmit(e)  {
    e.preventDefault()

    setNewSymptom(currentSymptoms => {

      return[
        ...currentSymptoms,
        {id: crypto.randomUUID(), 
          title: diseaseInput, 
          completed: false},
      ]
    })
   setdiseaseInput("")
  
  }

  function togglenewsxs(id, completed){
    setNewSymptom(currentSymptoms => {
      return currentSymptoms.map(
        newSymptom => {
        if (newSymptom.id === id)
          {
          return{...newSymptom, completed}
        }
        return newSymptom
      })})
    }

    function deletenewsxs(id){
      setNewSymptom(currentSymptoms => {
        return currentSymptoms.filter(newSymptom => newSymptom.id !== id)
      })
    }
  

  return (
    <>
    <form onSubmit ={handleSubmit} className= "newItemForm">
        <div className= "form-row">
            <h1>Input your symptoms </h1>
            <input 
            type = "text" 
            id = "symptomInput" 
            placeholder="enter symptom here" 
            value = {diseaseInput}
            onChange={e => setdiseaseInput(e.target.value)} />
            <button>add</button>
        </div>
    </form>
    
     {newSymptom.map (newsxs => 
  {
    return (
    <li key = {newsxs.id}>
      <label>
        <input type = "checkbox" 
        checked= {newsxs.completed} 
        onChange= {e => togglenewsxs(newsxs.id, e.target.checked)}/>
        {newsxs.title} 
      </label>
      <button 
      onClick={()=> deletenewsxs(newsxs.id)}
      className= "btn_delete">Delete</button>
    </li>
    )

  })

}
   </>
  )
}*/