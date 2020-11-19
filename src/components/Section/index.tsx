import React from 'react';

import { Container, Content } from './styles';

interface SectionProps {
  title: string;
  background_color: string;
  background_url: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  background_color,
  background_url,
}) => {
  return (
    <Container style={{ backgroundColor: background_color }}>
      <h2>{title}</h2>
      <Content {...{ background_url }}>{children}</Content>
    </Container>
  );
};

export default Section;
