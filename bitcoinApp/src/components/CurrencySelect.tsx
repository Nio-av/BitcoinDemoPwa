import React, { Component, useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import NewDashboard from '../pages/NewDashboard'
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'ticker';

interface OnChange {
  onchange: any;
}


class CurrencySelect extends Component <{}, { currentCurrency: string, currencys : object }> {
  constructor(props : any) {
    super(props);

 
    this.state = {
      currencys : {},
      currentCurrency : ""
    };

    
  }


  
  componentDidUpdate(prevProps : any) {
    console.log("update");
  }
  
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState( {currencys : data} ));
  }

  setMyCurrency = ( cur : string ) => {
    this.setState( {currentCurrency : cur });
  }
  
 
  render() {
    const currencys : any = this.state;

    var listCurrencys = (function () {
      var entitys = [];
      console.log(currencys);
      for (let Currency in currencys.currencys) {
        entitys.push(<IonSelectOption value={Currency}>{Currency}</IonSelectOption>);
      }
  
      return entitys;
    }());
 
    return (
      <IonItem>
          <IonLabel>Currency:</IonLabel>
          <IonSelect interface="popover" value={this.state.currentCurrency} onIonChange={e => (this.setMyCurrency(e.detail.value) ) }>
          {listCurrencys}
          </IonSelect>
      </IonItem>
        
        
    );
  }
}



export default CurrencySelect;
export interface Props {
  onChangew: string;
}