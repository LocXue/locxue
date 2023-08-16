import './App.css';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import LocXueFooter from './components/LocXueFooter/LocXueFooter';
import LocXueTimeline from './components/LocXueTimeline/LocXueTimeline';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import locxueTheme from './locxueTheme.json';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme(locxueTheme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="md">
          <div id="about-us"></div>
          <Typography variant="h1" className="section-title" color="primary">Sobre Nosotr@s</Typography>
          <AboutUs />
          <div id="timeline"></div>
          <Typography variant="h1" className="section-title" color="primary">Línea de Tiempo</Typography>
          <LocXueTimeline />
        </Container>
        <LocXueFooter />
      </ThemeProvider>
    </div>
  );
}

export default App;
