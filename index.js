import React from 'react';
import { render } from 'react-dom';
//import ReactDOM from 'react-dom';
import ReactClass from 'create-react-class';

var ReactComponent=ReactClass({
render: function(){
return (<div>
			<h1> Welcome to React</h1>
			
		</div>);
}
});	
render(<ReactComponent></ReactComponent>, document.getElementById("container"));

