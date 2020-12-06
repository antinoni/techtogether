import * as React from "react";
import { useState } from "react";
import "./BoardComponent.css";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import { db } from "../App";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boardarray: [] };
  }
  componentDidMount() {
    db.collection("Boards")
      .get()
      .then((query) => {
        console.log(query.docs);
        const data = query.docs.map((doc) => doc.data());
        console.log(data);
        this.setState({ boardarray: data });
      });
  }

  render() {
    const { boardarray } = this.state;

    return (
      <div>
        <h1>JOIN A GROUP</h1>
        {boardarray.map((board) => (
          <div>
            <Grid item xs={6} sm={6}>
              <Link to="/post/${board.boardname}">
                <img
                  className="tab"
                  src={board.imagepath}
                  alt="elderly picture"
                />
              </Link>
            </Grid>
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
