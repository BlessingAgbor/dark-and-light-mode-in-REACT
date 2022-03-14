import React, {useState} from 'react';
// import Card2 from './Components/Card2';
// import Card from './Components/Card2'
// note tht our whle app shoulded be parenting all other components so it can be globally acceceptible 
import { ThemeProvider } from 'styled-components';
import Homescreen from './Components/Homescreen';

const lightTheme= {
  pageBackground: "#fff",
  color:"#1d2029",
  topBackground: "#e4f7f2",
  cardBackground: "#d1eaf6",
  butt: "#1d2029",
  hoverBackground: "#022153",
  hoverColor: "white"



}
const darkTheme= {
  pageBackground: "#1d2029",
  topBackground: "#242d36be",
  color: "#fff",
  cardBackground: " #022153",
  butt:"#fff",
  hoverBackground: "#d1eaf6",
  hoverColor: "black"


}

const themes={
  light:lightTheme,
  dark: darkTheme
}

function App () {
  const [theme, setTheme]= useState("light")
  return (
    <ThemeProvider
    theme={themes[theme]}
    >
      <Homescreen theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
};

export default App;
