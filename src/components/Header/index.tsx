import { FiTerminal } from 'react-icons/fi';

import { Container, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Title>
        <FiTerminal />
        <span>Password Generator</span>
      </Title>
    </Container>
  );
};