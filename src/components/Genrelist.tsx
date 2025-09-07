import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
