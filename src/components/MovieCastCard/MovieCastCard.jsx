import css from './MovieCastCard.module.css';
export default function MovieCastCard({ item }) {
  const { character, name, profile_path } = item;
  return (
    // <li key ={id}>
    <div className={css.MovieCastCardContainer}>
      {profile_path === null ? (
        <img
          src="https://dummyimage.com/400x600/cdcdcd/000.jpg&amp;text=No+poster"
          alt=""
        />
      ) : (
        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />
      )}
      {/* <img src={`https://image.tmdb.org/t/p/w500/${profile_path
  }`} alt="" /> */}
      <div className={css.movieCastCardTextContainer}>
        <p>{name}</p>
        <p>as {character}</p>
        {/* <p>
          {name} as {character}`
        </p> */}
      </div>
    </div>

    //   </li>
  );
}
