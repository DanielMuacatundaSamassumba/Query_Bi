import './QueryBi.css'
import { useState } from 'react'

function QueryBi() {
    const [value, setValue] = useState("");
     const [name, setName] = useState("")
     const [birth,setBirth]= useState("")
     const [place,setPlace]= useState("")
     const [massege, setMessege]= useState("")
    const handlevalue = (e) => {
        setValue(e.target.value)
    }
    const clickAtion = async () => {
        await fetch(`https://consulta.edgarsingui.ao/consultar/${value}`).then((response) => {
            response.json().then(res=>{
         setName(res.name)
         setBirth(res.data_de_nascimento)
         setPlace(res.morada)
          setMessege(res.message)
            })
           

        })
        
       
    }
    return (
        <div className='container'>

            <div className="content">
                <input type="search" placeholder='Pesquisar' onChange={handlevalue} /><button onClick={clickAtion}>Consultar</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de nascimento</th>
                        <th>Morada</th>
                      
                    </tr>
                 
                </thead>
                <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{birth}</td>
                    <td>{place}</td>
                  </tr>
                </tbody>
            </table>
   <p>{massege}</p>
        </div>
    )
}

export default QueryBi