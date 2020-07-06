# BitcoinDemoPwa

## Install Instructions
This is a React Project with Ionic Components.

To run this projet, you´ll need:
- NPM
- React
- Ionic

This Project is a demo projekt. Not all Features are includet yet.

For local usage, you can just use ionic serve in bitcoinApp Directory

## Known Issues
- In local development, there is an Issue with Firefox Developer Edition. Normal Firefox works fine.
- There are some TODO: - comments in the code.
- Screen "Bitcoin Umrechner", "Bitcoin Diagram" & "Mein Bitcoin" are missing.

## Special Ionic Feature while running via Firebase etc.:
- Offline Mode
- Install Propt on iOS
- Install Button

(Hopefully, that is working... Not tested yet, but should be. Same code as in an other Project ;) )


## Features

### Screens
- Dashboard
- Bitcoin Details
- Bitcoin Umrechner
- Bitcoin Diagram
- Mein Bitcoin

### Dashboard
- Aktueller Bitcoin-Preis in unterschiedlichen Währungen
    - Verkaufspreis
    - Einzelpreis
- Das Dashboard wird bei Eingabe unter "Mein Bitcoin" um eine weitere Anzeige erweitert. Hier sieht er ab sofort wie viel Bitcoin er hat und was diese aktuell in EUR Wert ist.

### Bitcoin Details
- Marktkapitalisierung (marketcap)
- Anzahl aller Bitcoins im Umlauf (totalbc)
- Anzahl der Transaktionen in den letzten 24h (24hrtransactioncount)
- Anzahl gesendeter Bitcoin in den letzten 24h (24hrbtcsent)
- Aktuelle Hashrate (hashrate)
- Aktueller Schwierigkeitsgrad (getdifficulty)
### Bitcoin Umrechner
- Die View erlaubt eine Eingabe in EUR, USD, AUD, NZD und GBP
- Output: Angezeigt wird der umgerechnete Betrag in BTC (Bitcoin)
### Bitcoin Diagramm
- sinnvolles Diagramm anzeigen


### Meine Bitcoin
- Der vom Nutzer hinterlegte Wert wird abgespeichert
- Optional soll der Benutzer gleich mehrere Bitcoin-Bestände einpflegen können, oder sogar real existierende Wallets.