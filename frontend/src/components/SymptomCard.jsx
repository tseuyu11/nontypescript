/* eslint-disable react/prop-types */
//import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Heading,
	HStack,
	Input,
	Text,
	useDisclosure,
	} from "@chakra-ui/react";
import { CreateNew } from "../database/CreateNew.jsx";
import { useState } from "react";


export const SymptomCard = ({ symptoms }) => {
	const [updatedSymptoms, setUpdatedSymptoms] = useState(symptoms);

	const { deleteSymptoms, updateSymptoms } = CreateNew()
	const {  onOpen, onClose } = useDisclosure()

	const handleDeleteSymptom = async (pid) => {
		const { success, message } = await deleteSymptoms(pid);
		if (!success) {
			return({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			return({
				title: "Success",
				description: message,
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleUpdateSymptom = async (pid, updatedSymptoms) => {
		const { success, message } = await updateSymptoms(pid, updatedSymptoms);
		onClose();
		if (!success) {
			return({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			return({
				title: "Success",
				description: "Symptom updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<>
			<Box p={4}>
				<Heading as='h3' size='md' mb={2}>
					{symptoms.diseases}
				</Heading>

				<Text fontWeight='bold' fontSize='xl'  mb={4}>
					{symptoms.position}
				</Text>

				<HStack spacing={2}>
					<Button onClick={onOpen} colorScheme='blue' />
					<Button
						
						onClick={() => handleDeleteSymptom(symptoms.disease_id)}
						colorScheme='red'
					/>
				</HStack>
			</Box>
				

				<div>
					<div>
							<Input
								placeholder='Diseases Name'
								name='diseases'
								value={updatedSymptoms.diseases}
								onChange={(e) => setUpdatedSymptoms({ ...updatedSymptoms, diseases: e.target.value })}
							/>
							<Input
								placeholder='Position'
								name='position'
								type='position'
								value={updatedSymptoms.position}
								onChange={(e) => setUpdatedSymptoms({ ...updatedSymptoms, position: e.target.value })}
							/>
							<Input
								placeholder='category'
								name='category'
								value={updatedSymptoms.category}
								onChange={(e) => setUpdatedSymptoms({ ...updatedSymptoms, category: e.target.value })}
							/>
					</div>

					<div>
						<Button
							colorScheme='blue'
							mr={3}
							onClick={() => handleUpdateSymptom(symptoms.id, updatedSymptoms)}
						>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
					</div>
				
			</div>
            </>
		
	);
};
