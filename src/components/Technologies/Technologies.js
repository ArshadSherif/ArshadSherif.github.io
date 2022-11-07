import React from "react";
import { SiCplusplus, SiJavascript ,SiPython} from "react-icons/si";
import{GrNode} from "react-icons/gr"

import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked with great deal of Technologies</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.Js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <SiCplusplus size="3rem" />
        <ListTitle>C++</ListTitle>
        <ListParagraph>
          Proficient in <br />
          C/C++
        </ListParagraph>
      </ListItem>
      <ListItem>
        <SiJavascript size="3rem" />
        <ListTitle> JavaScript</ListTitle>
        <ListParagraph>
          Adept in  <br />
          JavaScript
        </ListParagraph>
      </ListItem>
      <ListItem>
        <SiPython size="3rem" />
        <ListTitle> Python</ListTitle>
        <ListParagraph>
          Well versed in  <br />
          Python
        </ListParagraph>
      </ListItem>
      <ListItem>
        <GrNode size="3rem" />
        <ListTitle>NodeJS</ListTitle>
        <ListParagraph>
          Intermediate Knowledge of <br />
          NodeJS
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
