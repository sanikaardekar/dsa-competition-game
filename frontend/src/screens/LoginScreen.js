import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import background from '../images/background.jpg';
// import { Link } from 'react-router-dom';
import login from '../actions/userAction';
import LoginGoogle from '../components/LoginGoogle';
import LoginGithub from '../components/LoginGithub';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  //  const userLogin = useSelector((state) => state.userLogin);
  //  const { loading, error, userInfo } = userLogin;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== undefined || password !== undefined) {
      console.log(name, password);
      dispatch(login(name, password));
    }
  };
  const useStyles = makeStyles(() => ({
    outerGrid: {
      width: '150vw',
      height: '100vh',
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
    },
    card: {
      background: 'rgba( 84, 78, 78, 0.35 )!important',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )!important',
      backdropFilter: 'blur( 3.5px )!important',
      border: '1px solid rgba( 255, 255, 255, 0.18 )!important',
      width: '600px',
      height: '400px',
      backgroundColor: 'none!important',
      // boxShadow: "none",
    },
  }));  

  const classes = useStyles();
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.outerGrid}
    >
      <div>
        <Box
          style={{
            width: '600px',
            height: '400px',
          }}
        >
          <Card sx={{ marginLeft: '20px' }} className={classes.card}>
            <CardContent
              style={{
                width: '600px',
                height: '400px',
              }}
            >
              <Grid
                container
                style={{ gap: 20 }}
                display="flex"
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  marginTop="2px"
                  style={{ color: '#8985F2', fontWeight: '700' }}
                >
                  LOGIN
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <Grid
                    item
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <label htmlFor="name" style={{ color: 'white' }}>
                      Username
                    </label>
                    <input
                      type="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ height: '40px', width: '300px' }}
                    />
                  </Grid>
                  <Grid
                    item
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <label
                      htmlFor="password"
                      style={{ color: 'white' }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ height: '40px', width: '300px' }}
                    />
                    <Grid
                      item
                      display="flex"
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      marginLeft="60px"
                      marginTop="13px"
                    >
                      <Divider
                        style={{
                          border: '2px solid white',
                          backgroundColor: 'white',
                          width: '5vw',
                          //height:"2px"
                        }}
                      />
                      <Typography
                        style={{
                          color: 'white',
                          fontWeight: '700',
                        }}
                      >
                        OR
                      </Typography>
                      <Divider
                        style={{
                          border: '2px solid white',
                          backgroundColor: 'white',
                          width: '5vw',
                          //height:"2px"
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    marginTop="7px"
                  >
                    <Typography style={{ color: 'white' }}>
                      Login In With
                    </Typography>
                    <div style={{marginLeft:"10px", marginRight:"10px"}}>
                      <LoginGoogle />
                    </div>
                    <div>
                      <LoginGithub />
                    </div>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      background: '#8985F2',
                      borderRadius: '3.5px',
                      width: '300px',
                      height: '40px',
                      marginTop: '10px',
                    }}
                  >
                    LOGIN
                  </Button>
                </Box>
                <Typography style={{ color: 'white' }}>
                  Don't have and account?{' '}
                  <span
                    style={{ color: '#8985F2', fontWeight: '700' }}
                  >
                    Sign Up
                  </span>
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </div>
    </Grid>
  );
}

