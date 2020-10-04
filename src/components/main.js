import React from "react";
import pic from "../pics/MainBackground.gif";
import MusPlayer from "./musplayer"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Menu">
        <img id="MainPicBackground" src={pic} alt="background" />
        <div className="PostList">
          <div className="Post">
            <span className="PostTitle">Все о сне</span>
            <p></p>
          </div>
          <div className="Post">
            <span className="PostTitle">Звуки дождя</span>
            <p className="PostText">Помогут расслабиться и уснуть</p>
            <MusPlayer></MusPlayer>
          </div>
          <div className="Post">Hello</div>
        </div>
      </div>
    );
  }
}

export default Main;
