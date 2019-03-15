import React, {Component} from 'react';

class SearchBox extends Component
{
	
	render()
	{
		return(
			<div className='pa2 tc'>
		      <input
		        className= 'pa3 ba b--green bg-white ma1'
		        type='search'
		        placeholder='search banks by cities / IFSC / MICR code...'
		        onChange = {this.props.onSearchChange}
		        onKeyPress = {this.props.onKeyPress}
		        size ="38"
		      />
		      <button 
		      	className='pa3 ba b--green bg-white pointer'
		      	onClick = {this.props.onButtonClicked}>Search
		      </button>
		    </div>
		);
	}
}

export default SearchBox;