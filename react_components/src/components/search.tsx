export default function Search() {
  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input type="text" placeholder="Search..." name="search" />
      <button type="submit">Search</button>
    </form>
  );
}
