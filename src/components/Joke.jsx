import React, {Fragment, useState} from 'react'
import Button from './Button';

function Joke() {

    const [currentJoke,setCurrentJoke]= useState("");

    const fetchApi = async () =>{
        const request= await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
        const jsonData= await request.json();
        setCurrentJoke(jsonData.joke);
    }

  return (
    <Fragment>
        <Button askData={fetchApi} />
        <h2>{currentJoke}</h2>
    </Fragment>
  )
  
}

export default Joke;