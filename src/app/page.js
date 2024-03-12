import Results from "../components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
    const genre = searchParams.genre || 'fetchTrending' // You can change this to 'fetchTopRated' if needed
    const url = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const results = data.results;
    // console.log(results); // Log the movie results
  // const genre = searchParams.genre || 'fetchTrending'
  // const res = await fetch(
  //   `https://api.themoviedb.org/3${
  //     genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
  //   }?api_key = ${API_KEY}&language=en-US&page=1`
  // );
  // const data = await res.json();

  // const results = data.results
  // console.log(results)
  return (
     <div>
         <Results results= {results}/>
     </div>
  );
}
