import { useLoaderData } from "react-router-dom"

export default function MovieDetails() {
    // const params = useParams();
    // console.log(params)

   const movieData =  useLoaderData()
   console.log(movieData)

  return (
    <div>
      <h2>Hello Movie</h2> {/* Dynamic movieID name */}
    </div>
  )
}
