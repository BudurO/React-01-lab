import './App.css'
import Programers from './component/Programers'
import Companies from './component/Companies'
function App() {
  return (
    
   <>
    <h1>Lab</h1>
    <Programers name={"name1"} programmingLanguages={'Js'} YearsofExperience={0} company={'company'}></Programers>
    <Programers name={"name2"} programmingLanguages={'C++'} YearsofExperience={0} company={'company'}></Programers>
    <Programers name={"name3"} programmingLanguages={'C#'} YearsofExperience={0} company={'company'}></Programers>
    <Programers name={"name4"} programmingLanguages={'Php'} YearsofExperience={0} company={'company'}></Programers>

    <Companies Namecompany={'company1'} NumberofEmployees={2} YearFounded={1999} typesofservices='Programers' expectedprices={200}></Companies>
    <Companies Namecompany={'company2'} NumberofEmployees={3} YearFounded={1999} typesofservices='Programers' expectedprices={300}></Companies>


   </>
  )
}

export default App
