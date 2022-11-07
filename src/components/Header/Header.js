import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="\">
        <legacyBehavior
          legacyBehavior
          style={{ display: "flex", alignItems: "center", color: "white" }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </legacyBehavior>
      </Link>
    </Div1>
    <Div2>
      <li>
        <link href="#projects"></link>
      </li>
      <li>
        <link href="#projects"></link>
      </li>
      <li>
        <link href="#projects"></link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ArshadSherif">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/arshad-sherif-5a9835249/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/arshad.sherif/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
