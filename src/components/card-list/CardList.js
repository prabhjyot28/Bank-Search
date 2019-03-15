import React, {Component} from 'react';
import Card from '../card/Card';
import Loader from 'react-loader-spinner';


class CardList extends Component
{
	render()
	{

		if(this.props.bankInfo!=null && !this.props.searching)
		{
			return(
				<div className='flex flex-wrap justify-center animated slideInUp faster'>
				{
					this.props.bankInfo.map(bank=>{
						return(
								<Card bankInfo = {bank} key = {bank._id}/>
							);
					})
				}
				</div>
			);
		}
		else if(this.props.searching)
		{
			return(
				<div className='mt3'>
					<Loader 
			           type="TailSpin"
		               color='white'
		               height="125" 
		               width="125"
			      />  
				</div>
				);
		}
		else{
			return(
			<div>
			</div>
			);
		}


		
	}
}

export default CardList;



