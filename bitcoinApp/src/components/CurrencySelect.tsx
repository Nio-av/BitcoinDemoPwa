import React, { Component, useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'ticker';

var temp = "test";

interface ContainerProps {
  currencys: any;
  currentCurrency : string;
}

var currencys : any;
var currentCurrency : string;
 
class CurrencySelect extends Component {
  constructor(props : any, currency : any) {
    super(props, currency);

 
    this.state = {
      currencys : {},
      currentCurrency
    };
  }
  
  
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState( {currencys : data} ));
  }

  setMyCurrency( cur : string ){
    console.log(cur);
    //this.setState( {currentCurrency : cur })
  }
  
 
  render() {
    const currencys : any = this.state;



    //const [ currencys, setCurrency ] = useState<any>('EUR');
    //const [ currencys, setCurrency ] = useState<any>(this.state);



    var listCurrencys = (function () {
      var entitys = [];
      console.log(currencys);
      for (let Currency in currencys.currencys) {
        entitys.push(<IonSelectOption value={Currency}>{Currency}</IonSelectOption>);
      }
  
      return entitys;
    }());
  

    function setCurrency( cur : string ){
      console.log("selected " + cur);
      //this.setState()
    }
    
 
    return (
      <IonItem>
          <IonLabel>Currency:</IonLabel>
          <IonSelect interface="popover" value='BitcoinPrice.Currency' onIonChange={e => this.setMyCurrency(e.detail.value)}>
          
          {listCurrencys}
          
          </IonSelect>
      </IonItem>
        
        
    );
  }
  //*/

}


export interface Props {
  term: string;
}

export default CurrencySelect;