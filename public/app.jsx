var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter')
/* We are going to create a component that we are going to next inside
the Greeter component */
//second oomponent - static version


//third component - static version



var firstName = 'Rizwan';
var message = 'This is the message wihout the default';

ReactDOM.render(
  <Greeter  name= {firstName} message ={message}/>,

    document.getElementById('app')
);
