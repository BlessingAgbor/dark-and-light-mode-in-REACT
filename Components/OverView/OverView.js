import React from "react";
import styled from "styled-components";
import OverviewCard from "../Cards/OverviewCard";

const OverView = () => {
  return (
    <Container>
      <Over>OverView - Today</Over>
      <Wrapper>
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </Wrapper>
    </Container>
  );
};

export default OverView;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 500ms;
`;

const Over = styled.div`
  font-size: 23px;
  font-weight: bold;
  font-family: poppins;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0;
`;
