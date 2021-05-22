import { makeStyles, Box, Divider } from '@material-ui/core'
import { Info } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    marginBottom: "30px"
  },
  role: {
    fontSize: "18px",
    fontWeight: "bolder",
    marginTop: "20px",
    marginBottom: "10px"
  },
  dateRange: {
    display: "flex",
    color: theme.palette.primary.main,
    padding: "10px 0px"
  },
  description: {
    padding: "10px 0px 30px 0px"
  },
  current: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    display: "inline-block",
    borderRadius: "4px",
    padding: "0px 10px",
    marginBottom: "10px"
  }
}))

const AboutMe = () => {
  const classes = useStyles();

  const areasOfInterest = ["Problem Solving", "Full Stack development", "Web designing"];

  const programmingLanguagesKnown = [
    "ReactJS",
    "Ruby on Rails",
    "NodeJS",
    "ExpressJS",
    "JavaScript",
    "Ruby",
    "Java",
    "C",
    "HTML",
    "CSS",
    "Bootstrap",
    "Material UI"
  ]

  const certifications = [
    "NIIT certificate for HTML5 Programming",
    "NIIT certificate for JAVA Programming"
  ]

  const keyStrengths = [
    "Ability to work independently or as part of a team",
    "Good listening skill",
    "Eager to learn new technologies",
    "Good communication and Presentation skills"
  ]

  const academicActivities = [
    <Box><b>Inceptra</b> Problem solving coding event secured <b>1 st</b> place conducted in 2018.</Box>,
    <Box>State level English Proficiency test secured <b>Distinction</b> conducted by Bharath Institute of
    English in November 2013</Box>,
    <Box>Course Completion in C and Java</Box>
  ]

  return (
    <Box>
      <Box className={classes.mainTitle}>
        <Info color="primary" fontSize="large" />
        <Box ml="15px">
          About Me
        </Box>
      </Box>
      <Box>
        Front End Software Developer
        More Interest on Web Development
        1 year of experience on reactjs development
        Intermediate knowledge on Ruby on Rails and Nodejs
        Love to learn new things
      </Box>
      <Box>
        <Box className={classes.role}>
          Areas of Interest
        </Box>
        <Box className={classes.description}>
          {areasOfInterest
            .map((each, index) => (
              <Box key={index} className={classes.current} mr="5px">{each}</Box>
            ))}
        </Box>
        <Divider />
      </Box>

      <Box>
        <Box className={classes.role}>
          Programming Languages Known
        </Box>
        <Box className={classes.description}>
          {programmingLanguagesKnown
            .map((each, index) => (
              <Box key={index} className={classes.current} mr="5px">{each}</Box>
            ))}
        </Box>
        <Divider />
      </Box>

      <Box>
        <Box className={classes.role}>
          Certifications
        </Box>
        <Box className={classes.description}>
          {certifications
            .map((each, index) => (
              <Box key={index}>{each}</Box>
            ))}
        </Box>
        <Divider />
      </Box>

      <Box>
        <Box className={classes.role}>
          Key Strengths
        </Box>
        <Box className={classes.description}>
          {keyStrengths
            .map((each, index) => (
              <Box key={index}>{each}</Box>
            ))}
        </Box>
        <Divider />
      </Box>

      <Box>
        <Box className={classes.role}>
          Academic Activities
        </Box>
        <Box className={classes.description}>
          {academicActivities
            .map((each, index) => (
              <Box key={index} m="5px">{each}</Box>
            ))}
        </Box>
        <Divider />
      </Box>
    </Box>
  )
}

export default AboutMe
