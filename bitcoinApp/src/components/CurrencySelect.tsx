import React, { Component } from 'react';
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'ticker';
 
class CurrencySelect extends Component {
  constructor(props : any) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
  
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        
        console.log(jsonData);
        for(let Currency in jsonData){
          console.log(Currency);
          console.log(jsonData[Currency].buy);
          console.log(jsonData.Currency);
        }
        
      })
  }
 

  
  render() {
    const jsonData  = this.state;

    console.log(jsonData);
 
    return (
      <ul>
      </ul>
    );
  }
  //*/

}
 
export default CurrencySelect;