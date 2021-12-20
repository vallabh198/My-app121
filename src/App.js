import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Isclassblock from './component/Isclassblock';
import Isfunblock from './component/Isfunblock';


class App extends Component {
  state = {
     isClass : false,
     isFunction : false
  }
  
  render(){
    return (
      <div className="App">
        
        <h1>Styling using Functional and Class Component</h1>
        <button onClick={() => this.setState({isClass : !this.state.isClass})}>Click for class block</button>
        <button onClick={() => this.setState({isFunction : !this.state.isFunction})}>Click for function block</button>
        
        {this.state.isClass ? <Isclassblock /> : null}
        {this.state.isFunction ? <Isfunblock /> : null}
        
      </div>
    );
  }
}

export default App;
