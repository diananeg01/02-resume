import styled from 'styled-components';

const EducationCard = (props) => {
  return (
    <Container>
      <Period>{props.period}</Period>
      <Title>{props.title}</Title>
      <School>{props.school}</School>
    </Container>
  );
}

export default EducationCard;

const Container = styled.div`
  display: flex;
  padding: 21px 25px 22px 18px;
  width: 269px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  border-radius: 12px;
  border: 1px solid #515151;
  background: #FFF;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Period = styled.span`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const School = styled.span`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;