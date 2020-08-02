import React, { Component, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSelectOption, IonItem, IonLabel, IonSelect } from '@ionic/react';
import CalculatorElement from '../components/CalculatorElement'
import { Bar , Line } from 'react-chartjs-2';


const APIURL = 'https://api.blockchain.info/charts/transactions-per-second?timespan=2weeks&rollingAverage=8hours&format=json';


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 42, 81, 56, 55, 40]
      }
    ]
  };

const eventhandler = (data: any) => {
  data.preventDefault()
  console.log(data)
};

var currentCurrency: string;
var currencys: any;


class Diagram extends Component<{}, { currentCurrency: any, currencys: object }> {
  constructor(props: any) {
    super(props);


    this.state = {
      currencys: {},
      currentCurrency: ""
    };


  }


  componentDidMount() {
    fetch(APIURL )
      .then(response => response.json())
      .then(data => this.setState(
        { currencys: data },

      ));
      console.log(this.state);
  }

  setMyCurrency = (cur: string) => {
    currentCurrency = cur;
    this.setState({ currentCurrency: cur });
  }






  render() {


    var name = "Diagram";

    





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
          <Line
            data={data}
            width={100}
            height={100}
            options={{
                maintainAspectRatio: false
            }}
            />
        </IonContent>
      </IonPage>


    );
  }
}



export default Diagram;