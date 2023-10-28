import styled from 'styled-components';

const ExperienceCard = (props) => {
  return (
    <Container>
      <SpacedColumn>
        <Title>{props.title}</Title>
        <Period>{props.period}</Period>
      </SpacedColumn>
      <SpacedColumn>
        <Company> 
          <CompanyLogo src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"/> {props.company}
        </Company>
        <Location>{props.location}</Location>
      </SpacedColumn>
      <ul style={{columns:2}}>
        {props.bulletPoints.map(point => (
          <BulletPoint>{point}</BulletPoint>
        ))}
      </ul>
    </Container>
  )
}

export default ExperienceCard;

const Container = styled.div`
  display: flex;
  width: 370px;
  padding: 31px 25px 11px 26px;
  margin: 0 0 40px -26px;
  flex-direction: column;
  flex-shrink: 0;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid #000;
  background: #FFF;
  box-shadow: 15px 15px 0px 0px #3DC39B;
`;

const SpacedColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Period = styled.span`
  color: #595959;
  text-align: right;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const Company = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const CompanyLogo = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

const Location = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BulletPoint = styled.li`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;