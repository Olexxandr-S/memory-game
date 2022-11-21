import "./SingleCard.sass";

function SingleCard({ card, handleChoice, flipped, disabled, theme }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  let cover = "";
  if (theme === "sports") {
    cover = "/images/sports.png";
  } else if (theme === "earth") {
    cover = "/images/earth.png";
  } else if (theme === "music") {
    cover = "/images/music.png";
  } else if (theme === "animals") {
    cover = "/images/animals.png";
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className={`front image-${theme}`} src={card.src} alt="card" />
        <img
          className={`back image-${theme}`}
          src={`${cover}`}
          onClick={handleClick}
          alt="cover"
        />
      </div>
    </div>
  );
}

export default SingleCard;
