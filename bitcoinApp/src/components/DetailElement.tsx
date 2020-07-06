import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSelectOption, IonItem, IonLabel, IonSelect, IonBadge } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from './ExploreContainer';

//const BitcoinPrice = require('https://blockchain.info/ticker');



interface ContainerProps {
  metric: string;
}

var metric : string;

/*

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

  */
  

const DetailElement : React.FC<ContainerProps> = ( metric ) => {

  //const { metric } = useParams<{ metric: string; }>();

  /*
  console.log(BitcoinPrice);
  var listCurrency = (function () {
    var entitys : any = [];
    for (let Currency in BitcoinPrice) {
      console.log('Currency here' + Currency);
      entitys.push(<IonSelectOption value={Currency}>{Currency}</IonSelectOption>);
    }

    return entitys;
  }());
  */

  const [ setCurrency ]= useState<any>('EUR');

  console.log(metric.metric);

  return (
    <IonItem>
      <IonLabel>{metric.metric}</IonLabel>
      <IonBadge slot="end">22</IonBadge>
    </IonItem>

  );
};

export default DetailElement;
