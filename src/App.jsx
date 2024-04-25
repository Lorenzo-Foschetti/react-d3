
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import MyAlert from "./component/Welcome";
import BookList from "./component/BookList";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav/>
        <MyAlert/>
     <BookList/>
        <MyFooter/>
       
      </header>
    </div>
  );
}

export default App;
