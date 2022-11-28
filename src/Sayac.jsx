import React from 'react'
import './sayac.css'

function Sayac(props) {
  const[sayac,sayacGuncelle] = React.useState(props.baslangic)

  return (
    <div className='sayac'>
        {sayac} <button onClick={()=>{sayacGuncelle(sayac + props.artim)}}>Attır +</button>
    </div>
  )
}

export default Sayac
