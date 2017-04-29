// A props(component properites) is a way to pass in a data to component when you first start it
// {} put the varibale in the javascript expression
//getDefaultProps is a new method, does not take any arguement and returns an object of properties that is "this.props"
//if you delete the name attribute then it will just render to the default "Hello React" but if u pass the
// name attrubute, it will render to Hello Rizwan

var Greeter = React.createClass({
getDefaultProps:function(){
 return {
  name: 'React',
  message : 'Default message'
 };
},

render: function(){
var name = this.props.name; // fetch the name inside the react function in the variable
var message = this.props.message;
return(
<div>
  <h1>
     Hello {name}
  </h1>
  <p>{message} !!</p>
  </div>
);
}
});

var firstName = 'Rizwan';
var message = 'This is the message wihout the default';

ReactDOM.render(
  <Greeter  name= {firstName} message ={message}/>,  // pass the  attribute; it should be available to our Greeter component.
                              // all we need to do is pull it out inside of render and replace with the React word in Hello React
    document.getElementById('app')
);
