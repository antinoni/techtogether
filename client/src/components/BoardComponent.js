<<<<<<< HEAD
import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
=======
import * as React from "react";
import { useState } from "react";
import "./BoardComponent.css";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

>>>>>>> 880208029fa91f84bd54cb1bc423d34308a5f277
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

<<<<<<< HEAD
	render(){
		const { boardarray } = this.state;
		return (
			<div>
			{ boardarray.map(board => (
				<div style={{color: 'green'}}>
				
					<Link to={ '/post/' + `${board.boardname}`  } > {board.boardname} </Link> 
					<img src={board.imagepath} height="50px;" />
				</div>
			))}
			</div>
		);
	}
=======
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
>>>>>>> 880208029fa91f84bd54cb1bc423d34308a5f277
}

export default Board;
