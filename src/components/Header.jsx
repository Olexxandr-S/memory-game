import "./Header.sass";

const Header = ({ shuffleCards, setTheme, theme }) => {
  return (
    <header className={!!theme ? theme : "header"}>
      <h1>Memory Game</h1>
      <button
        onClick={() => {
          shuffleCards();
          setTheme("sports");
        }}
      >
        Sports 4X3
      </button>
      <button
        onClick={() => {
          shuffleCards();
          setTheme("earth");
        }}
      >
        Earth 5X4
      </button>
      <button
        onClick={() => {
          shuffleCards();
          setTheme("music");
        }}
      >
        Music 5X4
      </button>
      <button
        onClick={() => {
          shuffleCards();
          setTheme("animals");
        }}
      >
        Animals 6X4
      </button>
      <button onClick={shuffleCards}>New Game</button>
    </header>
  );
};

export default Header;
