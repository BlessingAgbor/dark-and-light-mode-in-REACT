import React from "react";
import styled from 'styled-components'


const Card2 = ({logo, logoText, big, bottomImg, bottomText, bottomColor}) => {
    return(
        <Container >
            <Wrapper>
                <Top>
                    <Text>{logoText}</Text>
                   <Imag src= {logo}/>

                </Top>
              <Second>
              <Big>{big}</Big>
                <Bottom>
                    <Img src={bottomImg} />
                    <H6
                    style={{
                        color: bottomColor

                    }}
                    >{bottomText}</H6>
                </Bottom>
              </Second>
            </Wrapper>
        </Container>
    )
}

export default Card2
const Container= styled.div`
width: 270px;
height: 130px;
background-color: ${(props) => props.theme.cardBackground};
transition: all 500ms;
color: ${(props) => props.theme.color};

cursor: pointer;
:hover{
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
background-color: ${(props) => props.theme.hoverBackground};
color: ${(props) => props.theme.hoverColor};
/* color: ${(props) => props.theme.color}; */


transition: all 500ms;

}
display: flex;
flex-direction: column;

justify-content: center;
transition: all 500ms;
align-items: center;
border-radius: 5px;
`
const Wrapper= styled.div`
width:80%;
display: flex;
justify-content: center;
align-items: center;

height: 100%;
/* background: red; */
flex-direction:column;
`

const Top= styled.div`
font-size: 15px;
font-weight:400;
width: 100%;
display: flex;
margin-bottom: 5px;
justify-content: space-between;
flex-direction: row;
/* background: green; */
`
const Text= styled.div`
color: grey;
font-size: 15px;
font-weight: 700;
`
const Imag= styled.img`
height: 25px;

`
const Second= styled.div`
width: 100%;
display: flex;
justify-content: space-between;
/* background: yellow; */
flex-direction:row;
`
const Big= styled.div`
font-size: 35px;

font-weight: 500;

`
const Bottom= styled.div`
width: 20%;
/* background: blue; */
align-items: center;
display: flex;
justify-content:space-between
`
const Img= styled.img`
height:8px;
width: 8px;
`
const H6= styled.div`

`
// const Wrapper= styled.div`

// `
// const Wrapper= styled.div`

// `
// const Wrapper= styled.div`

// `


