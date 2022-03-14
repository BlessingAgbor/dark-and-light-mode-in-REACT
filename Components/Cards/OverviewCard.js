import React from "react";
import { BsFacebook } from "react-icons/bs";
import styled from "styled-components";

const OverviewCard = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Txt>Likes</Txt>
          <BsFacebook />
        </Top>
        <Buttom>
          <Numm>52</Numm>
          <Cent>2%</Cent>
        </Buttom>
      </Wrapper>
    </Container>
  );
};

export default OverviewCard;

const Container = styled.div`
  height: 80px;
  width: 220px;
  background-color: #f0f3fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 80%;
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Txt = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Numm = styled.div`
  font-size: 25px;
  font-weight: 600;
`;
const Cent = styled.div`
  font-size: 10px;
  color: green;
`;
