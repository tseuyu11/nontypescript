import diseases_list from '../database/Diseases.jsx'
import PropTypes from 'prop-types'


export function CardMapping()  {
  return (

    <div className='cardMapping'>
    {diseases_list.map((e)=> (
      <>
    <p key = {e.disease_id}>{e.category}</p>
    <p>{e.diseases}</p>
    <p>{e.position}</p>
    <p>{e.primary_symptoms}</p>
    <p>{e.time}</p>
    </>
    ))}
    </div>
    
  )
}
CardMapping.PropTypes =  {
  id: PropTypes.number,
  category: PropTypes.string,
  diseases: PropTypes.string,
  position: PropTypes.string,
  primary_symptoms: PropTypes.string,
  time: PropTypes.number,
}

 

