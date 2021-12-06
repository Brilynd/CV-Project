import PracticalForm from "./PracticalForm"

const Practical = (props) =>{

        const savedDataHandler=(enteredPersonalData)=>{
            const enteredData={
                ...enteredPersonalData,
                id:Math.random().toString()
            };
            props.onAddForm(enteredData)
        }
    
    return(
        <div className="Card-Display">
            <h1>Job Info</h1>
            <PracticalForm onSaveData={savedDataHandler}/>
        </div>
    )
    }
export default Practical