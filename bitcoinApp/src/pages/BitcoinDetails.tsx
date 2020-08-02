import React, { Component } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import DetailElement from '../components/DetailElement';



const metricsUrlStrings = [
  "marketcap",
  "totalbc",
  "24hrtransactioncount",
  "24hrbtcsent",
  "hashrate",
  "getdifficulty"
]


class BitcoinDetails extends Component<{}, { searchText: string | undefined }> {
  constructor(props: any) {
    super(props);

    this.state = {
      searchText: ""
    };
  }


  render() {
    const searchText: any = this.state.searchText;

    var listDetails = (function () {
      var entitys = [];



      for (let metric of metricsUrlStrings) {
        if (metric.toLowerCase().includes(searchText.toLowerCase())) {
          entitys.push(<DetailElement metric={metric} />);
        }
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
          <IonSearchbar value={this.state.searchText} onIonChange={e => (this.setState({ searchText: e.detail.value },))}></IonSearchbar>
        </IonHeader>

        <IonContent>
          {listDetails}
        </IonContent>
      </IonPage>


    );
  }
}



export default BitcoinDetails;