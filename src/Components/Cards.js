import React from "react";
import styled from 'styled-components'

const Card = ({logo, logoText, big, small, bottomImg, bottomText, bottomColor, top}) => {
    return(
        <Container style={{
            borderTop: top
        }}
        >
            <Wrapper>
                <Top>
                   <Imag src= {logo}/>
                    <Text>{logoText}</Text>
                </Top>
                <Big>{big}</Big>
                <Small>{small}</Small>
                <Bottom>
                    <Img src={bottomImg} />
                    <H6
                    style={{
                        color: bottomColor

                    }}
                    >{bottomText}</H6>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Card

const Container = styled.div`
width: 265px;
height: 230px;
background-color: ${(props) => props.theme.cardBackground};
transition: all 500ms;
color: ${(props) => props.theme.color};
display: flex;
/* align-items: center; */
justify-content: center;
border-radius: 5px;
border-top: 3px solid blue;
cursor: pointer;
:hover{
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    background-color: ${(props) => props.theme.hoverBackground};
    transition: all 500ms;
    color: ${(props) => props.theme.hoverColor};

}

/* background-color: rgb(203, 227, 235); */
`
const Wrapper = styled.div`
width: 90%;
display: flex;
/* justify-content: center; */
align-items: center;
flex-wrap: wrap;
flex-direction: column;
/* background: chartreuse; */
`
const Top = styled.div`
width: 33%;
padding-top: 20px;
align-items: center;
color:grey;
justify-content: space-between;
/* height: 100px; */
/* background: red; */
display: flex;
`
const Imag = styled.img`
height: 15px;
`
const Text = styled.div`
font-weight: 700;
font-size: 12px;
color: ${(props) => props.theme.color};
`
const Big = styled.div`
font-size:60px;
font-weight: 600;
margin-top: 20px;
margin-bottom: 20px;

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Small = styled.div`
  letter-spacing: 6px;
font-size: 13px;
font-weight: 600;
margin-bottom: 20px;

color: grey;
`
const Bottom = styled.div`
display: flex;
padding-top: 10px;
justify-content: center;
align-items: center;
/* background: red; */
flex-direction: row;
justify-content:space-between;


`
const Img = styled.img`
height:8px;
width: 8px;
/* padding: 10px; */
`
const H6 = styled.div``
// const Bottom = styled.div``