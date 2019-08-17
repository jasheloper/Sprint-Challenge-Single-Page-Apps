import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {

        setCharacter(response.data.results)

        console.log(response)
      })


      .catch(
        err => console.log(err)
      )
  }, [])




  function Char(obj) {

    return <CharacterCard
      name={obj.name}
      />
  }

  return (

    <div>

      {character.map(Char)}
    </div>

  )


}

