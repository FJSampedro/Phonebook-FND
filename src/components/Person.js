const Person=({person,deleteHandler})=>{
    return(
      <li>{`${person.name} - ${person.number}`} <input type="submit" value="delete" onClick={deleteHandler}></input></li>
    )
  }
export default Person