import styled from 'styled-components';

const SkillsCard = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <SkillList>{props.list}</SkillList>
    </Container>
  );
};

export default SkillsCard;

const Container = styled.div`
  display: flex;
  padding: 21px 25px 22px 18px;
  width: 269px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  border-radius: 12px;
  border: 1px solid #515151;
  background: #FFF; 
  margin: 12px 0; 
`;

const Title = styled.span`
  color: #000;
  margin-bottom: 14px;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const SkillList = styled.span`
  color: #595959;
  font-family: Source Sans Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;