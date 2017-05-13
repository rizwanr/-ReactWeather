var React = require('react');
var WeatherForm = React.createClass({

    onFormSubmit: function (e){
    e.preventDefault();
      var location = this.refs.location.value;
      if (location.length>0){
        this.refs.location.value ='';  // clear the value in the browser
        this.props.onSearch(location); //onSerch is the parent function
      }
    }, // we have a form but we have no way of handling it, so we create a onFormSubmit function
  render: function(){
  return (
    <div>
      <form onSubmit = {this.onFormSubmit}> // so everytime the form is submitted, onFormSubmit fnction gets called
        <input type="text" ref ="location">
          <button>Get Weather</button>
        </input>
      </form>
    </div>

  );
}
});

module.exports=WeatherForm;
