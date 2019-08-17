import React, { useEffect, useState } from "react";

export default function LocationsList() {


    const [episode, setEpisode] = useState([]);

    useEffect(() => {


        Axios 
            .get(`https://rickandmortyapi.com/api/episode/`)
            .then(response => {

                setEpisode(response.data.results)
                console.log(response.data.results)
            })

            .catch(
                err => console.log(err)

                )
            }, [])


            function Ep(obj) {

                return <EpisodeCard
                  name={obj.name}
                  />
              }
            
              return (
            
                <div>
            
                  {episode.map(Loc)}
                </div>
            
              )
}
