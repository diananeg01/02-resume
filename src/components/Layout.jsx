import styled from 'styled-components';

const Layout = (props) => {
  return (
    <Background>
      <Page>
        {props.children}
      </Page>
    </Background>
  )
}

export default Layout;

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  background: #FCFCFC;
`;

const Page = styled.div`
  width: 769px;
  min-height: 1247px;
  margin: 80px 58.5px 74px 88.5px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #F4F4F4;
  box-shadow: 24px 20px 0px 0px #FFE975;
`;
