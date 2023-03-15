import styled from '@emotion/styled';

const StyledHome = styled.div`
  text-align: center;
  /* color: #fff; */
  color: #007aff;
  padding: 50px;

  h1 {
    font-size: 4em;
    font-weight: bold;
  }

  p {
    font-size: 1.5em;
    font-style: italic;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <h1>Welcome to PHONEBOOK</h1>
      <p>The best way to keep track of your contacts</p>
    </StyledHome>
  );
};

export default Home;
