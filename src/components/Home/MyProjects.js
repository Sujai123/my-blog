import React from 'react'
import { makeStyles, Box, Divider } from '@material-ui/core'
import { AccountTree, CalendarToday, DateRange, OpenInBrowser, OpenInNew, Work } from '@material-ui/icons'
import myProjects from '../../myProjects'

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
    marginBottom: "10px",
    display: "flex",
    alignItems: "center"
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
  },
  link: {
    color: theme.palette.primary.main,
    fontSize: "15px",
    marginLeft: "5px",
    // display: "inline-block",
    display: "flex",
    textDecoration: "underline",
    cursor: "pointer"
  }
}))

const MyProjects = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.mainTitle}>
        <AccountTree color="primary" fontSize="large" />
        <Box ml="15px">
          My Projects
        </Box>
      </Box>
      {myProjects.map((each, index) => {

        const { title, year, url, description, technologyUsed } = each;

        const onClick = () => {
          window.open(url, "_blank")
        }

        return (
          <Box key={index}>
            <Box className={classes.role}>
              <Box>
                {title}
              </Box>
              <Box display="flex" onClick={onClick}>
                <Box className={classes.link}>
                  Open Project
                </Box>
                <Box className={classes.link}>
                  <OpenInNew fontSize="small" />
                </Box>
              </Box>
            </Box>
            <Box className={classes.dateRange}>
              <Box>
                <DateRange />
              </Box>
              <Box ml="15px">
                {year}
              </Box>
            </Box>
            <Box>
              {technologyUsed
              .split(",")
              .map((each, index) => (
                <Box className={classes.current} key={index} mr="5px">
                  {each}
                </Box>
              ))}
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

export default MyProjects
