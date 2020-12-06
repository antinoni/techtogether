import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { db } from "../App";


class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = { boardarray: [] };
	}
	componentDidMount(){
		db.collection('Boards')
			.get()
			.then(query => {
			console.log(query.docs);
			const data = query.docs.map(doc => doc.data());
			console.log(data);
			this.setState({boardarray: data});
		});
	}

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
}

 export default Board
