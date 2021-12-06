import { useState } from "react"

const PracticalForm = (props) =>{

    const [formCompany,setFormCompany]=useState("")
    const [formPosition,setFormPosition]=useState("")
    const [formStartDate,setFormStartDate]=useState("")
    const [formEndDate,setFormEndDate]=useState("")
    
    const setCompanyHandler=(event)=>{
        setFormCompany(event.target.value)
    }

    const setPositionHandler=(event)=>{
        setFormPosition(event.target.value)
    }

    const setStartDateHandler=(event)=>{
        setFormStartDate(event.target.value)
    }
    const setEndDateHandler=(event)=>{
        setFormEndDate(event.target.value)
    }
    const saveFormInfo=(event)=>{
        event.preventDefault();
        const formData={
            company:formCompany,
            position:formPosition,
            startDate:new Date(formStartDate).getMonth()+" "+ new Date(formStartDate).getFullYear(),
            endDate:new Date(formEndDate).getMonth()+" "+ new Date(formEndDate).getFullYear()
        }
        props.onSaveData(formData)
        setFormCompany('')
        setFormPosition('')
        setFormStartDate('')
        setFormEndDate('')
    }
    // const editFormInfo=()=>{
    //     editNameHandler()
    //     editNumberHandler()
    // }

    return(
        <div className="Personal-Info-Container">
            <form className="Form-Card" onSubmit={saveFormInfo}>
            <input className="Card-Input" type="text" name="SetName" onChange={setCompanyHandler} value={formCompany} placeholder="Enter Company"/>
            <input className="Card-Input" type="text" onChange={setPositionHandler} value={formPosition} placeholder="Enter Position"/>
            <input className="Card-Input" type="date" onChange={setStartDateHandler}value={formStartDate} placeholder="Enter Start Date"/>
            <input className="Card-Input" type="date" onChange={setEndDateHandler}value={formEndDate} placeholder="Enter End Date"/>
            <button className="Card-Button" type="submit" >Save</button>
            </form>
        </div>
    )
}
export default PracticalForm