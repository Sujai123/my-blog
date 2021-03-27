import IndexContainer from "./components";
import MainProfileContainer from "./components/MainProfileContainer";
import styles from "./App.module.css"
import MyProjects from "./components/MyProjects";
import Header from "./components/Header";
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
      {/* <Header />
      <MainProfileContainer />
      <MyProjects /> */}
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
