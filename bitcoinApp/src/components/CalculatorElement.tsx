import React, {useState , Component } from 'react';
import {  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput } from '@ionic/react';



const API = 'https://api.blockchain.info/';
const DEFAULT_QUERY = 'tobtc?currency=';



class CalculatorElement extends Component <{currentCurrency : string  }, { currentCurrency: string , inputCurrencyValue : number}> {
//const CalculatorElement : React.FC<ContainerProps> = ({ currentCurrency , currencys} )=> {

    constructor(props : any, currentCurrency : string, inputCurrencyValue : number ) {
        super(props);
    
        
        this.state = {
            currentCurrency : "",
            inputCurrencyValue
        };
        
      }

    render () {
        //var selectedCurrency = this.props.currentCurrency;

        //const [inputCurrencyValue, setInputCurrencyValue] = useState<number>();
    


        //console.log("keks" + inputCurrencyValue);
        



        return (
            <IonCard>
                <IonCardHeader>
        <IonCardTitle>Currency Calculator: Bitcoin to {this.state.currentCurrency}</IonCardTitle>
                </IonCardHeader>
                <IonItem>
                    <IonInput type="number" value={this.state.inputCurrencyValue} placeholder="Enter Input" onIonChange={e => this.setState( {inputCurrencyValue : (parseInt(e.detail.value!, 10)) }  )} clearInput></IonInput>
                </IonItem>
                <IonCardContent>
                    <p>{this.state.inputCurrencyValue} {this.state.currentCurrency} entsprechen XXXX Bitcoin</p>
                </IonCardContent>
            </IonCard>
            
        );
    }
};


export default CalculatorElement;
