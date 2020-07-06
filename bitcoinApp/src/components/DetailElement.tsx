import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSelectOption, IonItem, IonLabel, IonSelect, IonBadge } from '@ionic/react';
import React, { Component, useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from './ExploreContainer';

//const BitcoinPrice = require('https://blockchain.info/ticker');

const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'q/';

interface ContainerProps {
  metricValue: string;
}

var metricValue: string;

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
  
  

class DetailElement extends Component <{metric : string  }, { metricValue: string}> {
  constructor(props : any, metricValue : string) {
    super(props);

    
    this.state = {
      metricValue : ""
    };
    
  }


  render() {
    const metric = this.props.metric;
 
    return (
      <IonItem>
        <IonLabel>{metric}</IonLabel>
        <IonBadge slot="end">22</IonBadge>
      </IonItem>
        
        
    );
  }
}




export default DetailElement;
