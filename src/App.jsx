import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  //Store our games data in state
  const [games, setGames] = useState([]);

  //function to get data
  async function getGames(event) {
    event.preventDefault();
    const API = `http://localhost:8080/games?year=${event.target.year.value}`;
    const res = await axios.get(API);
    console.log(event.target.year.value);
    setGames(res.data);
  }

  return (
    <>
     {/* Form with input */}
     <form onSubmit={getGames}>
      <input name ="year" placeholder='Year' />
      <button>Get Games</button>
     </form>


     {/* Map through games data */}
    
     {games.map((game) => {
      return (
          <div key={game.name} >
              <h2>{game.name}</h2>
              <h3>Year: {game.year}</h3>
          </div>
      );
     })}
    </>
  )
}

export default App
