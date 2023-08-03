import React from "react";
import Joke from "./components/joke";
import JokesData from "./components/jokesdata";
export default function App(){
  const jokeElements = JokesData.map(joke => {
  return <Joke setup={joke.setup} punchline={joke.punchline}/>})
  return (
    <>
    {jokeElements}
      </>
  )
   
}

