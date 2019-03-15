import React, {Component} from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import bank from './bank.png';


class Logo extends Component
{
	render()
	{
		
		return(
			<div className='flex justify-center mt4 dn'>
				<Tilt className="Tilt br3 shadow-1" options={{ max : 70 }} style={{ height: 150, width: 150 }} >
			    	<div className="Tilt-inner pa3">
			    		<img src={bank} alt='Logo' />
			    	</div>
				</Tilt>
			</div>
		);

		
	}
}

export default Logo;
