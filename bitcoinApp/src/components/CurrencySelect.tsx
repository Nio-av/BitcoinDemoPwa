import React, { Component, useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'ticker';

 
class CurrencySelect extends Component {
  constructor(props : any) {
    super(props);
 
    this.state = {
    };
  }
  
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState( data ));
  }
  
 
  render() {
    const currencys : any = this.state;

    //const [ currencys, setCurrency ] = useState<any>('EUR');
    //const [ currencys, setCurrency ] = useState<any>(this.state);



    var listCurrencys = (function () {
      var entitys = [];
      console.log(currencys);
      for (let Currency in currencys) {
        entitys.push(<IonSelectOption value={Currency}>{Currency}</IonSelectOption>);
      }
  
      return entitys;
    }());
  

    function setCurrency( cur : string ){
      console.log("selected " + cur);
    }
    
 
    return (
      <IonItem>
          <IonLabel>Currency:</IonLabel>
          <IonSelect interface="popover" value='BitcoinPrice.Currency' onIonChange={e => setCurrency(e.detail.value)}>
          
          {listCurrencys}
          
          </IonSelect>
      </IonItem>
        
        
    );
  }
  //*/

}
 
export default CurrencySelect;