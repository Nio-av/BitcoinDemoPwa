import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { homeOutline, homeSharp, calculatorOutline, calculatorSharp, searchSharp, trendingUpOutline, trendingUpSharp, cogOutline, cogSharp, searchOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Details',
    url: '/details',
    iosIcon: searchOutline,
    mdIcon: searchSharp
  },
  {
    title: 'Umrechner',
    url: '/calculator',
    iosIcon: calculatorOutline,
    mdIcon: calculatorSharp
  },
  {
    title: 'Diagram',
    url: '/diagram',
    iosIcon: trendingUpOutline,
    mdIcon: trendingUpSharp
  },
  {
    title: 'Mein Bitcoin',
    url: '/mein-bitcoin',
    iosIcon: cogOutline,
    mdIcon: cogSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Bitcoin Information</IonListHeader>
          <IonNote>Open Source Bitcoin Information Tool</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
