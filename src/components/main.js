import React from "react";

import pic from "../pics/MainBackground.gif";

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
            info about the app
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
