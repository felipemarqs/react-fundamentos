import React from 'react';

import { Container } from './styles';

export default function Footer({onToggleTheme, theme}) {
  return (
    <Container>
      <span>Felipe's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>{theme === 'dark' ? '🌞' : '🌙'}</button>
    </Container>
  );
}