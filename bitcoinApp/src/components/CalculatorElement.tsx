import React, {useState} from 'react';
import {  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput } from '@ionic/react';



interface ContainerProps {
    currentCurrency: string;
    currencys: any;
  }

var symbol : string;
var buy : number;
var sell : number;
var last : number;
var fifteenM : number;






const CalculatorElement : React.FC<ContainerProps> = ({ currentCurrency , currencys} )=> {
    var selectedCurrency = currencys.currencys[currentCurrency];

    const [inputCurrencyValue, setInputCurrencyValue] = useState<number>();
    
    try{
        symbol = selectedCurrency.symbol;
        buy = selectedCurrency.buy;
        sell = selectedCurrency.sell;
        last = selectedCurrency.last;
        // fifteenM = selectedCurrency.15m;
        // TODO: fix 15m issue (Parsing error: An identifier or keyword cannot immediately follow a numeric literal)
    } catch{
        //this is a fallback if API-Request fails
    }



    console.log("keks" + inputCurrencyValue);
    


    console.log(currencys);

    return (
        <IonCard>
            <IonCardHeader>
    <IonCardTitle>Currency Calculator: Bitcoin to {currentCurrency}</IonCardTitle>
            </IonCardHeader>
            <IonItem>
                <IonInput type="number" value={inputCurrencyValue} placeholder="Enter Input" onIonChange={e => setInputCurrencyValue(parseInt(e.detail.value!, 10))} clearInput></IonInput>
            </IonItem>
            <IonCardContent>
                <p>Buy: {buy}</p>
            </IonCardContent>
        </IonCard>
        
    );
};


export default CalculatorElement;
