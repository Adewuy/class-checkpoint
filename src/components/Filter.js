import { useState } from "react";
import MovieList from "./MovieList";

export default function Filter() {
  const [movieArray, setMovieArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState(movieArray);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  function filter(title, rating) {
    if (title.length > 0 && rating.length > 0) {
      rating = Number(rating);
      setFilteredArray(
        movieArray.filter((movie) => {
          return movie.title.includes(title) && movie.rating === rating;
        })
      );
    } else {
      setFilteredArray(movieArray);
    }
  }

  function trackInput(e, setter) {
    e.preventDefault();
    const value = e.target.value;
    setter(value);
  }

  function addMovie(e) {
    e.preventDefault();

    const newMovie = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      posterUrl: e.target.elements.posterUrl.value,
      rating: e.target.elements.rating.value,
    };

    setMovieArray((previousValue) => {
      return [...previousValue, newMovie];
    });

    setFilteredArray(movieArray);

    console.log(movieArray);
    e.target.reset();
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            trackInput(e, setTitle);
            filter(title, rating);
          }}
        />
        <input
          type="number"
          placeholder="rating"
          onChange={(e) => {
            trackInput(e, setRating);
            filter(title, rating);
          }}
        />
      </form>

      <MovieList listOfMovies={filteredArray} />

      <form onSubmit={addMovie}>
        <h1>Add a movie</h1>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />
        <input type="text" name="posterUrl" placeholder="poster url" />
        <input type="number" name="rating" placeholder="enter a rating" />
        <input type="submit" value={"submit"} />
      </form>
    </>
  );
}
