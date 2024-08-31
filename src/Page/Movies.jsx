import { useLoaderData } from "react-router-dom"
// import {Card} from "./Card";
import "../Layout/Card.css"
import CardSecond from "./CardSecond";

function Movies() {
  const moviesData = useLoaderData();
  console.log(moviesData)
  return (
    <>
    <ul className="container grid grid-four--cols">
    {moviesData.Search.map((curMovie) =>  {
      {/* return <Card key={curMovie.imdbID} curMovie={curMovie} /> */}
      return <CardSecond key={curMovie.imdbID} curMovie={curMovie} />
     }
     )}
    </ul>
    
    </>
  )
}

export default Movies



