import React, { Component, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSelectOption, IonItem, IonLabel, IonSelect } from '@ionic/react';
import CalculatorElement from '../components/CalculatorElement'

const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'ticker';



const eventhandler = (data: any) => {
  data.preventDefault()
  console.log("data")
};

var currentCurrency: string;
var currencys: any;


class Calculator extends Component<{}, { currentCurrency: any, currencys: object }> {
  constructor(props: any) {
    super(props);


    this.state = {
      currencys: {},
      currentCurrency: ""
    };


  }



  componentDidUpdate(prevProps: any) {
    console.log("update" + prevProps);
  }


  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState(
        { currencys: data },

      ));
  }

  setMyCurrency = (cur: string) => {
    currentCurrency = cur;
    this.setState({ currentCurrency: cur });
  }






  render() {
    const currencys: any = this.state;

    var listCurrencys = (function () {
      var entitys = [];
      console.log(currencys);
      for (let Currency in currencys.currencys) {
        entitys.push(<IonSelectOption value={Currency}>{Currency}</IonSelectOption>);
      }

      return entitys;
    }());

    var name = "Calculator";





    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
          <IonItem>
            <IonLabel>Currency:</IonLabel>
            <IonSelect interface="popover" value={this.state.currentCurrency} onIonChange={e => (this.setMyCurrency(e.detail.value))}>
              {listCurrencys}
            </IonSelect>
          </IonItem>

        </IonHeader>

        <IonContent>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <CalculatorElement currentCurrency={this.state.currentCurrency} />

        </IonContent>
      </IonPage>


    );
  }
}



export default Calculator;