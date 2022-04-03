import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import background from "../images/background.jpg";
import { makeStyles } from "@mui/styles";

export default function LoginScreen() {
  const classes = useStyles();
  return (
    <>
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
              width: "600px",
              height: "400px",
            }}
          >
            <Card sx={{ marginLeft: "20px" }} className={classes.card}>
              <CardContent
                style={{
                  width: "600px",
                  height: "400px",
                }}
              >
                <Grid
                  container
                  style={{ gap: 25 }}
                  display="flex"
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography marginTop="2px" style={{ color: "#8985F2" }}>
                    LOGIN
                  </Typography>
                  <Grid
                    conatiner
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <label for="name" style={{color:"white"}}>Username</label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      style={{ height: "40px", width: "300px" }}
                    />
                  </Grid>
                  <Grid
                    conatiner
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <label for="password" style={{color:"white"}}>Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      style={{ height: "40px", width: "300px" }}
                    />
                  </Grid>
                  <Button
                    variant="contained"
                    style={{
                      background: "#8985F2",
                      borderRadius: "3.5px",
                      width: "300px",
                      height: "40px",
                      marginTop:"20px"
                    }}
                  >
                    LOGIN
                  </Button>
                  <Typography style={{color:"white"}}>
                    Don't have and account?{" "}
                    <span style={{ color: "#8985F2" }}>Sign Up</span>
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </div>
      </Grid>
    </>
  );
}

const useStyles = makeStyles(() => ({
  outerGrid: {
    width: "150vw",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  },
  card: {
    background: "rgba( 84, 78, 78, 0.35 )!important",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )!important",
    backdropFilter: "blur( 3.5px )!important",

    border: "1px solid rgba( 255, 255, 255, 0.18 )!important",
    width: "600px",
    height: "400px",
    backgroundColor: "none!important",
    // boxShadow: "none",
  },
}));