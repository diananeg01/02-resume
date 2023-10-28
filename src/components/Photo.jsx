import styled from 'styled-components';

const Photo = () => {
  return (
    <div>
      <PersonalPhoto src="../src/Untitled.png" />
    </div>
  );

};

export default Photo;

const PersonalPhoto = styled.img`
  width: 213px;
  height: 213px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #000;
  background: #FFF;
  box-shadow: 15px 15px 0px 0px #928CF8;
  margin-top: -25px;
`;