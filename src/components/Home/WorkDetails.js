import { Box } from '@material-ui/core'
import React from 'react'
import Header from '../Header'
import AboutMe from './AboutMe'
import EducationBackGround from './EducationBackGround'
import MyProjects from './MyProjects'
import PersonalDetails from './PersonalDetails'
import WorkExperience from './WorkExperience'

const WorkDetails = () => {
  return (
    <Box>
      <Header
        headerContent={[{
          label: "Work Experience",
          content: <WorkExperience />
        }, {
          label: "About Me",
          content: <AboutMe />
        },{
          label: "My Projects",
          content: <MyProjects />
        },{
          label: "Education Background",
          content: <EducationBackGround />
        },{
          label: "Personal Details",
          content: <PersonalDetails />
        },
      ]}
      />
    </Box>
  )
}

export default WorkDetails
