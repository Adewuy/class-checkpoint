import MovieCard from "./MovieCard";

export default function MovieList({ listOfMovies }) {
  listOfMovies.map((elem) => {
    console.log(elem);
  });
  return (
    <>
      {listOfMovies.length > 0 ? (
        listOfMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            description={movie.description}
            posterUrl={movie.posterUrl}
            rating={movie.rating}
          />
        ))
      ) : (
        <>no movies</>
      )}
    </>
  );
}
