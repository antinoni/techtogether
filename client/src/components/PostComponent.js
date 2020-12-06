import * as React from 'react';
import { useState } from 'react';

import { db } from "../App";


class Post extends React.Component{
	constructor(props){
		super(props);
		// GET BOARDNAME FROM PREVIOUS COMPONENT
		this.state = { postarray: [] };
	}
	componentDidMount(){
		db.collection('Boards')
			.where('boardname', '==', 'elderly')
			.get()
			.then(query => {
			const data = query.docs.map(doc => doc.data());
			console.log(query.docs[0].id);
				db.collection('Boards')
					.doc(query.docs[0].id)
					.collection('posts')
					.get()
					.then(querypost => {
						const datapost = querypost.docs.map(doc => doc.data());
						this.setState({postarray: datapost});
					})
		});
	}

	render(){
		const { postarray } = this.state;
		return (
			<div>
			<div> Currently this is hard coded to get elderly posts. Will have to figure out how to send parameter over Component and replace line 39... </div>
			{ postarray.map(post => (
				<div> 
					<div>Title: { post.posttitle }</div> 
					<div>Details: {post.postdetails} </div>
				</div>

			))}
			</div>
		);
	}
}

 export default Post
