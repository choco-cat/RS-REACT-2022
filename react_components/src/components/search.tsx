export default function Search() {
  return (
    <form action="/" method="get">
      <input type="text" placeholder="Search..." name="search" />
      <button type="submit">Search</button>
    </form>
  );
}
