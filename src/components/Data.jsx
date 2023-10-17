import {useState} from 'react'

function Data() {
    // const [Lista]=useState(["Daniel","Jofre","Lucas"])

    //  const [users,setUsers]= useState(
    //     [{id:1, nome:"Daniel",Age:20},
    //     {id:2, nome:"Lucas",Age:20},
    //     {id:3, nome:"Jofre",Age:20},
    //     {id:4, nome:"Franklin",Age:20}])
    //     const deleteone= () =>{
    //    const RandomUser = Math.floor(Math.random()*4);
    //      setUsers((prevUser)=>{
    //         prevUser.filter((user0)=> RandomUser !== user0.id
    //         )
    //      })
    //   
   const  [number , setNumber]= useState(0)
 const Add =()=>{
       setNumber(number+1) 
    }  
  return (
   
    <div>
    {/* <ul> */}
        
      {/* Sem key */}
     {/* {Lista.map((item)=>( */}
        {/* <li>{item}</li> */}
     {/* ))}
      </ul> */}

      {/* Com key */}
      {/* <ul>
        {users.map((user)=>(
            <li key={user.id}>{user.nome}</li>
        ))}
      </ul>
      <button onClick={deleteone()}>Delete</button> */}
      <p>Valor  {number}</p>
      <button onClick={Add}>Adicionar </button>
    </div>
  
  )
}

export default Data