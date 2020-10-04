import React from "react";
import play1 from "../audio/play1.mp3";
import play2 from "../audio/play2.mp3";
import play3 from "../audio/play3.mp3";

class MusPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: [play1, play2, play3],
      counter: 0,
      play: false,
    };

    this.PlayMusic = this.PlayMusic.bind(this);
    this.ChangeMusic = this.ChangeMusic.bind(this);
  }

  PlayMusic() {
    let player = document.getElementById("player");
    let play = this.state.play;

    if (play) {
      player.pause();
    } else {
      player.play();
    }

    play = !play;

    this.setState({play});
  }

  ChangeMusic() {
    let counter = this.state.counter;
    let player = document.getElementById("player");

    counter++;
    if (counter > this.state.song.length - 1) counter = 0;

    this.setState({ counter, play: true });

    console.log(this.state.counter);

    player.load();
    player.play();
  }

  render() {
    let icon = this.state.play ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>

    return (
      <div>
        <audio id="player" loop>
          <source src={this.state.song[this.state.counter]}></source>
        </audio>
        <button className="btnMusPlayer" onClick={this.PlayMusic}>
          {icon}
        </button>
        <button className="btnMusPlayer" onClick={this.ChangeMusic}>
            <i className="fas fa-forward"></i>
        </button>
      </div>
    );
  }
}

export default MusPlayer;
