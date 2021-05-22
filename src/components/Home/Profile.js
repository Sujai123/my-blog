import { Box, Divider, LinearProgress, makeStyles } from '@material-ui/core'
import { Extension, Home, Mail, Work } from '@material-ui/icons'
import React from 'react'
import {ReactComponent as Logo} from "../../images/blog-logo.svg";

const useStyles = makeStyles(theme => ({
  container: {
    // margin: "10px",
    width: "100%"
  },
  row: {
    display: "flex",
    padding: "5px"
  },
  eachRowText: {
    marginLeft: "15px",
    color: "#757575"
  },
  header: {
    padding: "10px 5px 10px",
    display: "flex"
  },
  headerText: {
    fontSize: "18px",
    color: "#757575",
    marginLeft: "15px",
    fontWeight: "bold"
  },
  skills: {
    padding: "5px"
  },
  skillsSlider: {
    padding: "20px 0px"
  },
  name: {
    position: "absolute",
    top: "120px",
    color: "#fff",
    fontWeight: "400",
    fontSize: "30px",
    left: "15px"
  },
  profileContainer: {
    display: "block",
    [theme.breakpoints.down('sm')]: {
      display: "block",
    },
    [theme.breakpoints.up('sm')]: {
      display: "flex",
    },
    [theme.breakpoints.up('md')]: {
      display: "flex",
    },
    [theme.breakpoints.up('lg')]: {
      display: "block",
    }
  }
}));

const Profile = () => {

  const classes = useStyles();

  const basicDetails = [{
    label: "Front end Developer",
    svg: <Work color="primary" />
  }, {
    label: "Coimbatore, Tamilnadu",
    svg: <Home color="primary" />
  }, {
    label: "sujaibeniks001@gmail.com",
    svg: <Mail color="primary" />
  }];

  const skillsDetails = [{
    label: "React JS",
    value: 90
  },
  {
    label: "Ruby on Rails",
    value: 80
  }, {
    label: "Node JS",
    value: 70
  },
  {
    label: "Java Script",
    value: 60
  }, {
    label: "JAVA",
    value: 50
  }, {
    label: "C++",
    value: 40
  }, {
    label: "C",
    value: 30
  }];

  return (
    <Box className={classes.profileContainer} >
      <Box>
      <Box>
        <Box width="100%" height="100%" style={{filter: "brightness(0.9)"}}>
          <Logo />
        </Box>
        <Box className={classes.name}>Sujai Beniks J</Box>
      </Box>
      <Box className={classes.container}>
        <Box margin="10px">
        {basicDetails.map((eachRow, index) => {
          return (
            <Box className={classes.row} key={index}>
              <Box>
                {eachRow.svg}
              </Box>
              <Box className={classes.eachRowText}>
                {eachRow.label}
              </Box>
            </Box>
          )
        })}
        </Box>
        <Divider />
        </Box>
        </Box>
        <Box className={classes.container}>
        <Box margin="10px">
        <Box className={classes.header}>
          <Box>
            <Extension color="primary" />
          </Box>
          <Box className={classes.headerText}>
            Skills
          </Box>
        </Box>
        {skillsDetails.map((eachRow, index) => {
          return (
            <Box className={classes.skills} key={index}>
              <Box>
                {eachRow.label}
              </Box>
              <Box className={classes.skillsSlider}>
                <LinearProgress variant="determinate" value={eachRow.value} />
              </Box>
            </Box>
          )
        })}
        </Box>
      </Box>
    </Box>
  )
}

export default Profile
