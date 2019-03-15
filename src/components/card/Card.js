import React, {Component} from 'react';
import './Card.css';

var elem = null;
class Card extends Component
{
	


	titleCase = (string)=>{
		if(string){
			let arr = string.trim().split(' ');
			let out = '';
			for(let word of arr){
				if(word){
					out+=word[0].toUpperCase();
					out+=word.slice(1).toLowerCase();
					out+=' ';	
				}
				
			}
			return out.trim();
		}
		else{
			return string;
		}
		
	};


	addAnimation = ()=>{
		elem = document.querySelectorAll( ":hover" )[6];
		if (elem){
			elem.classList.add('animated');
			elem.classList.add('fadeIn');
			elem.classList.add('fast');
		}
		
	};

	removeAnimation = ()=>{
		
		if(elem){
			elem.classList.remove('animated');
			elem.classList.remove('fadeIn');
			elem.classList.add('fast');
		}
		
	}

	render()
	{
		return(
			<div className = 'card br3 tl pl3 ba b--white shadow-1 o-70 w-30 grow ma2 bg-white'
				 onMouseEnter = {this.addAnimation}
				 onMouseLeave = {this.removeAnimation}>
				<p className = 'f3 mt3 mb0'>{this.titleCase(this.props.bankInfo.BANK)}</p>
				<br />
				<span className = 'gray'>{this.titleCase(this.props.bankInfo.DISTRICT)},</span>
				<span> </span>
				<span className = 'gray'>{this.titleCase(this.props.bankInfo.CITY)},</span>
				<span> </span>
				<span className = 'gray'>{this.titleCase(this.props.bankInfo.STATE)}</span>
				<br />
				<span className = 'gray'>{this.titleCase(this.props.bankInfo.ADDRESS)}</span>
				<br />
				<br />
				<span className = 'f5'>Branch Name = </span>
				<span> </span>
				<span className='f5'>{this.titleCase(this.props.bankInfo.BRANCH)}</span>
				<br />
				<br />
				<span className = 'f5'>IFSC Code = </span>
				<span> </span>
				<span className = 'f5'>{this.props.bankInfo.IFSC}</span>
				<br />
				<br />
				<span className = 'f5'>MICR Code = </span>
				<span> </span>
				<span className = 'f5'>{this.props.bankInfo.MICRCODE}</span>
			</div>
			);
	}
	
}

export default Card;