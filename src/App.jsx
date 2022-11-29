import React from 'react'
import Kisi from './Kisi'

function App() {
    const [kisiNo,kisiNoGuncelle] =React.useState (1)
    const metinKutusu= React.useRef()

    const yeniSorgu= ()=>{
        let deger=metinKutusu.current.value
        kisiNoGuncelle(deger)
    }
   

    return(

        <>
        <Kisi id={kisiNo}/>
        <input ref={metinKutusu} placeholder="numara giriniz"/>
        <button onClick={yeniSorgu} >Kisi Ara</button>
        </>
        
    )
       
}

export default App
