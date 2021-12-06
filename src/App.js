
import './App.css';
import  General from './general/General'
import Education from './education/Education';
import Practical from './practical/Practical';
import DisplayInfo from './DisplayInfo';
import { useState } from "react"
function App(props) {

  const [generalInfo,setGeneralInfo]=useState('')
  const [educationInfo,setEducationInfo]=useState('')
  const [practicalInfo,setPracticalInfo]=useState('')
  const addGenralHandler = data =>{
    setGeneralInfo(data)
  }
  const addEducationHandler = data=>{
    setEducationInfo(data)
    }

  const addPracticalHandler = data=>{
    setPracticalInfo(data)
  }




  
  return(
    <div className="App-Container">
    <div className="Form-Container">
      <General onAddForm={addGenralHandler}></General>
      <Education onAddForm={addEducationHandler}/>
      <Practical onAddForm={addPracticalHandler}/>
    </div>
    <div className="Display-Container">
    <DisplayInfo GeneralData={generalInfo} EducationData={educationInfo} PracticalData={practicalInfo}></DisplayInfo>
    </div>
    </div>
  )
}

export default App;
