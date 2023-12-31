import React, { useState, CSSProperties, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";
import Red from "./Red";
import Orange from "./Orange";
import Yellow from "./Yellow";
import Green from "./Green";
import Blue from "./Blue";
import Purple from "./Purple";
import Black from "./Black";
import White from "./White";
import Grey from "./Grey";
import Start from "./Start";
import End from "./End";

import styles from "../style/animation.module.css";

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style, color, metaData }) => (
    <animated.div style={{ ...style }}>
      <Start urls={color["red"]}> </Start>
    </animated.div>
  ),
  ({ style, color, metaData, backOne }) => (
    <animated.div style={{ ...style }}>
      <Red urls={color["red"]} metaData={metaData} backOne={backOne}>
        {" "}
      </Red>
    </animated.div>
  ),
  ({ style, color, metaData, backOne }) => (
    <animated.div style={{ ...style }}>
      <Orange urls={color["orange"]} metaData={metaData} backOne={backOne}>
        {" "}
      </Orange>
    </animated.div>
  ),
  ({ style, color, metaData, backOne }) => (
    <animated.div style={{ ...style }}>
      <Yellow urls={color["yellow"]} metaData={metaData} backOne={backOne}>
        {" "}
      </Yellow>
    </animated.div>
  ),
  ({ style, color, metaData, backOne }) => (
    <animated.div style={{ ...style }}>
      <Green urls={color["green"]} metaData={metaData} backOne={backOne}>
        {" "}
      </Green>
    </animated.div>
  ),
  ({ style, color, metaData, backOne }) => (
    <animated.div style={{ ...style }}>
      <Blue urls={color["blue"]} metaData={metaData} backOne={backOne}>
        {" "}
      </Blue>
    </animated.div>
  ),
  ({ style, color, metaData, backOne }) => (
    <animated.div style={{ ...style }}>
      <Purple urls={color["purple"]} metaData={metaData} backOne={backOne}>
        {" "}
      </Purple>
    </animated.div>
  ),
  // ({ style, color, backOne }) => (
  //   <animated.div style={{ ...style }}>
  //     <Black urls={color["black"]}> </Black>
  //   </animated.div>
  // ),
  // ({ style, color, backOne }) => (
  //   <animated.div style={{ ...style }}>
  //     <Grey urls={color["grey"]}> </Grey>
  //   </animated.div>
  // ),
  // ({ style, color, backOne }) => (
  //   <animated.div style={{ ...style }}>
  //     <White urls={color["white"]}> </White>
  //   </animated.div>
  // ),
  ({ style, color, onBack, metaData }) => (
    <animated.div style={{ ...style }}>
      <End onBack={onBack} urls={color} metaData={metaData} />
    </animated.div>
  ),
];

export default function Animation({ color, metaData }) {
  const [index, set] = useState(0);
  const onClick = () => set((state) => Math.min(state + 1, 7));
  const backOne = () => set((state) => Math.max(state - 1, 0));
  const goBack = () => set(0);
  const handleKeyDown = (event) => {
    console.log("User pressed: ", event.key);
    if (event.key === "ArrowRight") set((state) => Math.min(state + 1, 7));
    if (event.key === "ArrowLeft") set((state) => Math.max(state - 1, 0));
    if (event.key === "r") set(0);
    if (event.key == " ") set((state) => Math.min(state + 1, 7));
  };

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(0,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index]);
  return (
    <div
      className={`flex fill ${styles.container}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {transitions((style, i) => {
        const Page = pages[i];
        return (
          <Page
            style={style}
            color={color}
            onBack={goBack}
            backOne={backOne}
            metaData={metaData}
          />
        );
      })}
    </div>
  );
}
