import React, { Component, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSelectOption, IonItem, IonLabel, IonSelect, IonBadge } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import BitcoinPrice from '../components/BitcoinPrice';
import DetailElement from '../components/DetailElement';
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'q/';




const metricsUrlStrings = [
    "marketcap",
    "totalbc",
    "24hrtransactioncount",
    "24hrbtcsent",
    "hashrate",
    "getdifficulty"
]




class BitcoinDetails extends Component <{}, { }> {
  constructor(props : any) {
    super(props);
    
  }

 
  render() {
    const metrics : any = this.state;

    var listDetails = (function () {
      var entitys = [];
      
      for (let metric of metricsUrlStrings) {
        //console.log(metric);
        entitys.push( <DetailElement metric={metric} /> );
      }
      
      return entitys;
  
    }());

    var name = "Details";

    
    

 
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>

      </IonHeader>

      <IonContent>
        {listDetails}
    </IonContent>
    </IonPage>
        
        
    );
  }
}



export default BitcoinDetails;