
import './App.css'
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import {Box} from "@chakra-ui/react";
import {Routes, Route} from 'react-router-dom';
import { CreatePage } from './pages/Createpage.jsx';
import { HomePage } from './pages/Homepage.jsx';


function App() {

  return (
    <>
    <Box >
     <Navbar/>
     <Routes>
           <Route path = '/' element = {<HomePage/>} />
           <Route path = '/createPage' element = {<CreatePage/>} />
     </Routes>
     <Footer/>
     </Box>
   </>
  
  );
}

export default App;
