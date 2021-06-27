import './App.css';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import LocXueTimeline from './components/LocXueTimeline/LocXueTimeline';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
        Proximamente...
        <LocXueTimeline />
      </Container>
    </div>
  );
}

export default App;
