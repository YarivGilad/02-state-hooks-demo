
import { Component } from "react";

interface State {
    booksCount: number;
  }

export class Books extends Component<object,State> {
  state = {
    booksCount: 0
  };

  addBook = () => {
    this.setState({ booksCount: this.state.booksCount + 1 });
  };
  render() {
    return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {this.state.booksCount}</h3>
        <button className="button" onClick={this.addBook}>
          add a book
        </button>
      </div>
    );
  }
}
