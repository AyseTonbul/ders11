import React from 'react'
import Kopekliste from './Kopekliste'

function App() {

    const [dogFoto,setDogFoto]= React.useState(0)

    const dogFotoGetir =React.useRef()
    const yeniSorgu = ()=> {
         setDogFoto(dogFotoGetir.current.value)
    }
  
   return(
    <>
        
        <div>
        <input ref={dogFotoGetir} type="text" />
        <button onClick={yeniSorgu}>Foto Getir</button>
            
        </div>
        <Kopekliste id={dogFoto}/>
    
    </>

   )
}

export default App