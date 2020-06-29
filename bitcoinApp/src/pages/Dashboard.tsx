import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSelectOption } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

//const BitcoinPrice = require('https://blockchain.info/ticker');

fetch('https://api.blockchain.info/ticker')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData)
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })

const Dashboard: React.FC = () => {

  const { name } = useParams<{ name: string; }>();


  /*
  var listCurrency = (function () {
    var entitys = [];
    for (let Currency in BitcoinPrice) {
        entitys.push(<IonSelectOption value={Currency}>{Currency}</IonSelectOption>);
    }

    return entitys;
  }());
  //*/


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
};

export default Dashboard;
