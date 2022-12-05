import Person from "./Person"
const Numbers=({personsList, deleteHandler})=>{
    return(
        <div>
        { <ul>
          {personsList.map(person =>
            <Person key={person.name} person={person} deleteHandler={()=>deleteHandler(person)}/>
          )}
        </ul> }
        </div>
    )
}
export default Numbers