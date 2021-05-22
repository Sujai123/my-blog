import styles from "./App.module.css"
import Home from "./components/Home";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#289688",
    },
    secondary: {
      main: "#ffffff",
    },
  }
})

function App() {
  return (
    <div className={styles.App}>
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
