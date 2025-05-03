import Image from 'next/image'
import React from 'react'

interface IExperienceCard {
  experienceData: {
    "companyName": string,
    "logo"?: string,
    "roles":
    {
      "roleName": string,
      "startDate": string,
      "endDate": string
    }[]
  }
}

const ExperienceCard = ({ experienceData }: IExperienceCard) => {
  const { companyName, logo, roles } = experienceData;

  return (
    <div className='experience-card-wrapper'>
      <div className='company-logo'>
        <img src={logo} alt={`${companyName} logo`} />
      </div>
      <div className='experience-info'>
        <h2 className='company-name'> {companyName} </h2>
        <div className='roles-container'>
          {
            roles.map((role) => (
              <div key={role.roleName} >
                <p className='role-name'>{role.roleName} </p>
                <p className='duration'> {role.startDate} - {role.endDate} </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard;