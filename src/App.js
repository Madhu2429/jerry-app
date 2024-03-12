import logo from './logo.svg';
import './App.css';


function App() {
    return (
        <div className="App" >
  
        </div>
    );
}



function User(props) {
    console.log(props,typeof props);
    return (
    <div>
      <img className="User-profile-pic" src={props.pic} alt={props.name} />
      <h1 className="User-name">Hello, {props.name} ❤❤</h1>;
    </div>
    );
}


export default App;
