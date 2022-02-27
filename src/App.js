import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEMES } from './Globals';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Container } from './Components/Styles/Container.styled';
import GlobalStyles from './Components/Styles/Global';
import content from './content';

const lightTheme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px',
}

const darkTheme = {
  colors: {
    header: '#5294e2',
    body: '#383c4a',
    footer: '#7c818c'
  },
  mobile: '768px',
}

function App() {
  const [changeToTheme, setChangeToTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const preferesDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      setChangeToTheme(savedTheme);
    } else if (preferesDark) {
      setChangeToTheme(THEMES.DARK);
    }
  }, [])

  const handleThemeChange = () => {
    const themeToSave = changeToTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setChangeToTheme(themeToSave);
    localStorage.setItem("theme", themeToSave);
  }

  return (
    <ThemeProvider theme={changeToTheme === THEMES.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header changeToTheme={changeToTheme} handleThemeChange={handleThemeChange} />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
