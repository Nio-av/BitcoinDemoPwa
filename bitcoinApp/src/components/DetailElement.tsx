import { IonItem, IonLabel, IonBadge } from '@ionic/react';
import React, { Component } from 'react';

const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'q/';




class DetailElement extends Component<{ metric: string }, { metricValue: string }> {
  constructor(props: any, metricValue: string) {
    super(props);


    this.state = {
      metricValue: ""
    };

  }


  componentDidMount() {
    fetch(API + DEFAULT_QUERY + this.props.metric)
      .then(response => response.text())
      .then(data => this.setState(
        { metricValue: data },
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
