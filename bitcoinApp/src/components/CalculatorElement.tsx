import React, { Component } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput } from '@ionic/react';



const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'tobtc?currency=';



class CalculatorElement extends Component<{ currentCurrency: string }, { currentCurrency: string, inputCurrencyValue: number, calculatedBitcoinValue: string }> {

    constructor(props: any, currentCurrency: string, inputCurrencyValue: number, calculatedBitcoinValue: string) {
        super(props);

        this.state = {
            currentCurrency,
            inputCurrencyValue,
            calculatedBitcoinValue
        };

    }

    componentDidUpdate(previousProps: any, previousState: any) {
        //avoid API Calls before any value has been set
        if ( !isNaN(this.state.inputCurrencyValue) && this.props.currentCurrency !== "" ) {
            //avoid infinity loop
            if (previousProps.currentCurrency !== this.props.currentCurrency || previousState.inputCurrencyValue !== this.state.inputCurrencyValue) {
                // get calculated Data from BITCOIN API
                fetch(API + DEFAULT_QUERY + this.props.currentCurrency + '&value=' + this.state.inputCurrencyValue)
                    .then(response => response.text())
                    .then(data => this.setState(
                        { calculatedBitcoinValue: data },
                    ));
            }
        }
    }


    render() {
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Currency Calculator: Bitcoin to {this.props.currentCurrency}</IonCardTitle>
                </IonCardHeader>
                <IonItem>
                    <IonInput type="number" value={this.state.inputCurrencyValue} placeholder="Enter Input" onIonChange={e => this.setState({ inputCurrencyValue: (parseInt(e.detail.value!, 10)) })} clearInput></IonInput>
                </IonItem>
                <IonCardContent>
                    <p>{this.state.inputCurrencyValue} {this.props.currentCurrency} entsprechen {this.state.calculatedBitcoinValue} Bitcoin</p>
                </IonCardContent>
            </IonCard>

        );
    }
};


export default CalculatorElement;
