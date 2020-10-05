import React from "react";
import book from "../books/book";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentPage: 0,
      showContent: false,
    };

    this.content = '';

    this.text = React.createRef();

    this.setText = this.setText.bind(this);
    this.setPage = this.setPage.bind(this);
    this.showContent = this.showContent.bind(this);
  }

  componentDidMount() {
    this.setText();

    this.content = this.text.current.innerHTML;
  }

  setText() {
    let page = this.state.CurrentPage;

    this.text.current.innerHTML = `<h3 style="text-align: center;">${book[page].title}</h3>`;
    this.text.current.innerHTML += `<p>${book[page].text}</p>`;
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

    this.setState({CurrentPage: page}, () => {
      this.setText();
    });
  }

  setPage(e) {
    let pageNum = book.findIndex(({title}) => title === e.target.innerText);

    this.setState({CurrentPage: pageNum, showContent: false}, () => {
      this.setText();
    });
  }

  showContent() {
    let show = this.state.showContent;

    if (show) {
      this.setText();
    } else {
      
      // fix

    }

    this.setState({showContent: !show});
  }

  render() {
    let isShowContent = this.state.showContent;

    if (isShowContent) {
      this.content = book.map((el, i) => {
        return <div className="ContentTitle" key={i} onClick={this.setPage}>{el.title}</div>;
      });
    }

    return (
      <div>
        <div ref={this.text} className="BookBackground">
          {this.content}
        </div>
        <div className="PageBtns">
          <button className="btnPage" style={{float: 'left'}} onClick={this.TurnPage.bind(this, -1)}>
            <i className="fas fa-arrow-alt-circle-left"></i>
          </button>
          <button className="btnPage" onClick={this.showContent}>
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
