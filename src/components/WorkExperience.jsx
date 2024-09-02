import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';

const WorkExperience = () => {
  return (
    <ExperienceList>
      <Title>Work Experience</Title>
      <ExperienceCard 
        title={'Junior Fullstack Dev'} 
        period={'01 jul 2022 - present'}
        company={'Irian Software Development'}
        location={'Timisoara, RO'}
        bulletPoints={['Worked mostly with Angular and Java technologies', 'Been on diverse projects']}
      />
      <ExperienceCard 
        title={'AC LABS Participant'} 
        period={'spring 2022, spring 2023, spring 2024 '}
        company={'Irian Software Development, Bitdefender, Arnia'}
        location={'Timisoara, RO'}
        bulletPoints={['Been a participant to workshops developed by companies, approaching themes like Angular and Java, Python, React and AWS']}
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