import './App.css';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import LocXueTimeline from './components/LocXueTimeline/LocXueTimeline';
import AboutUs from './components/AboutUs/AboutUs';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import locxueTheme from './locxueTheme.json';

const theme = createMuiTheme(locxueTheme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="ld">
          <AboutUs />
          <LocXueTimeline />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
