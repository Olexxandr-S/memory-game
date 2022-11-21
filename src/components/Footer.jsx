import "./Footer.sass";

const Footer = ({ theme }) => {
  return (
    <footer className={!!theme ? `footer-${theme}` : "footer"}>
      <p>
        Created by{" "}
        <a href="https://0lexxandr-s-portfolio.vercel.app/">Olexxandr_S </a>
      </p>
    </footer>
  );
};

export default Footer;
