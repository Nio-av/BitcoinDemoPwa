import React, { Component, useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
 
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
    const currencys : any = this.state;

    console.log("Data:")
    console.log(currencys);

    for(let cur in currencys){
      console.log(cur);
      console.log(currencys[cur].buy)
    }

    var listCurrencys = (function () {
      var entitys = [];
      for (let Currency in currencys) {
          entitys.push(<IonSelectOption value={Currency}>{Currency}</IonSelectOption>);
      }
  
      return entitys;
    }());
  

    
    
 
    return (
      <IonItem>
          <IonLabel>Currency:</IonLabel>
          <IonSelect interface="popover" value='BitcoinPrice.Currency' onIonChange={e => "setCurrency('e.detail.value')"}>
          
          {listCurrencys}
          
          </IonSelect>
      </IonItem>
        
        
    );
  }
  //*/

}
 
export default CurrencySelect;