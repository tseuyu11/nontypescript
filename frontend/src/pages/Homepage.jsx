import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CreateNew} from "../database/CreateNew.jsx"
import {SymptomCard} from "../components/SymptomCard.jsx";
import { useState } from "react";


export const HomePage = () => {
const { getSymptoms, symptoms, findSymptoms } = CreateNew();
const {found, setFound} = useState("");
const {data, setData} = useState([])


const handleSubmit = async(found) => {
	 const returnedData = await findSymptoms(found);
	 setData(() => returnedData) 
}

useEffect(() => {
	getSymptoms();
}, [getSymptoms]);


useEffect(() => {
	findSymptoms(symptoms);
}, [findSymptoms,symptoms]);


return (
	<>
	<form onSubmit ={handleSubmit} className= "newItemForm">
        <div className= "form-row">
            <h1>Input your symptoms </h1>
            <input 
            type = "text" 
            id = "symptomInput" 
            placeholder="enter symptom here" 
            value = {found}
            onChange={(e) => setFound(e.target.value)} />
        </div>
    </form>
	
	<div>
		
	</div>

	<Container maxW='container.xl' py={12}>
		<VStack spacing={8}>
			<SimpleGrid
				columns={{
					base: 1,
					md: 2,
					lg: 3,
				}}
				spacing={10}
				w={"full"}
			>
				{symptoms.map((symptom) => (<SymptomCard key={symptom.id} symptoms = {symptom} />))}
			</SimpleGrid>

			{symptoms.length === 0 && (
				<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
					No symptoms found 😢{" "}
					<Link to={"/createSymptoms"}>
						<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
							Create a product
						</Text>
					</Link>
				</Text>
			)}
		</VStack>
	</Container>
	</>
);
};
