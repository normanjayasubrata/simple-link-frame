import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class LinkBoard extends Component {
  coba = kata => {
    console.log(kata);
  };

  render() {
    const actorSelected = this.props.actordb.filter(actor => {
      return actor.tag === this.props.selected;
    });

    const data = [];

    actorSelected.map(actor => {
      return actor.content.map((param, index) => {
        return data.push({
          id: index + 1,
          title: param.title,
          link: param.link
        });
      });
    });

    const selectRowProps = {
      mode: "radio",
      bgColor: "yellow",
      hideSelectColumn: true,
      clickToSelect: true,
      className: "dataRow"
    };
    // console.log(data);
    const options = {
      onRowClick: event => this.props.selectedLink(event.link)
    };

    return (
      <div className="linkBoard">
        <BootstrapTable
          data={data}
          selectRow={selectRowProps}
          striped
          className="dataRow"
          options={options}
        >
          <TableHeaderColumn dataField="id" width="50" isKey={true}>
            No
          </TableHeaderColumn>
          <TableHeaderColumn dataField="title">Title</TableHeaderColumn>
          <TableHeaderColumn dataField="link">Link</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default LinkBoard;
