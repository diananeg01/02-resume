import styled from 'styled-components';

const Hobby = () => {
  return (
    <Container>
      <Title>Hobby</Title>
      <HobbiesList>Photo / Video / Walking</HobbiesList>
    </Container>
  );
};

export default Hobby;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0 23px 58px;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 18px */
`;

const HobbiesList = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
`;