import { makeStyles, Box, Divider } from '@material-ui/core'
import { CalendarToday, DateRange, Person, Work } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    marginBottom: "50px"
  },
  current: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    display: "inline-block",
    borderRadius: "4px",
    padding: "0px 10px"
  },
  label: {
    flex: 1,
    // color: "#000",
    fontWeight: "bold"
  },
  value: {
    flex: 3,
    [theme.breakpoints.down('sm')]: {
      flex: 1,
    },
    [theme.breakpoints.between('sm', "md")]: {
      flex: 2,
    },
  },
  row: {
    display: "flex",
    padding: "5px"
  }
}))

const PersonalDetails = () => {
  const classes = useStyles();

  const personalDetailsContent = [{
    label: "Date of Birth:",
    value: "24-09-1999"
  }, {
    label: "Father’s Name:",
    value: "Jayaraj J"
  },{
    label: "Mother’s Name:",
    value: "Jansi Rani J"
  }, {
    label: "Gender:",
    value: "Male"
  },{
    label: "Nationality:",
    value: "Indian"
  }, {
    label: "Language:",
    value: "Tamil, English"
  },{
    label: "Hometown:",
    value: "Coimbatore"
  }, {
    label: "Mobility:",
    value: "Willing to relocate anywhere in India or abroad"
  }, {
    label: "Hobbies:",
    value: "Reading newsfeed, surfing, listening music"
  }]

  return (
    <Box width="100%">
      <Box className={classes.mainTitle}>
        <Person color="primary" fontSize="large" />
        <Box ml="15px">
          Personal Details  
        </Box>
      </Box>
      {personalDetailsContent.map((each, index) => {

        const { label, value } = each;

        return (
          <Box key={index} className={classes.row}>
            <Box className={classes.label}>
              {label}
            </Box>
            <Box className={classes.value}>
              {value}
            </Box>
            {/* <Box flex={4} /> */}
          </Box>
        )
      })}
    </Box>
  )
}

export default PersonalDetails
