import React, { Component } from 'react';
import SearchBox from './components/searchbox/SearchBox';
import Scroll from './components/scroll/Scroll';
import Particles from 'react-particles-js';
import './App.css';
import CardList from './components/card-list/CardList';
import Logo from './components/logo/Logo';
import zenscroll from 'zenscroll';
import 'animate.css';


const particlesOptions = {
  particles:{
    number:{
      value:50,
      density:{
        enable:true,
        value_area:800
      }
    },

    size:{
      value:2
    }
  },
};


let searchValue = null;

class App extends Component 
{
  constructor(){
    super();
    this.state={
      bankInfo:null,
      searching:false
    };
  }

  onSearchChange = (event)=>{
    searchValue = event.target.value;
  };
  
  onButtonClicked = ()=>{
    if(searchValue)
    {
      this.setState({searching:true});

      let promise1 = new Promise((resolve, reject)=>{
        fetch('https://api.techm.co.in/api/v1/ifsc/'+searchValue.toUpperCase())
        .then(res=>res.json())
        .then(res=>{
          if(res.data!==null){
            resolve(res.data);
          }
          else{
            resolve('rejected');
          }
        })
      });

      let promise2 = new Promise((resolve, reject)=>{
        fetch('https://api.techm.co.in/api/v1/micr/'+searchValue.toUpperCase())
         .then(res=>res.json())
         .then(res=>{
          if(res.data!=null){
            resolve(res.data);
          }
          else{
            resolve('rejected');
          }
        })
      });

      let promise3 = new Promise((resolve, reject)=>{
        fetch('https://api.techm.co.in/api/branch/'+searchValue.toUpperCase())
         .then(res=>res.json())
         .then(res=>{
            if(res.data!=null){
              resolve(res.data.banks);
            }
          else{
            resolve('rejected');
          }
        })
      });

      Promise.all([promise1, promise2, promise3])
        .then(res=>
          {
            if(res[0]!=='rejected'){
              this.setState({bankInfo:[res[0]], searching:false}, function(){
                zenscroll.toY(250);
              });

            }
            else if(res[1]!=='rejected')
              this.setState({bankInfo:[res[1]], searching:false}, function(){
                zenscroll.toY(250);
              });
            else if(res[2]!=='rejected')
              this.setState({bankInfo:res[2], searching:false}, function(){
                zenscroll.toY(250);
              });
            else
            {
              this.setState({searching:false, bankInfo:null});
              alert(`This is not a valid search query...\nPlease search using valid City-name / IFSC / MICR code.`);
              document.getElementsByTagName('input')[0].value = '';
              zenscroll.toY(0);
            }

          });
    }
    
  };

  onKeyPress = (event)=>{
    if (event.key==='Enter' && searchValue)
    {
      this.setState({searching:true});

      let promise1 = new Promise((resolve, reject)=>{
        fetch('https://api.techm.co.in/api/v1/ifsc/'+searchValue.toUpperCase())
        .then(res=>res.json())
        .then(res=>{
          if(res.data!==null){
            resolve(res.data);
          }
          else{
            resolve('rejected');
          }
        })
      });

      let promise2 = new Promise((resolve, reject)=>{
        fetch('https://api.techm.co.in/api/v1/micr/'+searchValue.toUpperCase())
         .then(res=>res.json())
         .then(res=>{
          if(res.data!=null){
            resolve(res.data);
          }
          else{
            resolve('rejected');
          }
        })
      });

      let promise3 = new Promise((resolve, reject)=>{
        fetch('https://api.techm.co.in/api/branch/'+searchValue.toUpperCase())
         .then(res=>res.json())
         .then(res=>{
            if(res.data!=null){
              resolve(res.data.banks);
            }
          else{
            resolve('rejected');
          }
        })
      });


      Promise.all([promise1, promise2, promise3])
        .then(res=>
          {
            if(res[0]!=='rejected')
              this.setState({bankInfo:[res[0]], searching:false}, function(){
                zenscroll.toY(250);
              });
            else if(res[1]!=='rejected')
              this.setState({bankInfo:[res[1]], searching:false}, function(){
                zenscroll.toY(250);
              });
            else if(res[2]!=='rejected')
              this.setState({bankInfo:res[2], searching:false}, function(){
                zenscroll.toY(250);
              });
            else
            {
              this.setState({searching:false, bankInfo:null});
              alert(`This is not a valid search query...\nPlease search using valid City-name / IFSC / MICR code.`);
              document.getElementsByTagName('input')[0].value = '';
              zenscroll.toY(0);
            }

          });
    }
  }

  render() {
    return (
      <div className = 'tc'>
      <Particles params = {particlesOptions} className='particles'/>
      <div className='tc mb3'>
          <Logo />
          <h1 className='f1 pa2 animated zoomIn fast'>Bank Search</h1>
          <SearchBox 
            onSearchChange = {this.onSearchChange}
            onButtonClicked = {this.onButtonClicked}
            onKeyPress = {this.onKeyPress}/>
          
      </div>
      <Scroll >
      <CardList bankInfo = {this.state.bankInfo} searching={this.state.searching}/>
      </Scroll>
      </div>
    );
  }
}

export default App;
