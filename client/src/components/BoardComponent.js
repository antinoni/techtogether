import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { db } from "../App";

const useStyles = makeStyles((theme) => ({
	root: {
        height: '100vh',
        height:"70vh",
        marginLeft:"20%",
        marginTop:"5%",
        backgroundColor:"#DDC18C", 
        width:"60%"
    },
    formControl: {
        minWidth: 200,
        paddingLeft: -10
    },
    icon: {
        color:"#C8564E",
        position:"absolute",
        display: 'flex',
        alignItems: 'center',
        marginTop: '-1.5%',
        marginLeft:"28%",
        fontSize: "50px"
    }
}));

class Board extends React.Component{
	constructor(props){
		super(props);
		this.state = { boardarray: [] };
	}
	componentDidMount(){
		db.collection('Boards')
			.get()
			.then(query => {
			const data = query.docs.map(doc => doc.data());
			this.setState({boardarray: data});
		});
	}

	render(){
		const { boardarray } = this.state;
		return (
			<div>
			{ boardarray.map(board => (
				<div>{board.boardname} </div>
			))}
			</div>
		);
	}
}

 export default Board
