import { makeStyles, Box, Divider } from '@material-ui/core'
import { CastForEducation, DateRange } from '@material-ui/icons'
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


const EducationBackGround = () => {

  const classes = useStyles();

  const educationalBackGroundContent = [{
    role: "BE Computer Science",
    percentage: "6.9 CGPA",
    fromTo: "2016 - 2020",
    description: "Sri Shakthi institute of Engineering and Technology, Coimbatore"
  }, {
    role: "12th",
    percentage: "93.33%",
    fromTo: "2016",
    description: "St Joseph Matriculation Hr Sec School, Ondipudur, Coimbatore"
  }, {
    role: "10th",
    percentage: "93.80%",
    fromTo: "2014",
    description: "St Joseph Matriculation Hr Sec School, Ondipudur, Coimbatore"
  }]

  return (
    <Box>
      <Box className={classes.mainTitle}>
        <CastForEducation color="primary" fontSize="large" />
        <Box ml="15px">
          Education
        </Box>
      </Box>
      {educationalBackGroundContent.map((each, index) => {

        const { role, fromTo, description, percentage } = each;

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
            <Box className={classes.current}>
              {percentage}
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

export default EducationBackGround
