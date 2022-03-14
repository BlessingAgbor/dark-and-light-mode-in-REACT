import React from "react";
import styled from "styled-components";
import OutlineCard from "../Cards/OutlineCard";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Outline = () => {
  return (
    <Container>
      <Wrapper>
        <OutlineCard
          bodCol={"#2E89D2"}
          SocialIcon={<BsFacebook color="#4267B2" />}
          socialLink="@olorunda"
          folloSubNum="1044"
          followSub="followers"
          nfCol="#35A386"
          numToday="90"
        />
        <OutlineCard
          bodCol={"#1DA1F3"}
          SocialIcon={<BsTwitter color="#1DA1F2" />}
          socialLink="@olorunda"
          folloSubNum="1987"
          followSub="followers"
          nfCol="#35A386"
          numToday="12"
        />
        <OutlineCard
          bodCol={"#EB7F7D"}
          SocialIcon={<BsInstagram color="#E3618D" />}
          socialLink="@olorunda"
          folloSubNum="11k"
          followSub="followers"
          nfCol="#35A386"
          numToday="1099"
        />
        <OutlineCard
          bodCol={"#C30028"}
          SocialIcon={<BsYoutube color="#FF0000" />}
          socialLink="S. O. Olorunda"
          folloSubNum="8239"
          followSub="subscribers"
          nfCol="#B04C54"
          numToday="144"
        />
      </Wrapper>
    </Container>
  );
};

export default Outline;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 500ms;
`;
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  flex-wrap: wrap;
`;
