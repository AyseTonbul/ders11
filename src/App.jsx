import React from "react";
import Sayac from "./Sayac";

function App() {
  const [kullanicilar, kullanicilarGuncelle] = React.useState([]);

  function kullaniclariCek() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((veri) => {
        kullanicilarGuncelle(veri);
      });
  }

  React.useEffect(() => {
    kullaniclariCek();
  }, []);

  return (
    <>
      <div>
        {kullanicilar.length > 0 && (
          <ul>
            {kullanicilar.map((kullanici) => {
              return <li key={kullanici.id}>{kullanici.name}</li>;
            })}
          </ul>
        )}
        <Sayac artim={1} baslangic={0}/>
        <Sayac artim={5} baslangic={25}/>
      </div>
    </>
  );
}

export default App;
