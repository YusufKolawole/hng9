import "./styles/custom.style.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 992 ? setIsDesktop(true) : setIsDesktop(false);
    });
  });

  return (
    <div className="app">
      <header className="container text-center">
        <button className="btn_share">
          <img
            src={`${
              isDesktop
                ? "./images/desktop-share.png"
                : "/images/mobile-share.png"
            }`}
            alt="share profile"
          />
        </button>
        <div className="avatar">
          <img
            src="https://ca.slack-edge.com/T042F7V19Q8-U04836ETGPQ-44bcbf775f87-48"
            alt="profile img"
            id="profile__img"
          />
        </div>
        {/* <p id="slack">utin-francis-peter</p> */}
        <h1 className="pt-4 pb-5" id="slack">
          Yusuf Quadri Kolawole
        </h1>
      </header>

      <main className="container">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            id={link.id}
            target={"_blank"}
            rel="noopener noreferrer">
            <button className={`${!isDesktop ? "btn_sm" : "btn_lg"}`}>
              {link.name}
            </button>
          </a>
        ))}
        <div className="d-flex-center gap-3 mt-5 mb-5">
          <img className="main-icons" src="./images/slack.png" alt="slack" />
          <a
            href="https://github.com/YusufKolawole/hng9"
            target={"_blank"}
            rel="noopener noreferrer">
            <img className="main-icons" src="./images/icon.png" alt="github" />
          </a>
        </div>
      </main>

      <footer className="container" id="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              className="main-icons"
              src="./images/zuri.png"
              alt="zuri logo"
            />
          </div>
          <p className="footer-text">HNG Internship 9 Frontend Task</p>
          <div className="footer-brand">
            <img className="main-icons" src="./images/I4G.png" alt="I4G logo" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

const links = [
  {
    id: "twitter",
    name: "Twitter Link",
    link: "https://twitter.com/AbdulQuadriee",
  },
  {
    id: "btn__zuri",
    name: "Zuri Team",
    link: "https://training.zuri.team/",
  },
  {
    id: "books",
    name: "Zuri Books",
    link: "https://books.zuri.team/",
  },
  {
    id: "book__python",
    name: "Python Books",
    link: "https://books.zuri.team/python-for-beginners?ref_id=quadrihuncho",
  },
  {
    id: "pitch",
    name: "Background Check for Coders",
    link: "https://background.zuri.team/",
  },
  {
    id: "book__design",
    name: "Design Books",
    link: "https://books.zuri.team/design-rules",
  },
];
