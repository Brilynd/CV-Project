import EducationForm from "./EducationForm"
import "./Education.css"
const Education = (props) =>{

        const savedDataHandler=(enteredPersonalData)=>{
            const enteredData={
                ...enteredPersonalData,
                id:Math.random().toString()
            };
            props.onAddForm(enteredData)
        }

        // const createNewEducationHandler =savedDataHandler.map((id)=>(
        //     <Education onSaveData={savedDataHandler}/>
        // ));

    return(
        <div className="Card-Display">
            <h1>Education Info</h1>
            <EducationForm onSaveData={savedDataHandler}/>
        </div>
    )
    }
export default Education