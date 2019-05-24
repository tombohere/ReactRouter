import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: global.count,
      value: global.SampleVar,
      inputValue: global.SampleVar
    };
  }

  bcount() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            global.count += 1;
          }}
        >
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
    global.SampleVar = e.target.value;
  };

  render() {
    return (
      <div>
        <h1>Welcome to the Website!</h1>
        {this.bcount()}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <br />
        global.SampleVar="{global.SampleVar}"
      </div>
    );
  }
}

export default Home;
