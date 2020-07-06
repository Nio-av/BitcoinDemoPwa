import React, { Component } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DetailElement from '../components/DetailElement';
 


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