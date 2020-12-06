import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';



export default function Home() {

    return (
        <Grid item>
			<CssBaseline />
            <Grid container name="first-image" style={{height:'935px',backgroundColor: '#99B27F'}}>
                <Grid item xs={3} sm={4} md={7}>
                    <img 
                        style={{marginTop:"-100px"}}
                        src="https://cdn.discordapp.com/attachments/784159930029703189/784776210013093929/maingrandma.png" />
                </Grid>
                <Grid item 
                    xs={11} 
                    sm={8} 
                    md={4} 
                    style={{            
                        backgroundColor:'#D6E0CC',
                        padding: '50px 80px 80px 80px',
                        height: '450px',
                        marginTop: '150px',
                        borderRadius: '40px'
                    }} 
                    elevation={0} square>
                    <img src="https://cdn.discordapp.com/attachments/784159525657378829/784740718324219904/helpmehelpyou-01.png" height="150px;" top="5px;"/>
                    <h1>Welcome to helpmehelpyou</h1>
                    <p>An app where you can connect with people in your area and request help for daily tasks, or help your neighbors do theirs!</p>
                    
                <Button component={Link} to="/signup" 
                    type="submit"  
                    variant="contained"
                    style={{
                        marginTop: '10px',
                        color: '#ffffff',
                        background: '#D48883',
                        color: 'white',
                        height: '48px',
                        borderRadius: '0',
                        boxShadow: '0 0 0 0',
                        "&:hover": {
                            background: '#D48883',
                            boxShadow: '0 0 0 0',
                        }
                    }}>
                        CREATE YOUR ACCOUNT NOW!
                    </Button>
                
                </Grid>
            </Grid>
            <Grid item style={{marginTop:'50px', fontSize:'24px'}}><h1>HOW DOES IT WORK?</h1></Grid>
            <Grid container style={{marginTop:'70px'}}>
                <Grid item 
                        xs={11} sm={8} md={5} 
                        style={{            
                            padding: '50px 80px 80px 80px',
                            height: '550px',
                            marginTop: '50px'
                        }} 
                    elevation={0} square>
                    <h2>ASK FOR HELP</h2>
                    <p>Sign up and fill your personal information to create your profile.</p>
                </Grid>
                <Grid item xs={5} sm={5} md={7}>
                <img 
                    style={{marginTop:"-100px", marginLeft:'100px'}}
                    src="https://cdn.discordapp.com/attachments/784159930029703189/784776212613562398/setup.png" />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={11} sm={8} md={5} >
                <img 
                    style={{marginTop:"-100px"}}
                    src="https://cdn.discordapp.com/attachments/784159930029703189/784776203970019348/askhelp.png" />
                </Grid>
                <Grid item 
                         xs={5} sm={5} md={7}
                        style={{            
                            padding: '50px 80px 80px 80px',
                            height: '550px',
                            marginTop: '50px'
                        }} 
                    elevation={0} square>
                    <h2>SET UP YOUR ACCOUNT</h2>
                    <p>Create a post in the virtual bulletin board asking for help for a task.</p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item 
                        xs={11} sm={8} md={5} 
                        style={{            
                            padding: '50px 80px 80px 80px',
                            height: '550px',
                        }} 
                    elevation={0} square>
                    <h2>HELP PEOPLE AROUND YOU</h2>
                    <p>Check the bulletin board for other people's request in your area and give them a helping hand!</p>
                </Grid>
                <Grid item xs={5} sm={5} md={7}>
                <img 
                    style={{marginTop:"-100px", marginLeft:'100px'}}
                    src="https://cdn.discordapp.com/attachments/784159930029703189/784776207194652713/handshake.png" />
                </Grid>
            </Grid>
        </Grid>
    )
}   