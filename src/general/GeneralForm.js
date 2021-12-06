import { useState } from "react"

const GeneralForm = (props) =>{

    const [formName,setFormName]=useState("")
    const [formNumber,setFormNumber]=useState("")
    const [formEmail,setFormEmail]=useState("")

    const setNameHandler=(event)=>{
        setFormName(event.target.value)
        console.log(formName)
    }
    // const editNameHandler=()=>{
    //     setFormName(formData.name)
    // }
    const setNumberHandler=(event)=>{
        setFormNumber(event.target.value)
        console.log(formNumber)
    }
    // const editNumberHandler=()=>{
    //     setFormNumber(formData.number)
    // }
    const setEmailHandler=(event)=>{
        setFormEmail(event.target.value)
        console.log(formEmail)
    }
    const saveFormInfo=(event)=>{
        event.preventDefault();
        const formData={
            name:formName,
            number:formNumber,
            email:formEmail
        }
        props.onSaveData(formData)
        setFormName('')
        setFormNumber('')
        setFormEmail('')
    }
    // const editFormInfo=()=>{
    //     editNameHandler()
    //     editNumberHandler()
    // }

    return(
        <div className="Personal-Info-Container">
            <form className="Form-Card" onSubmit={saveFormInfo}>
            <input className="Card-Input" type="text" name="SetName" onChange={setNameHandler} value={formName} placeholder="Enter Name"/>
            <input className="Card-Input" type="number" onChange={setNumberHandler} value={formNumber} placeholder="Enter Number"/>
            <input className="Card-Input" type="email" onChange={setEmailHandler}value={formEmail} placeholder="Enter Email"/>
            {/* <button onClick={editFormInfo}>Edit</button> */}
            <button className="Card-Button" type="submit" >Save</button>
            </form>
        </div>
    )
}
export default GeneralForm