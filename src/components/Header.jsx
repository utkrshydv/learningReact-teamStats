export default function Header(props) {
  const { searchValue, setSearchValue } = props;

  return (
    <header className="header">
      <a href="index.html" style={{ textDecoration: "none" }}>
        <h1 className="header-title">
          <i className="fa-solid fa-chart-simple"></i> TeamStats
        </h1>
      </a>

      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="e.g. Barcelona"
        type="text"
      />
    </header>
  );
}
