import * as React from "react";
import { useState } from "react";
import "./BoardComponent.css";
import elderlyPic from "../assets/elderlyboard.png";
import momPic from "../assets/singlemom.png";
import tab1 from "../assets/tab1.png";
import tab2 from "../assets/tab2.png";
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
        <Grid container direction={"row"}>
          <Grid item xs={12}>
            <h1>JOIN A GROUP</h1>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Link to="/post">
              <img className="tab" src={tab1} alt="elderly picture" />
            </Link>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Link to="/post">
              <img className="tab" src={tab2} alt="single mom picture" />
            </Link>
          </Grid>
        </Grid>
        {boardarray.map((board) => (
          <div>{board.boardname} </div>
        ))}
      </div>
    );
  }
}

export default Board;
