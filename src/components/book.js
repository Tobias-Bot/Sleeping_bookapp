import React from "react";
import book from "../books/book";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentPage: 0,
    };

    this.text = React.createRef();

    this.setText = this.setText.bind(this);
  }

  componentDidMount() {
    this.setText();
  }

  componentDidUpdate() {
    this.setText();
  }

  setText() {
    let page = this.state.CurrentPage;

    this.text.current.innerHTML = book[page].title;
    this.text.current.innerHTML += book[page].text;
  }

  TurnPage(value) {
    let page = this.state.CurrentPage;

    page += value;

    if (page < 0) {
      page = book.length - 1;
    }
    else if (page > book.length - 1) {
      page = 0;
    }

    this.setState({CurrentPage: page});
  }

  render() {
    return (
      <div>
        <div ref={this.text} className="BookBackground"></div>
        <div className="PageBtns">
          <button className="btnPage" style={{float: 'left'}} onClick={this.TurnPage.bind(this, -1)}>
            <i className="fas fa-arrow-alt-circle-left"></i>
          </button>
          <button className="btnPage">
            <i className="fas fa-stream"></i>
          </button>
          <button className="btnPage">
            <i className="far fa-bookmark"></i>
          </button>
          <button className="btnPage" style={{float: 'right'}} onClick={this.TurnPage.bind(this, 1)}>
            <i className="fas fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Book;
