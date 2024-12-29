import {Button, Container, Flex, HStack, Link} from '@chakra-ui/react';
//import {PlusSquareIcon} from '@chakra-ui/icons';

export const Navbar = () => {
  return  (
  <Container maxW={"1140px"} px ={4}>
    <Flex>
    <div className = "navbar">
      <Link href = {"/"} >LINK TO FRONT PAGE</Link>
    </div>
    <HStack>
      <Link href ="/createPage">
      <Button>
        PRESS HERE TO CREATE NEW DISEASE
      </Button>
      </Link>
    </HStack>
    </Flex>
  </Container>
  )
};

