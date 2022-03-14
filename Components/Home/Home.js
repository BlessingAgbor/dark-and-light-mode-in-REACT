import React from "react";
import Outline from "../OutLine/Outline";
import OverView from "../OverView/OverView";
import TopStart from "../TopComp/TopStart";

const Home = ({ theme, setTheme }) => {
  return (
    <div>
      <TopStart theme={theme} setTheme={setTheme} />
      <Outline theme={theme} setTheme={setTheme} />
      <OverView theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default Home;
