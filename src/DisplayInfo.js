import "./DisplayInfo.css"

const DisplayInfo =(props)=>{
    const GeneralData=props.GeneralData
    const EducationData=props.EducationData
    const PracticalData=props.PracticalData
    const ConsoleLogger=()=>{
        console.log(GeneralData)
    }




    return(
        <div className="Card-Contianer">
            <div className="General-Container">
                <p id="General-Name">{GeneralData.name}</p>
                <p id="General-Number">{GeneralData.number}</p>
                <p id="General-Email">{GeneralData.email}</p>
            </div>
            <div className="Education-Container">
                <p id="Education">Education</p>
                <p id="Education-School">{EducationData.school}</p>
                <p id="Education-Major">{EducationData.major}</p>
                <p id="Education-Degree">{EducationData.degree}</p>
                <p id="Education-Graduation">{EducationData.graduation}</p>
            </div>


            <div className="Practical-Container">
                <p id="Practical">Work</p>
                <p id="Practical-Company">{PracticalData.company}</p>
                <p id="Practical-Position">{PracticalData.position}</p>
                <p id="Practical-StartDate">{PracticalData.startDate}</p>
                <p id="Practical-EndDate">{PracticalData.endDate}</p>
            </div>
        </div>
    )
}
export default DisplayInfo