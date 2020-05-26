import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  //state as a class property
  state = {
    userInput: ''
  }

  //this event handler function(arrow function), passes the event object as a parameter
  inputChangedHandler = (event) => {
    //this.setState allows to update the value of the first state of the userInput
    //with event.target.value, wich retrieves the value of the input that was called
    this.setState({userInput: event.target.value});
  }


  //event handler for deleting characters
  deleteCharHandler = (index) => {
    //declaration of variable 'text' that should be the user input splited
    const text = this.state.userInput.split('');
    //splice will delete 1 character at the index
    text.splice(index, 1);
    //declaration of variable updatedText should be the spliced text unified (no separator)
    const updatedText = text.join('');
    //userinput should be updated to the updatedText
    this.setState({userInput: updatedText});
  }

  render() {
    //variable charList splits the String in characters becausE of split() String method
    //as the separator is '', the String is separated char by char. By example, if the separator was '.'
    //then the String will only separate when it finds a '.' (example.test ==> example test)
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character = {ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)}
      />;
    });

    //index key is not optimal, but better than no key

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <hr/>

        <input 
        type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.userInput}
        />

        <p>{this.state.userInput}</p>
        {/*this shows the input made by the user in box above */}
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
