//react component

var Greeter = React.createClass({
render: function(){         // render method setting the render property to an anonymous function
                            // all it needs is some jsx function that needs to be rendered
return(
<div>
  <h1>
     Hello react!
  </h1>
  <p>This is from the component</p>
  </div>

); // the only reason we use parenthesis here so that we can properly format
}
});  // this is the most common method is react method, takes only one arguement
                                    //an options object, this is where we descibe the behaviour of hte component
//Once we have the greeter component defined, and is going to render an H1 tag, in order for it to use it,
//we need to pass it as the first  arguement to the react render method


// All we do is pass in the little piece of code to render, in this case a h1 tag and the location to render it
ReactDOM.render(        //this is the most common react dom method
                      //call it as a function, passing two arguements, first is jpiece of jsx and the second
                       //is the app element, JSX = javascript XML
  <Greeter/>,
    document.getElementById('app')
);

//using react component makes it more reusable.
//you can only return one root element from the component; you can only render from one root element, have
//more element inside the root element
