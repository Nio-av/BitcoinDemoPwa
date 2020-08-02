import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';



interface ContainerProps {
    currentCurrency: string;
    currencys: any;
}

var symbol: string;
var buy: number;
var sell: number;
var last: number;
var fifteenM: number;




const BitcoinPrice: React.FC<ContainerProps> = ({ currentCurrency, currencys }) => {
    var selectedCurrency = currencys.currencys[currentCurrency];

    try {
        symbol = selectedCurrency.symbol;
        buy = selectedCurrency.buy;
        sell = selectedCurrency.sell;
        last = selectedCurrency.last;
        // fifteenM = selectedCurrency.15m;
        // TODO: fix 15m issue (Parsing error: An identifier or keyword cannot immediately follow a numeric literal)
    } catch{
        //this is a fallback if API-Request fails
    }





    console.log(currencys);

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Bitcoin Price {currentCurrency} {symbol}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Buy: {buy}</p>
                <p>Sell: {sell}</p>
                <p>Last: {last}</p>
            </IonCardContent>
        </IonCard>

    );
};


export default BitcoinPrice;
