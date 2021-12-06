import { useState } from "react"
import "./EducationForm.css"
const EducationForm = (props) =>{

    const [formSchool,setFormSchool]=useState("")
    const [formMajor,setFormMajor]=useState("")
    const [formDegree,setFormDegree]=useState("")
    const [formGraduationDate,setFormGraduationDate]=useState("")

    const setSchoolHandler=(event)=>{
        setFormSchool(event.target.value)
    }
    // const editNameHandler=()=>{
    //     setFormName(formData.name)
    // }
    const setMajorHandler=(event)=>{
        setFormMajor(event.target.value)
    }
    // const editNumberHandler=()=>{
    //     setFormNumber(formData.number)
    // }
    const setDegreeHandler=(event)=>{
        setFormDegree(event.target.value)
    }
    const setGradutationHandler= (event)=>{
        setFormGraduationDate(event.target.value)
        

    }
    const saveFormInfo=(event)=>{
        event.preventDefault();
        const formData={
            school:formSchool,
            major:formMajor,
            degree:formDegree,
            graduation:new Date (formGraduationDate).getFullYear()
        }
        props.onSaveData(formData)
        setFormSchool('')
        setFormMajor('')
        setFormDegree('')
        setFormGraduationDate('')
    }


    return(
        <div className="Personal-Info-Container">
            <form className="Form-Card" onSubmit={saveFormInfo}>
            <input className="Card-Input" type="text" name="SetName" onChange={setSchoolHandler} value={formSchool} placeholder="Enter School"/>
            <input className="Card-Input" type="text" onChange={setMajorHandler} value={formMajor} placeholder="Enter Major"/>
            <input className="Card-Input" type="text" onChange={setDegreeHandler}value={formDegree} placeholder="Enter Degree"/>
            <input className="Card-Input" type="date" onChange={setGradutationHandler} value={formGraduationDate} placeholder="Enter Graduation Date" />
            <button className="Card-Button" type="submit" >Save</button>
            </form>
        </div>
    )
}
export default EducationForm