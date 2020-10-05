import React from "react";
import play1 from "../audio/play1.mp3";
import play2 from "../audio/play2.mp3";

class MusPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: [
        { title: "дождь", src: play1 },
        { title: "гроза", src: play2 },
      ],
      counter: 0,
      play: false,
      TimerValue: 30,
      PlayTimer: false,
    };

    this.timer = null;

    this.PlayMusic = this.PlayMusic.bind(this);
    this.ChangeMusic = this.ChangeMusic.bind(this);
    this.setTimerRange = this.setTimerRange.bind(this);
    this.Sleep = this.Sleep.bind(this);
    this.ChangeTimer = this.ChangeTimer.bind(this);
  }

  ChangeTimer() {
    let player = document.getElementById("player");
    let play = this.state.PlayTimer;
    let value = this.state.TimerValue;

    if (value)
      if (play) {
        clearInterval(this.timer);
        this.setState({ play: false, PlayTimer: false });
        player.pause();
      } else {
        this.Sleep();
      }
  }

  Sleep() {
    let player = document.getElementById("player");
    let time = this.state.TimerValue;

    player.play();
    this.setState({ play: true, PlayTimer: true });

    this.timer = setInterval(() => {
      time--;
      this.setState({ TimerValue: time });

      if (!time) {
        clearInterval(this.timer);
        this.setState({ play: false, PlayTimer: false });
        player.pause();
      }
    }, 60000);
  }

  setTimerRange(e) {
    this.setState({ TimerValue: e.target.value });
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

    this.setState({ play });
  }

  ChangeMusic(value) {
    let counter = this.state.counter;
    let player = document.getElementById("player");

    counter += value;
    if (counter > this.state.song.length - 1) counter = 0;
    else if (counter < 0) counter = this.state.song.length - 1;

    this.setState({ counter, play: true });

    player.load();
    player.play();
  }

  render() {
    let icon = this.state.play ? (
      <i className="fas fa-pause"></i>
    ) : (
      <i className="fas fa-play"></i>
    );

    let timerState = this.state.PlayTimer ? "остановить" : "начать";

    return (
      <div>
        <audio id="player" loop>
          <source src={this.state.song[this.state.counter].src}></source>
        </audio>
        <div className="TabTitle">
          Звуки природы, которые помогут вам расслабиться и заснуть. Приятных
          сновидений
        </div>
        <br />
        <div className="MusPlayer">
          <span className="MusTitle">
            {this.state.song[this.state.counter].title}
          </span>
          <button
            className="btnMusPlayer"
            onClick={this.ChangeMusic.bind(this, -1)}
          >
            <i className="fas fa-backward"></i>
          </button>
          <button className="btnMusPlayer" onClick={this.PlayMusic}>
            {icon}
          </button>
          <button
            className="btnMusPlayer"
            onClick={this.ChangeMusic.bind(this, 1)}
          >
            <i className="fas fa-forward"></i>
          </button>
        </div>
        <br />
        <div className="SleepTimer">
          <div className="CardTitle">
            <span style={{ float: "left" }}>Таймер сна</span>
            <button className="btnMusPlayer" onClick={this.ChangeTimer}>
              {timerState}
            </button>
          </div>
          <div className="TimerCounter">{this.state.TimerValue}</div>
          <span className="SubText">минут</span>
          <input
            type="range"
            className="custom-range"
            value={this.state.TimerValue}
            min="0"
            max="120"
            step="5"
            id="SleepInput"
            onChange={this.setTimerRange}
          />
        </div>
      </div>
    );
  }
}

export default MusPlayer;
