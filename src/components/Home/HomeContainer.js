import React from 'react'
import { Box, makeStyles } from "@material-ui/core";
import styles from "./home.module.css"
import Profile from './Profile';
import { Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter } from '@material-ui/icons';
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
  },
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down('md')]: {
      display: "block",
    },
    [theme.breakpoints.up('md')]: {
      display: "block",
    },
    [theme.breakpoints.up('lg')]: {
      display: "flex",
    }
}
}))

const HomeContainer = () => {

  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.container}>
        <Box className={classes.profile}>
          <Profile />
        </Box>
        <Box className={classes.experience}>
          <WorkDetails />
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Box>
          Find me on Social media
          </Box>
        <Box>
        <Box component="a" href="https://m.facebook.com/sujai.beniks.5" target="_blank">
            <Facebook color="secondary" />
          </Box>
          <Box component="a" href="https://www.instagram.com/__silent___eyes____/" target="_blank">
            <Instagram color="secondary" />
          </Box>
          <Box component="a" href="mailto:sujaibeniks001@gmail.com">
            <Mail color="secondary" />
          </Box>
          <Box component="a" href="https://www.linkedin.com/mwlite/in/sujai-beniks-j-89693616b" target="_blank">
            <LinkedIn color="secondary" />
          </Box>
          <Box component="a" href="https://github.com/Sujai123/" target="_blank">
            <GitHub color="secondary" />
          </Box>
          <Box component="a" href="https://mobile.twitter.com/sujai_beniks" target="_blank">
            <Twitter color="secondary" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeContainer
