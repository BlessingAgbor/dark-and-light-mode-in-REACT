import React from "react";
import styled from 'styled-components'
import{FaToggleOff, FaToggleOn} from 'react-icons/fa'
// import Toogle  from  './image/toogle.png'
import Card from './Cards'
import Card2 from './Card2'
import face from './image/icon-facebook.svg'
import inst from './image/icon-instagram.svg'
import tweet from './image/icon-twitter.svg'
import tube from './image/icon-youtube.svg'
import up from './image/icon-up.svg'

// import tube from './image/icon-youtube.svg'
import down from './image/icon-down.svg'
// logo, logoText, big, small, bottomImg, bottomText, bottomColor, top

const Homescreen= (props)=> {

    const changeTheme=()=> {
        if (props.theme === "light") {
           props.setTheme('dark')
        }else{
            props.setTheme('light')
        }
    }
    const iconSwitch= props.theme === "light" ? (
        <FaToggleOff fontSize="35px" width="30px" />
    ) : (
        <FaToggleOn fontSize="35px"
        size="45px" />

    ); 
    return(
        <Container>
            <Contain>
                <Wraper >
                    <Top>
                    <Left>
                    <First>Social Media Dashboard</First>
                    <Second>Total followers: 23,000.004</Second>
                    </Left>
                    <ButtSmall onClick={changeTheme} >
                       <D>Dark Mode</D> <ButtCircle>{iconSwitch}</ButtCircle>
                    </ButtSmall>
                    </Top>

                <CardHold>

                
                <Card 
                    logo={face}
                    logoText="@nathanf"
                    big= "1987"
                    small = "FOLLOWERS"
                    bottomImg={up}
                    bottomText="12 Today"
                    bottomColor="green"
                    top="3px solid blue"
                    /> 
                       <Card 
                    logo={tweet}
                    logoText="@nathanf"
                    big= "1044"
                    small = "FOLLOWERS"
                    bottomImg={up}
                    bottomText="99 Today"
                    bottomColor="green"
                    top="3px solid blue"
                    />   
                      <Card 
                    logo={inst}
                    logoText="@nathanf"
                    big= "11k"
                    small = "FOLLOWERS"
                    bottomImg={up}
                    bottomText="1099 Today"
                    bottomColor="green"
                    top="3px solid #af28a4"
                    /> 
                    <Card 
                    logo={tube}
                    logoText="@nathanf"
                    big= "8239"
                    small = "FOLLOWERS"
                    bottomImg={down}
                    bottomText="144 Today"
                    bottomColor="red"
                    top="3px solid #9e0404"
                    />  

                </CardHold>              

                <CardHold2>

                <Up>Overview - Today</Up>
                <Cards>
                <Card2 
                    logo={face}
                    logoText="Page Views"
                    big= "87"
                    bottomImg={up}
                    bottomText="3%"
                    bottomColor="green"
                    />  

                    <Card2 
                    logo={face}
                    logoText="Likes"
                    big= "52"
                    bottomImg={up}
                    bottomText="2%"
                    bottomColor="red"
                    />   
                    <Card2 
                    logo={inst}
                    logoText="Page Views"
                    big= "5462"
                    bottomImg={up}
                    bottomText="2257%"
                    bottomColor="green"
                    />   
                    <Card2 
                    logo={inst}
                    logoText="Page Views"
                    big= "52k"
                    bottomImg={up}
                    bottomText="1375%"
                    bottomColor="green"
                    />  
                </Cards>

                <Cards>
                    
                <Card2 
                    logo={tweet}
                    logoText="Page Views"
                    big= "117"
                    bottomImg={up}
                    bottomText="303%"
                    bottomColor="green"
                    /> 
                     <Card2 
                    logo={tweet}
                    logoText="Page Views"
                    big= "507"
                    bottomImg={up}
                    bottomText="553%"
                    bottomColor="green"
                    /> 
                     <Card2 
                    logo={tube}
                    logoText="Page Views"
                    big= "87"
                    bottomImg={up}
                    bottomText="3%"
                    bottomColor="green"
                    /> 
                     <Card2 
                    logo={tube}
                    logoText="Page Views"
                    big= "107"
                    bottomImg={up}
                    bottomText="19%"
                    bottomColor="green"
                    /> 
                </Cards>
                </CardHold2>

                </Wraper>
            </Contain>
        </Container>
    )
}

export default Homescreen
const Container=styled.div`
width: 100%;
display: flex;
min-height: 150vh;
height: 100%;
position: relative;
background: ${props =>  props.theme.pageBackground};
transition: all 500ms;

justify-content: center;

`
const Contain=styled.div`
width:100%;
max-height:200px;
/* height: 100%; */
position: absolute;
display: flex;
justify-content: center;
flex-wrap: wrap;
transition: all 500ms;

padding-top: 30px;
border-radius: 5px;
background-color: ${(props) => props.theme.topBackground};

/* background: #e5f1f5; */
`
const Wraper=styled.div`
width: 90%;
min-height: 200vh;

height: 100%;


/* position: absolute; */
justify-content:center;
flex-direction: column;
flex-wrap: wrap;
/* background: red; */

`

const Top=styled.div`
width: 100%;
display: flex;
transition: all 500ms;

/* margin-top: 80px; */
/* height: 100px; */
justify-content: space-between;
/* position: absolute; */

`
const Left=styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const First=styled.div`
font-size: 30px;
transition: all 500ms;
font-weight:700;
color: ${(props) => props.theme.color};

`
const Second=styled.div`
color: grey;
font-size: 17px;
font-weight: 700;

`
const ButtSmall =styled.div`
width: 170px;
height: 30px;
display: flex;
/* background: red; */
align-items: center;
justify-content: space-between;
/* border-radius:20px;
background: grey; */

`

const ButtCircle=styled.div`
display: flex;
justify-content:center;
align-items: center;
cursor: pointer;
color: ${(props) => props.theme.butt};


`
const CardHold= styled.div`
width: 100%;
display: flex;
margin-top: 40px;
flex-direction: row;
transition: all 500ms;

flex-wrap: wrap;
justify-content:space-between;
/* margin-bottom: 80px; */

`

const CardHold2=styled.div`
width: 100%;
display: flex;
margin-top: 80px;
transition: all 500ms;
flex-direction: column;
justify-content:space-between;
flex-wrap: wrap;
`

const Cards=styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-bottom: 30px;
justify-content:space-between;
`
const Up=styled.div`
color: grey;
font-weight: 600;
font-size: 25px;
margin-bottom: 20px;

`
const D=styled.div`
color: grey;
font-size: 16px;
font-weight: 700;

`




// const Container=styled.div``
// const Container=styled.div``