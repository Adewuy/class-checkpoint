export default function MovieCard({ title, description, posterUrl, rating }) {
  console.log(description);
  console.log(rating);
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{rating}</p>
      <a href={posterUrl}>{title}</a>
    </>
  );
}
