const PersonForm = ({addName,newName,newNumber,handleNameChange,handleNumberChange})=>{

    return(
        <form onSubmit={addName}>
        <div>
        name: <input value={newName} onChange={handleNameChange}/>
        number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
        <button type="submit">add</button>
        </div>
        </form>
    )
}
export default PersonForm