import { useState } from "react";
import {Container, Heading, VStack, Box, Input, Button} from '@chakra-ui/react';
import { CreateNew } from "../database/CreateNew.jsx";


export const CreatePage = () => {
  const [newSymptom, setNewSymptom] = useState({
    disease_id: "",
    category: "",
    diseases: "",
    position: "",
    primary_symptoms: "",
    time: "",
    unique: "",
    emergency: "",
    home: "",
  });


const {createSymptoms} = CreateNew();


const handleAddDisease = async () => {
  const {success, message} = await createSymptoms(newSymptom); 
  if(!success){
   ({
      title: "Error",
      description: message,
      status: "error",
      isClosable: true
    })
  }
  else{
    ({title: "Success",
      description: message,
      status: "success",
      isClosable: true
  })}
  

};
  return ( 
  <Container>
    <VStack>
      <Heading> Create New Product</Heading>
    </VStack>

    <Box>
      <VStack>

      <Input
        placeholder= "Disease id"
        name= "Disease id"
        value={newSymptom.disease_id}
        onChange={(e) => setNewSymptom({...newSymptom, disease_id: e.target.value })}
        >
        </Input>

        <Input
        placeholder= "Disease category"
        name= "Disease Category"
        value={newSymptom.category}
        onChange={(e) => setNewSymptom({...newSymptom, category: e.target.value })}
        >
        </Input>

        <Input
        placeholder=  "Disease name"
        name= "Disease name"
        value= {newSymptom.diseases}
        onChange={(e) => setNewSymptom({...newSymptom, diseases: e.target.value})}

        >
        </Input>

        <Input
        placeholder=  "Diseases position"
        name="Diseases position"
        value= {newSymptom.position}
        onChange={(e) => setNewSymptom({...newSymptom, position: e.target.value})}
        >
        </Input>

        <Input
        placeholder= "Disease primary symptoms"
        name= "Disease primary symptoms"
        value= {newSymptom.primary_symptoms}
        onChange={(e) => setNewSymptom({...newSymptom, primary_symptoms: e.target.value })}
        >
        </Input>

        <Input
        placeholder= "Disease time frame"
        name= "Disease time frame"
        value= {newSymptom.time}
        onChange={(e) => setNewSymptom({...newSymptom, time: e.target.value})}
        >
        </Input>

        <Input
        placeholder= "Disease unique characterestic"
        name="Disease unique characterestic"
        value= {newSymptom.unique}
        onChange={(e) => setNewSymptom({...newSymptom, unique: e.target.value})}

        >
        </Input>

        <Input
        placeholder=  "Disease emergency features if any"
        name= "Disease emergency features"
        value={newSymptom.emergency}
        onChange={(e) => setNewSymptom({...newSymptom, emergency: e.target.value })}

        >
        </Input>

        <Input
        placeholder= "Disease home actions"
        name= "Disease home actions"
        value= {newSymptom.home}
        onChange={(e) => setNewSymptom({...newSymptom, home: e.target.value })}
        >
        </Input>
        
        <Button onClick = {handleAddDisease}> Submit Disease Profile</Button>
      
      </VStack>
    </Box>
  </Container>
  )
}

