import React from 'react'
import Div from '../Div'
import Logo from "../../img/logo.png";
import Image from "next/image";

export default function TextWidget({text}) {
  return (
    <Div className="cs-text_widget">
        <Image src={"/images/logo-initial-web-waze-digital-avec-texte-blanc.png"} alt="Web Waze Digital" width={200} height={30} />
      <p>{text}</p>
    </Div>
  )
}
