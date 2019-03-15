import React, {Component} from 'react';

class Scroll extends Component
{
	render()
	{
		return(

		    <div style={{ overflow: 'scroll', height:'425px'}}>
		      {this.props.children}
		    </div>
		);
	}

}
export default Scroll;