import * as React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LensIcon from '@material-ui/icons/Lens';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { db } from "../App";

export default function Newpost({ isAuthenticated }) {

	// have to also include UserID when signin and login feature is implemented
	// board is the value from MenuItem (I changed the values below)
    const addPostToDatabase = (title, detail, board) => {
        db.collection('Boards')
            .where('boardname', '==', board)
            .get()
            .then(query => {
                db.collection('Boards')
                    .doc(query.docs[0].id)
                    .collection('posts')
                    .add({
                        posttitle: title,
                        postdetails: detail,
                        created: db.FieldValue.serverTimestamp()
                        //createdBy: userId
                    })
            });
    };

    const [value, setValue] = useState("");

    const handleChange = e => setValue(e.target.value)
    
    
    
    return (
        <Grid container 
        component="main" 
        style={{
            height: '100vh',
            height:"65vh",
            marginLeft:"20%",
            marginTop:"5%",
            backgroundColor:"#DDC18C", 
            width:"60%",
            marginBottom: '5%'
        }}>
            <center><LensIcon
                     style={{
                        color:"#C8564E",
                        position:"absolute",
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '-1.5%',
                        marginLeft:"28.5%",
                        fontSize: "50px"
                        }} />
                        </center>
            <Grid cointainer>
                <Grid item style={{marginLeft:"170px",marginTop:"25px",fontSize:"30px", fontWeight:"bold",color:"white"}}>
                    <center>Post a new help request</center>
                </Grid>
                <Grid container style={{backgroundColor:"white", padding:"20px 0px 20px 20px",marginLeft:"65px",marginTop: "10px"}}>
                    <Grid container spacing={1}>
                        <Grid item xs={8}>
                            <TextField
                                variant="outlined"
                                autoComplete="title"
                                name="title"
                                required
                                fullWidth
                                id="title"
                                placeholder="Title"
                                style={{marginLeft:"20px",backgroundColor:"#fafafa"}}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl 
                            required 
                            style={{
                                minWidth: 200,
                                paddingLeft: -10
                            }}>
                                <InputLabel style={{marginTop:"-3px",marginLeft:"45px", zIndex:"15"}}>Tag</InputLabel>
                                <Select
                                variant="outlined"
                                name="tag"
                                required
                                id="tag"
                                onChange={handleChange}  
                                style={{backgroundColor:"#fafafa",marginLeft:"20px"}}                  
                                >
                                <MenuItem value="">
                                    <em>None</em>   
                                </MenuItem>
                                <MenuItem value="health">Health</MenuItem>
                                <MenuItem value="supplies">Supplies</MenuItem>
                                <MenuItem value="services">Services</MenuItem>
                                <MenuItem value="elderly">Elderly Care</MenuItem>
                                <MenuItem value="childcare">Child Care</MenuItem>
                                <MenuItem value="personalcare">Personal Care</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={11}>
                                <TextField
                                    id="outlined-multiline-static"
                                    fullWidth
                                    multiline
                                    rows={11}
                                    style={{
                                        marginLeft:"20px",
                                        backgroundColor: "#fafafa"
                                    }}
                                    placeholder="Explain your request here. Remember, never reveal any personal information you don't want strangers to have!"
                                    variant="outlined"
                                />
                        </Grid>    
                    </Grid>
                </Grid>
                <Button 
                variant="contained" 
                style={{        
                    color: '#ffffff',
                    fontWeight: 'bold',
                    background:'#99B27F',
                    padding: '10px 30px 10px 30px',
                    marginLeft:"20%",
                    marginTop:"1.5%",
                    borderRadius: '0',
                    "&:hover": {
                        background: '#99B27F',
                    }
                }}
                disableElevation
                onChange={addPostToDatabase}  
                >
                POST
                </Button>
            </Grid>
        </Grid>
    );

};
