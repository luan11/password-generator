import { PasswordProvider } from './contexts/Password';

import GlobalStyle from './theme/globalStyle';

import { Header } from './components/Header';
import { Content } from './components/Content';

function App() {
  return (
    <PasswordProvider>
      <GlobalStyle />

      <Header />
      <Content />
    </PasswordProvider>
  );
}

export default App;
