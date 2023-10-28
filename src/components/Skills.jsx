import styled from 'styled-components';
import SkillsCard from './SkillsCard';

const Skills = () => {
  return (
    <SkillsList>
      <Title>Skills</Title>
      <SkillsCard 
        title={'skill1'}
        list={'list1'}
      />
      <SkillsCard
        title={'skill1'}
        list={'list1'}
      />
      <SkillsCard
        title={'skill1'}
        list={'list1'} 
      />
    </SkillsList>
  );
};

export default Skills;

const Title = styled.span`
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 45px 0 23px 58px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
`;