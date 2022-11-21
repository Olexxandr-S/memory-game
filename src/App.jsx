import { useState, useEffect, useContext } from "react";
import "./App.sass";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SingleCard from "./components/SingleCard";
import { ThemeContext } from "./Context/ThemeContext";

const sportsImg = [
  { src: "/images/sports/football.png", matched: false },
  { src: "/images/sports/badminton.png", matched: false },
  { src: "/images/sports/baseball.png", matched: false },
  { src: "/images/sports/basketball.png", matched: false },
  { src: "/images/sports/rugby.png", matched: false },
  { src: "/images/sports/volleyball.png", matched: false },
];

const earthImg = [
  { src: "/images/earth/earth-day.png", matched: false },
  { src: "/images/earth/earth.png", matched: false },
  { src: "/images/earth/eco.png", matched: false },
  { src: "/images/earth/green.png", matched: false },
  { src: "/images/earth/honeycomb.png", matched: false },
  { src: "/images/earth/landscape.png", matched: false },
  { src: "/images/earth/lightbulb.png", matched: false },
  { src: "/images/earth/planet.png", matched: false },
  { src: "/images/earth/sea.png", matched: false },
  { src: "/images/earth/trees.png", matched: false },
];

const musicImg = [
  { src: "/images/music/drum.png", matched: false },
  { src: "/images/music/electric-keyboard.png", matched: false },
  { src: "/images/music/guitar.png", matched: false },
  { src: "/images/music/maracas.png", matched: false },
  { src: "/images/music/metronome.png", matched: false },
  { src: "/images/music/sax.png", matched: false },
  { src: "/images/music/treble-clef.png", matched: false },
  { src: "/images/music/ukelele.png", matched: false },
  { src: "/images/music/triangle.png", matched: false },
  { src: "/images/music/violin.png", matched: false },
];

const animalsImg = [
  { src: "/images/animals/chameleon.png", matched: false },
  { src: "/images/animals/elephant.png", matched: false },
  { src: "/images/animals/fox.png", matched: false },
  { src: "/images/animals/frog.png", matched: false },
  { src: "/images/animals/giraffe.png", matched: false },
  { src: "/images/animals/koala.png", matched: false },
  { src: "/images/animals/panda-bear.png", matched: false },
  { src: "/images/animals/penguin.png", matched: false },
  { src: "/images/animals/snake.png", matched: false },
  { src: "/images/animals/squirrel.png", matched: false },
  { src: "/images/animals/turtle.png", matched: false },
  { src: "/images/animals/whale.png", matched: false },
];

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle
  const shuffleCards = () => {
    let images;
    if (theme === "sports") {
      images = sportsImg;
    } else if (theme === "earth") {
      images = earthImg;
    } else if (theme === "music") {
      images = musicImg;
    } else {
      images = animalsImg;
    }
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
  };

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choice
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  //start new game
  useEffect(() => {
    shuffleCards();
  }, [theme]);

  return (
    <div className={`App-${theme}`}>
      <Header shuffleCards={shuffleCards} theme={theme} setTheme={setTheme} />
      {!!theme ? (
        <div className={`${theme}-grid`}>
          {cards.map((card) => (
            <SingleCard
              theme={theme}
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      ) : (
        <div className="home">Choose game theme</div>
      )}
      <Footer theme={theme} />
    </div>
  );
}

export default App;
