import React from "react";

import pic from "../pics/MainBackground.gif";
import logo from "../pics/logo.png";

import Book from "./book";
import MusPlayer from "./musplayer";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Menu">
        <img id="MainPicBackground" src={pic} alt="background" />
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade"
            id="book"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <Book></Book>
          </div>
          <div
            className="tab-pane fade"
            id="music"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <MusPlayer></MusPlayer>
          </div>
          <div
            className="tab-pane fade"
            id="appinfo"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="InfoBackground">
              Сделано с ❤ в паблике Май
              <br />
              <img className="logo" src={logo} alt="May logo" />
              <br />
              <br />
              <br />
              <br />
              Проблемы с приложением, хочешь предложить что-то поменять или просто с нами поболтать? Напиши нам!
              <br />
              <br />
              <button className="btnMusPlayer">
                <a
                  className="linkInBtn"
                  href="https://vk.com/im?sel=-160404048"
                >
                  написать
                </a>
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>

        <nav className="MainBtnsBar">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link main-btn"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#book"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              <i className="fas fa-book"></i>
            </a>
            <a
              className="nav-item nav-link main-btn"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#music"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              <i className="fas fa-headphones"></i>
            </a>
            <a
              className="nav-item nav-link main-btn"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#appinfo"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              <i className="fas fa-info-circle"></i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Main;
