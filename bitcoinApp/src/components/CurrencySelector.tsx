import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSelectOption, IonItem, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';

//const BitcoinPrice = require('https://blockchain.info/ticker');

var BitcoinPrice : any;

fetch('https://api.blockchain.info/ticker')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData);
    BitcoinPrice = jsonData;
    for(let Currency in BitcoinPrice){
      console.log(Currency);
      console.log(BitcoinPrice[Currency].buy);
      console.log(BitcoinPrice.Currency);
    }
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })

  

const CurrencySelector: React.FC = () => {

  const { name } = useParams<{ name: string; }>();


  console.log(BitcoinPrice);
  var listCurrency = (function () {
    var entitys : any = [];
    for (let Currency in BitcoinPrice) {
      console.log('Currency here' + Currency);
      entitys.push(<IonSelectOption value={Currency}>{Currency}</IonSelectOption>);
    }

    return entitys;
  }());
  //*/

  const [ setCurrency ]= useState<any>('EUR');

  return (
    <IonItem>
        <IonLabel>Currency:</IonLabel>
        <IonSelect interface="popover" value='BitcoinPrice.Currency' onIonChange={e => setCurrency('e.detail.value')}>
            {listCurrency}
        </IonSelect>
    </IonItem>

  );
};

export default CurrencySelector;
