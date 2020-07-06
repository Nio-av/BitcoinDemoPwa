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

  

class DetailElement extends Component <{metric : string  }, { metricValue: string}> {
  constructor(props : any, metricValue : string) {
    super(props);

    
    this.state = {
      metricValue : ""
    };
    
  }

  componentDidUpdate(prevProps : any) {
    console.log(this.state.metricValue);
  }

  setMetric = ( metric : string , value : any ) => {
    console.log( metric + value);
  }


  fetchViaApi(metric : string){
    //console.log("fetch " + metric);
    fetch(API + DEFAULT_QUERY + metric)
    .then(response => response.text())
    .then(data => this.setState(
        {metricValue : data},
      ));
    
  }
  
 
  componentDidMount() {

    
      this.fetchViaApi(this.props.metric);
    

    
  }


  render() {
    const metric = this.props.metric;
 
    return (
      <IonItem>
        <IonLabel>{metric}</IonLabel>
        <IonBadge slot="end">{(this.state.metricValue)}</IonBadge>
      </IonItem>
        
        
    );
  }
}




export default DetailElement;
