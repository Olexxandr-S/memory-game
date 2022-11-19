import "./Header.sass";

const Header = ({ shuffleCards, setTheme }) => {
  return (
    <header>
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
          setTheme("animals");
        }}
      >
        Animals 5X4
      </button>
      <button onClick={shuffleCards}>New Game 5X4</button>
      <button onClick={shuffleCards}>Game 6X4</button>
      <button onClick={shuffleCards}>New Game</button>
    </header>
  );
};

export default Header;