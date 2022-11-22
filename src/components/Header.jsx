import { useState } from "react";
import "./Header.sass";

const themes = [
  { theme: "sports", text: "Sports 4X3" },
  { theme: "earth", text: "Earth 5X4" },
  { theme: "music", text: "Music 5X4" },
  { theme: "animals", text: "Animals 6X4" },
];

const Header = ({ shuffleCards, setTheme, theme }) => {
  const [active, setActive] = useState("");
  const [burger, setBurger] = useState(false);

  const randomGame = () => {
    const random = themes[Math.floor(Math.random() * themes.length)];
    return random;
  };

  return (
    <header
      className={`${!!theme ? theme : "header"} ${burger ? "burger" : ""}`}
    >
      <h1
        onClick={() => {
          setBurger(burger === true ? false : true);
        }}
      >
        Memory Game
      </h1>
      {themes.map((currentTheme, id) => {
        return (
          <button
            key={id}
            className={active === currentTheme.theme ? "active" : ""}
            onClick={() => {
              setBurger(false);
              setActive(currentTheme.theme);
              shuffleCards();
              setTheme(`${currentTheme.theme}`);
            }}
          >
            {currentTheme.text}
          </button>
        );
      })}
      <button
        onClick={() => {
          if (theme === "") {
            const randomTheme = randomGame().theme;
            setBurger(false);
            shuffleCards();
            setActive(randomTheme);
            setTheme(randomTheme);
          } else {
            setBurger(false);
            shuffleCards();
          }
        }}
      >
        New Game
      </button>
    </header>
  );
};

export default Header;
