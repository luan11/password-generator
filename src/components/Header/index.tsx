import { usePasswordContext } from '../../contexts/Password';

import { FiTerminal } from 'react-icons/fi';
import { BiMoon, BiSun } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';

import { Container, Title, Choose, Button, A } from './styles';

export function Header() {
  const { theme, handleTheme } = usePasswordContext();

  return (
    <Container>
      <Title>
        <FiTerminal />
        <span>Password Generator</span>
      </Title>

      <Choose>
        <Button
          type="button"
          className={theme === 'light' ? '' : 'hidden'}
          onClick={() => handleTheme('')}
        >
          <BiMoon />
        </Button>

        <Button
          type="button"
          className={theme !== 'light' ? '' : 'hidden'}
          onClick={() => handleTheme('light')}
        >
          <BiSun />
        </Button>

        <A
          href="https://github.com/luan11/password-generator"
          target="_blank"
        >
          <SiGithub />
        </A>
      </Choose>
    </Container>
  );
};