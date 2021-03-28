import { makeStyles, Box, Divider } from '@material-ui/core'
import { CalendarToday, DateRange, Work } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    fontSize: "30px",
    display: "flex",
    alignItems: "center"
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
    padding: "0px 10px"
  }
}))

const WorkExperience = () => {

  const classes = useStyles();

  const workExperienceContent = [{
    role: "Rently - Front end developer",
    fromTo: <Box>Aug 2020 - <Box className={classes.current}>Current</Box></Box>,
    description: "Got converted from Intern to Frontend Software Developer and get well versed on that field started learning Ruby on rails and work as an backend developer and that makes me a complete full stack developer"
  }, {
    role: "Rently - Intern",
    fromTo: "Aug 2019 - Aug 2020",
    description: "Got placed through Sri Shakthi College Placement conducted in 2019 and started carrier as an Intern or Junior Software Development in Rently software Development Pvt td"
  }]

  return (
    <Box>
      <Box className={classes.mainTitle}>
        <Work color="primary" fontSize="large" />
        <Box ml="15px">
          Work Experience
        </Box>
      </Box>
      {workExperienceContent.map((each, index) => {

        const {role, fromTo, description} = each;

        return (
          <Box key={index}>
            <Box className={classes.role}>
              {role}
            </Box>
            <Box className={classes.dateRange}>
              <Box>
                <DateRange />
              </Box>
              <Box ml="15px">
                {fromTo}
            </Box>
            </Box>
            <Box className={classes.description}>
              {description}
            </Box>
            <Divider />
          </Box>
        )
      })}
    </Box>
  )
}

export default WorkExperience
