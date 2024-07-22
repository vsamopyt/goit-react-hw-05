export default function SearchBar({onChange}) {
  function handleSubmit(event) {
    event.preventDefault();
    const form =event.target.elements;
    onChange(form.searchBar.value)
    console.log(event);
    console.log(event.target.elements.searchBar.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="search" name="searchBar" id="searchBar" />
        <button type="submit">Serach</button>
      </form>
    </>
  );
}
