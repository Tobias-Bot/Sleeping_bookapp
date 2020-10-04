import React from "react";
import book from '../books/book'

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

  render() {

    return (
      <div>
          <div ref={this.text} className="BookBackground"></div>
          <div></div>
      </div>
    );
  }
}

export default Book;
