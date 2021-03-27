import React from 'react'
import { Box, makeStyles } from "@material-ui/core";
import styles from "./home.module.css"
import Profile from './Profile';
import { Facebook, GitHub, Instagram, LinkedIn, Mail } from '@material-ui/icons';
import WorkDetails from './WorkDetails';

const useStyles = makeStyles(theme => ({
  profile: {
    flex: 1,
    margin: "10px",
    background: "#FFFFFF"
  },
  experience: {
    flex: 3,
    margin: "10px",
    backgroundColor: "#FFFFFF"
  },
  footer: {
    width: "100%",
    height: "100px",
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
    color: "#ffffff"
  }
}))

const HomeContainer = () => {

  const classes = useStyles();

  return (
    <Box>
      <Box className={styles.container}>
        <Box className={classes.profile}>
          <Profile />
        </Box>
        <Box className={classes.experience}>
          <WorkDetails />
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Box>
          Fnd me on Social media
          </Box>
        <Box>
          <Box component="a" href="https://github.com/Sujai123/" target="_blank">
            <Instagram color="secondary" />
          </Box>
          <Box component="a" href="https://github.com/Sujai123/" target="_blank">
            <Mail color="secondary" />
          </Box>
          <Box component="a" href="https://github.com/Sujai123/" target="_blank">
            <LinkedIn color="secondary" />
          </Box>
          <Box component="a" href="https://github.com/Sujai123/" target="_blank">
            <GitHub color="secondary" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeContainer
