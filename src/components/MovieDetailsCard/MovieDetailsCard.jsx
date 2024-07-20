import { Link } from 'react-router-dom';
export default function MovieDetailsCard({ data }) {
  const { imdb_id, overview, backdrop_path, title, genres, release_date, origin_country  } = data;

 
  const releaseYear = release_date.slice(0,4)
  console.log(releaseYear);
  return (
    <div>
      <Link to="/">go back</Link>

      <header>
        <h1>{`${title} (${releaseYear}) ${origin_country}`}</h1>
        <p>counntryspan</p>
      </header>
      <main>
        <div>
            <div>

          <p>{imdb_id}</p>
          <p>{overview}</p>

            </div>
            <div>
                
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt=""
          />
            </div>
        </div>
      </main>
    </div>
  );
}
