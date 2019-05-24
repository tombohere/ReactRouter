import React from "react";

class IconList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.backendless.com/215B8594-CF22-8240-FF16-8046BF4B7600/8E7D8EBD-64B1-9DDB-FFE9-DD778CC30900/data/Graphics?pageSize=100&sortBy=name%20asc"
    )
      .then(res => res.json())
      .then(icons => {
        this.setState({ icons });
      });
  }

  render() {
    return (
      <div className="iconlist">
        <ul>
          {this.state.icons.map(p => (
            <li key={p.objectId}>
              <img src={p.source} alt={p.name} width="32px" /> {p.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default IconList;
