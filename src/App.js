import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Buttons from './components/Buttons/Buttons';

function App() {
  return (
     <div className="container" style={styles.container} >
        <Header/>
        <Main/>
        <Buttons/>
     </div>
  );
}



export default App;

const styles = {
  container:{
    backgroundColor:'#FFF',
    width:'450px',
  }
}