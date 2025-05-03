import React from 'react'
import experiencesData from './data/experiences.json'
import ExperienceCard from './components/ExperienceCard'

const Experience = () => {
  const ExperiencesElements = experiencesData.map(experienceData => (
    <ExperienceCard experienceData={experienceData} />
  ))

  return (
    <div className='experiences-wrapper'>
        <h2>Experiences</h2>
        {ExperiencesElements}
    </div>
  )
}

export default Experience;