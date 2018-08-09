import React, { Component } from "react";

class PeoplesBoard extends Component {
  render() {
    const getList = (location, occupation) => {
      const wew = this.props.actordb.filter(actor => {
        return actor.location === location && actor.occupation === occupation;
      });

      return wew.map(param => {
        return (
          <li
            key={param.id}
            value={param.tag}
            style={{
              margin: "10px",
              marginLeft: "30px",
              color: "red",
              cursor: "pointer"
            }}
            onClick={this.props.selectedPeople}
          >
            {param.nama}
          </li>
        );
      });
    };

    return (
      <div>
        {/*<Treebeard data={data} onToggle={this.onToggle} />*/}
        <div className="css-treeview">
          <ul>
            <li>
              <input type="checkbox" id="item-0" />
              <label htmlFor="item-0">Actor</label>
              <ul>
                <li>
                  <input type="checkbox" id="item-0-0" />
                  <label htmlFor="item-0-0">International</label>
                  <ul>{getList("international", "actor")}</ul>
                </li>
                <li>
                  <input type="checkbox" id="item-0-1" />
                  <label htmlFor="item-0-1">Indonesia</label>
                  <ul>{getList("indonesia", "actor")}</ul>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" id="item-1" />
              <label htmlFor="item-1">Scientist</label>
              <ul>
                <li>
                  <input type="checkbox" id="item-1-0" />
                  <label htmlFor="item-1-0">International</label>
                  <ul>{getList("international", "scientist")}</ul>
                </li>
                <li>
                  <input type="checkbox" id="item-1-1" />
                  <label htmlFor="item-1-1">Indonesia</label>
                  <ul>{getList("indonesia", "scientist")}</ul>
                </li>
              </ul>
            </li>
            <li>
              <input type="checkbox" id="item-2" />
              <label htmlFor="item-2">Politician</label>
              <ul>
                <li>
                  <input type="checkbox" id="item-2-0" />
                  <label htmlFor="item-2-0">International</label>
                  <ul>{getList("international", "politician")}</ul>
                </li>
                <li>
                  <input type="checkbox" id="item-2-1" />
                  <label htmlFor="item-2-1">Indonesia</label>
                  <ul>{getList("indonesia", "politician")}</ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PeoplesBoard;
