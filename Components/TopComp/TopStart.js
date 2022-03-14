import React from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import styled from "styled-components";

const TopStart = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  const iconSwitch =
    props.theme === "light" ? (
      <FaToggleOff fontSize="25px" />
    ) : (
      <FaToggleOn fontSize="25px" />
    );

  return (
    <Container>
      <Wrapper>
        <SocialTitle>
          <Title>Social Media Dashboard</Title>
          <SubTitle>Total Followers 23, 004</SubTitle>
        </SocialTitle>
        <ModeSwitcher>
          <span>Dark Mode</span>
          <Swicther onClick={changeTheme}>{iconSwitch}</Swicther>
        </ModeSwitcher>
      </Wrapper>
    </Container>
  );
};

export default TopStart;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.pageBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  transition: all 500ms;
`;
const Wrapper = styled.div`
  width: 70%;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SocialTitle = styled.div``;
const Title = styled.div`
  font-size: 25px;
  font-weight: bolder;
`;
const SubTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #aeb2cb;
`;
const ModeSwitcher = styled.div`
  width: 90px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: 500;
    color: #aeb2cb;
  }
`;
const Swicther = styled.div`
  color: ${(props) => props.theme.butTog};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms;
`;
