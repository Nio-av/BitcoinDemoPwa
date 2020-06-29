import React, { Component } from 'react';
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'ticker';
 
class CurrencySelect extends Component {
  constructor(props : any) {
    super(props);
 
    this.state = {
      currencys: [],
    };
  }
  
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState( data ));
  }
 

  
  render() {
    const currencys  = this.state;

    console.log("Data:")
    console.log(currencys);
 
    return (
      <ul>
        
      </ul>
    );
  }
  //*/

}
 
export default CurrencySelect;