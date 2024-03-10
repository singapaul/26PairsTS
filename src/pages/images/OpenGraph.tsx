import React from "react";
import { StaticImage } from "gatsby-plugin-image";
type Props = {};

const OpenGraph = (props: Props) => {
  return (
    <>
      <StaticImage
        src='../../assets/images/Cards.png' // Adjust the path to the correct location within your assets folder
        alt="A description of the image"
      />
    </>
  );
};

export default OpenGraph;
