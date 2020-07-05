import React, { Component, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSelectOption, IonItem, IonLabel, IonSelect } from '@ionic/react';
import CurrencySelect from '../components/CurrencySelect';
import ExploreContainer from '../components/ExploreContainer';
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'ticker';





class NewDashboard extends Component <{}, { currentCurrency: string }> {
  constructor(props : any) {
    super(props);

 
    this.state = {
      currentCurrency : ""
    };
  }
  
  
 
  render() {
    

    var name = "keks";

 
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>

        <CurrencySelect />

      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
        <IonCard>
          <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Verkaufspreis</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
          </IonCard>

      </IonContent>
    </IonPage>
        
        
    );
  }
}



export default NewDashboard;