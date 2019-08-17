import React, { useEffect, useState } from "react";

export default function LocationsList() {


    const [location, setLocation] = useState([]);

    useEffect(() => {


        Axios 
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(response => {

                setLocation(response.data)
                console.log(response.data)
            })

            .catch(
                err => console.log(err)

                )
            }, [])



            function Loc(obj) {

                return <LocationCard
                  name={obj.name}
                  />
              }
            
              return (
            
                <div>
            
                  {location.map(Loc)}
                </div>
            
              )

  
}
