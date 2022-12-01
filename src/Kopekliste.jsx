import React from "react"

function Kopekliste(ozl){
    const[kopekFotolari,kopekFotolariGuncelle]=React.useState(null)


    React.useEffect( ()=>{
        fetch(`https://dog.ceo/api/breeds/image/random/${ozl.id}`)
        .then(sonuc =>sonuc.json())
        .then(veri => kopekFotolariGuncelle(veri.message))
    },[ozl.id])

  return (
    <div>
    {kopekFotolari && kopekFotolari.map(
        (gorselUrl) =>
        <img key={gorselUrl} width={"200px"} height={"200px"}  src={gorselUrl} alt="" />
    )}

    </div>
  )
}

export default Kopekliste