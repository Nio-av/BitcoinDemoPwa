import React, { Component, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSelectOption, IonItem, IonLabel, IonSelect, IonBadge } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import BitcoinPrice from '../components/BitcoinPrice'
 
const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'q/';


const eventhandler = (data : any) => {
  data.preventDefault()
  console.log("data")
};

var metrics : any; 


const metricsUrlStrings = [
    "marketcap",
    "totalbc",
    "24hrtransactioncount",
    "24hrbtcsent",
    "hashrate",
    "getdifficulty"
]




class BitcoinDetails extends Component <{}, { metrics : any }> {
  constructor(props : any) {
    super(props);

 
    this.state = {
      metrics : {
        marketcap : "",
        totalbc : "",
        twentyFourTrtransactioncount : "",
        twentyFourHrbtcsent : "",
        hashrate : "",
        getdifficulty : ""
      }
    };

    
  }


  
  componentDidUpdate(prevProps : any) {
    console.log("update" + prevProps);
  }

  setMetric = ( metric : string , value : any ) => {
    console.log( metric + value);
  }


  fetchViaApi(metric : string){
      console.log("fetch " + metric);
    fetch(API + DEFAULT_QUERY + metric)
    .then(response => response.json())
    .then(data => this.setState(
        {metrics : data},
      ));
    
  }
  
 
  componentDidMount() {

    for(let metric of metricsUrlStrings){
        this.fetchViaApi(metric);
    }

    
  }



  
  

 
  render() {
    const currencys : any = this.state;

    var listCurrencys = (function () {
      console.log(currencys);
      /*
      for (let Currency in currencys.currencys) {
        entitys.push(<IonSelectOption value={marketcap}>{marketcap}</IonSelectOption>);
      }
      */
  
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

        <IonItem>
            <IonLabel>My Item</IonLabel>
            <IonBadge slot="end">22</IonBadge>
        </IonItem>
    </IonContent>
    </IonPage>
        
        
    );
  }
}



export default BitcoinDetails;