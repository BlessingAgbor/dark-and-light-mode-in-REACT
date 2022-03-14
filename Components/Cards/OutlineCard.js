import React from "react";
import styled from "styled-components";

const OutlineCard = (props) => {
  return (
    <Container bodCol={props.bodCol}>
      <Wrapper>
        <IconTextHold>
          {props.SocialIcon}
          <span> {props.socialLink} </span>
        </IconTextHold>
        <NumberDiv> {props.folloSubNum} </NumberDiv>
        <FolloText> {props.followSub} </FolloText>
        <NewFollow nfCol={props.nfCol}>{props.numToday} Today</NewFollow>
      </Wrapper>
    </Container>
  );
};

export default OutlineCard;

const Container = styled.div`
  height: 200px;
  width: 220px;
  background-color: #f0f3fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  border-top: 3px solid ${({ bodCol }) => bodCol};
  :hover {
    background-color: #e1e3f0;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  height: 75%;
  /* background-color: bisque; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconTextHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 11px;
    font-weight: 700;
    margin-left: 5px;
    color: gray;
  }
`;
const NumberDiv = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
const FolloText = styled.div`
  font-size: 8px;
  font-weight: 400;
  margin-top: -6px;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  margin-left: 9px;
  margin-bottom: 15px;
  color: gray;
`;
const NewFollow = styled.div`
  font-size: 8px;
  font-weight: 600;
  color: ${({ nfCol }) => nfCol};
`;
