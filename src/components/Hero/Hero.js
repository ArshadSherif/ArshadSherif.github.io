import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nowpadding>
    <LeftSection>
      <SectionTitle main centre>
        Hey! I'm Arshad <br />
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am an Aspiring Web Developer 
        
      </SectionText>
      <Button>Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
