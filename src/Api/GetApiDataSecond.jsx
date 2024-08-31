


export const getMoviesDetails = async ({params}) => {
  console.log(params)
  const id = params.movieID;

    try{
        // const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
        const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
         const data = await res.json()
         console.log(data)
         return data;
     } catch (err) {
         console.log(err)
     }
}
