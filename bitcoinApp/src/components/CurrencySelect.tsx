import React, { Component, useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'ticker';

var temp = "test";


 
class CurrencySelect extends Component <{}, { currentCurrency: string, currencys : any }> {
  constructor(props : any) {
    super(props);

 
    this.state = {
      currencys : {},
      currentCurrency : ""
    };
  }
  
  
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState( {currencys : data} ));
  }

  setMyCurrency( cur : any ){
    console.log(cur);
    console.log(this.state);
    this.setState( {currentCurrency : cur });
    //this.setState( {currentCurrency : cur} );  
  }
  
 
  render() {
    const currencys : any = this.state;



    //const [ currencys, setCurrency ] = useState<any>('EUR');
    //const [ currencys, setCurrency ] = useState<any>(this.state);
    //const [ currentCurrency, setCurrentCurrency ] = useState<any>(this.state);



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
          <IonSelect interface="popover" value={this.state.currentCurrency} onIonChange={e => (this.setMyCurrency(e.detail.value) ) }>
          
          {listCurrencys}
          
          </IonSelect>
      </IonItem>
        
        
    );
  }
  //*/

}



export default CurrencySelect;