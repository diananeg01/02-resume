import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';

const WorkExperience = () => {
  return (
    <ExperienceList>
      <Title>Work Experience</Title>
      <ExperienceCard 
        title={'Junior Fullstack Dev'} 
        period={'01 jul 2022 - current'}
        company={'Irian Software Development'}
        location={'Timisoara, RO'}
        bulletPoints={['safs', 'aFwe', 'ASFWEC']}
      />
      <ExperienceCard 
        title={'Junior Fullstack Dev'} 
        period={'01 jul 2022 - current'}
        company={'Irian Software Development'}
        location={'Timisoara, RO'}
        bulletPoints={['safs', 'aFwe', 'ASFWEC']}
      />
      <ExperienceCard 
        title={'Junior Fullstack Dev'} 
        period={'01 jul 2022 - current'}
        company={'Irian Software Development'}
        location={'Timisoara, RO'}
        bulletPoints={['safs', 'aFwe', 'ASFWEC']}
      />
    </ExperienceList>
  )
}

export default WorkExperience;

const Title = styled.span`
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 0 23px 58px;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;