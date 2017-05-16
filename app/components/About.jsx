var React = require('react');

var About = React.createClass({
  render:function () {
    return (
        <div className ="text-center">
         <h1 >About</h1>
         <p>This is the weather application build on React.I have build this for the complete React Web app Developer course</p>
         <p>Here are some of the tools I used:</p>
         <ul>
           <li>
             <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
           </li>
           <li>
             <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather by city name.

           </li>
         </ul>

     </div>

    )
  }
});

module.exports = About;
