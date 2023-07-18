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

import styles from "../style/animation.module.css";

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style, color }) => (
    <animated.div style={{ ...style }}>
      <Start urls={color["red"]}> </Start>
    </animated.div>
  ),
  ({ style, color }) => (
    <animated.div style={{ ...style }}>
      <Red urls={color["red"]}> </Red>
    </animated.div>
  ),
  ({ style, color }) => (
    <animated.div style={{ ...style }}>
      <Orange urls={color["orange"]}> </Orange>
    </animated.div>
  ),
  ({ style, color }) => (
    <animated.div style={{ ...style }}>
      <Yellow urls={color["yellow"]}> </Yellow>
    </animated.div>
  ),
  ({ style, color }) => (
    <animated.div style={{ ...style }}>
      <Green urls={color["green"]}> </Green>
    </animated.div>
  ),
  ({ style, color }) => (
    <animated.div style={{ ...style }}>
      <Blue urls={color["blue"]}> </Blue>
    </animated.div>
  ),
  ({ style, color }) => (
    <animated.div style={{ ...style }}>
      <Purple urls={color["purple"]}> </Purple>
    </animated.div>
  ),
  // ({ style, color }) => (
  //   <animated.div style={{ ...style }}>
  //     <Black urls={color["black"]}> </Black>
  //   </animated.div>
  // ),
  ({ style, color }) => (
    <animated.div style={{ ...style }}>
      <Grey urls={color["grey"]}> </Grey>
    </animated.div>
  ),
  // ({ style, color }) => (
  //   <animated.div style={{ ...style }}>
  //     <White urls={color["white"]}> </White>
  //   </animated.div>
  // ),
];

export default function Animation({ color }) {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 8);
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
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} color={color} />;
      })}
    </div>
  );
}
