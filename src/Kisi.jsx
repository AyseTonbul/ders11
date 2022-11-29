import React from 'react'

function Kisi(props) {
    const [bilgi,bilgiGuncelle] =React.useState(null)
    
    React.useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
          const newData = await response.json();
          bilgiGuncelle(newData);
        };
    
        fetchData();
      }, [props.id]);



    if (bilgi) {
        return <div>{bilgi.name}</div>;
      } else {
        return null;
      }
}

export default Kisi