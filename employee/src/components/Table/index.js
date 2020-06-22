import React from "react";
import "./style.css";
import TableHdr from "../TableHeader";
import TableRows from "../TableRows";

class Table extends React.Component {
  render(props) {
    return (
      <div className="row">
        <div className="col-12">
       
          <table>

            <TableHdr 
              src = {this.props.src}
              alt = {this.props.alt}
              id = {this.props.id}
            />

            <TableRows 
              employees = {this.props.employees}
            />

          </table>

        </div>
      </div>
    );
  }
}
export default Table;
