import styled from 'styled-components';
import EducationCard from './EducationCard';

const Education = () => {
  return (
    <EducationList>
      <Title>Education</Title>
      <EducationCard
        title={'Computer and Information Technology (romanian) Bachelors Degree'}
        period={'2020 - 2024'}
        school={'Politehnica University of Timisoara'}
        />
      <EducationCard
        title={'Mathematics - Informatics intensive English'}
        period={'2016 - 2020'}
        school={'"Gheorghe Vranceanu" National College Bacau'}
        />
    </EducationList>
  );
};

export default Education;

const Title = styled.span`
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 50px;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;