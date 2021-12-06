import GeneralForm from "./GeneralForm"

const General = (props) =>{

        const savedDataHandler=(enteredPersonalData)=>{
            const enteredData={
                ...enteredPersonalData,
                id:Math.random().toString()
            };
            props.onAddForm(enteredData)
        }
            
    
    return(
        <div className="Card-Display">
            <h1>Personal Info</h1>
            <GeneralForm onSaveData={savedDataHandler}/>
        </div>
    )
    }
export default General