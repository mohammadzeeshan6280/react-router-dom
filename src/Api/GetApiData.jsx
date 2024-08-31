
export const getMoviesData = async () => {
    try{
       const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1");
        const data = await res.json()
        console.log(data)
        return data;
    } catch (err) {
        console.log(err)
    }
};

