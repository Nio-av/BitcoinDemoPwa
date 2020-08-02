import React, { useState, Component } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput } from '@ionic/react';



const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'tobtc?currency=';



class CalculatorElement extends Component<{ currentCurrency: string }, { currentCurrency: string, inputCurrencyValue: number, calculatedBitcoinValue: string }> {
    //const CalculatorElement : React.FC<ContainerProps> = ({ currentCurrency , currencys} )=> {

    constructor(props: any, currentCurrency: string, inputCurrencyValue: number, calculatedBitcoinValue: string) {
        super(props);


        this.state = {
            currentCurrency,
            inputCurrencyValue,
            calculatedBitcoinValue
        };

    }

    componentDidUpdate(previousProps : any , previousState : any){
        //console.log(previousProps.currentCurrency);
        
        if (previousProps.currentCurrency !== this.props.currentCurrency || previousState.inputCurrencyValue !== this.state.inputCurrencyValue) {
            console.log("CC: " + this.props.currentCurrency);
            console.log("CV: " + this.state.inputCurrencyValue);
            fetch(API + DEFAULT_QUERY + this.props.currentCurrency + '&value=' + this.state.inputCurrencyValue)
            .then(response => response.text())
            .then(data => this.setState(
                { calculatedBitcoinValue: data },
            ));
        }
        //*/
    }


    render() {
        //var selectedCurrency = this.props.currentCurrency;

        //const [inputCurrencyValue, setInputCurrencyValue] = useState<number>();



        //console.log("keks" + inputCurrencyValue);




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
