var React = require('react');
var WeatherForm = React.createClass({

    onFormSubmit: function (e){
    e.preventDefault();
      var location = this.refs.location.value;
      if (location.length>0){
        this.refs.location.value ='';  // clear the value in the browser
        this.props.onSearch(location); //onSerch is the parent function
      }
    },
    // we have a form but we have no way of handling it, so we create a onFormSubmit function
// so everytime the form is submitted, onFormSubmit fnction gets called
  render: function(){
  return (
    <div>
      <form onSubmit = {this.onFormSubmit}>
        <input type="text" ref ="location">
          <button className="button expanded hollow ">Get Weather</button>
        </input>
      </form>
    </div>

  );
}
});

module.exports=WeatherForm;
