import GlobalStyle from './theme/globalStyle';

import { Header } from './components/Header';
import { Content } from './components/Content';

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Content />
    </>
  );
}

export default App;
