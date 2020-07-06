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
  
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY + this.props.metric)
    .then(response => response.text())
    .then(data => this.setState(
        {metricValue : data},
      ));
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
