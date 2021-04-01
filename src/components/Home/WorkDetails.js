import { Accordion, AccordionDetails, AccordionSummary, Box, Hidden, makeStyles, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import React from 'react'
import Header from '../Header'
import AboutMe from './AboutMe'
import EducationBackGround from './EducationBackGround'
import MyProjects from './MyProjects'
import PersonalDetails from './PersonalDetails'
import WorkExperience from './WorkExperience'

const useStyles = makeStyles(theme => ({
  heading: {

  }
}))

const WorkDetails = () => {

  const classes = useStyles();

  return (
    <Box>
      <Hidden smDown>
        <Header
          headerContent={[{
            label: "Work Experience",
            content: <WorkExperience />
          }, {
            label: "About Me",
            content: <AboutMe />
          }, {
            label: "My Projects",
            content: <MyProjects />
          }, {
            label: "Education Background",
            content: <EducationBackGround />
          }, {
            label: "Personal Details",
            content: <PersonalDetails />
          },
          ]}
        />

      </Hidden>

      <Hidden mdUp>
        {[{
          title: "Work Experience",
          content: <WorkExperience />
        }, {
          title: "About Me",
          content: <AboutMe />
        }, {
          title: "My Projects",
          content: <MyProjects />
        }, {
          title: "Education Background",
          content: <EducationBackGround />
        }, {
          title: "Personal Details",
          content: <PersonalDetails />
        }].map((each, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{each.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {each.content}
            </AccordionDetails>
          </Accordion>
        ))}
      </Hidden>
    </Box>
  )
}

export default WorkDetails
