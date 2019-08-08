import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      inputText: "",
      todoList: []
    })
  }
  updateInput(event) {
    this.setState({
      inputText: event.target.value
    })
  }
  addTitle() {
    this.setState ({
      todoList: [ ...this.state.todoList, this.state.inputText], /* first time use of spread operator*/
      inputText: "" 
    })
  }
  handleClicked() {

  }

  render() {
    return(
      <div className='App'>
        <React.Fragment >
          <input
            type='text'
            placeholder='Title'
            value={this.state.inputText}
            onChange={(event) => this.updateInput(event)}
            className='App'
          />
          <button
            onClick={() => this.addTitle()}
            className='App'>Add Title</button>
          <hr/>
          
          <ol className='App'>
            {this.state.todoList.map(title => (<li key={title}><button onClick={() => this.handleClicked()}>{title}</button></li>))} {/*function need to change text color onclick. also need to set better key prop*/}
          </ol>

        </React.Fragment>
      </div>
    )
  }
}

export default App;
