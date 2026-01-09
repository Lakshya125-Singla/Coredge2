import Navbar from './Components/Navbar';
import Claudai from './Components/Claudai';
import Theworld from './Components/Theworld'; 
import Corepiller from './Components/Corepiller';
import Ready from './Components/Ready';
import Leading from './Components/leading';
import PlatformSuite from './Components/PlatformSuite';
import Partners from './Components/Partners';
import SolutionsSection from './Components/SolutionsSection'; 
import ComputingSection from './Components/ComputingSection';
import Hybridsolution from './Components/Hybridsolution'
import LearningCenter from './Components/LearningCenter ';
import Footer from './Components/Footer';
import Industry from './Components/Industry';
export default function Home() {
  return (
   <>
    <Navbar />
    <Claudai />
    <Theworld/>
    <PlatformSuite/>
    <Corepiller/>
    <Industry/>
    <SolutionsSection/>
    <ComputingSection/>
    <Hybridsolution/>
    
    <Partners/>
    <LearningCenter/>
     <Leading/>
    <Ready/>
    <Footer/>
   
   
   </>
  );
}
