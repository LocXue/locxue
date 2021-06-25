import './App.css';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">LocXué</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        Proximamente...
      </Container>
    </div>
  );
}

export default App;
