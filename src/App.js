import IndexContainer from "./components";
import MainProfileContainer from "./components/MainProfileContainer";
import styles from "./App.module.css"
import MyProjects from "./components/MyProjects";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <MainProfileContainer />
      <MyProjects />
    </div>
  );
}

export default App;
