import React from "react";
import MonsterAudio from "./MonsterAudio";
import Lenovo from "./Lenovo";
import Haino from "./Haino";
import JoyRoom from "./JoyRoom";
import Baseus from "./Baseus";
import Havit from "./Havit";
import Wiwu from "./Wiwu";
import Popular from "./Popular";
import ProductDay from "./ProductDay";

export default function Home() {
  return (
    <>
      <Lenovo />
      <ProductDay/>
      <MonsterAudio />
      <Haino />
      <Popular />
      <JoyRoom />
      <Baseus />
      <Havit />
      <Wiwu />
    </>
  );


}
