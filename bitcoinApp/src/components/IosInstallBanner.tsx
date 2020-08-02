import { add } from 'ionicons/icons';
import React, { useState } from 'react';
import { IonToast } from '@ionic/react';



function bannerInSession(setBannerInSession: any = false) {
    //check weather InstallPropt has allready been shown in this session
    if (((sessionStorage.getItem('isBannerShown') == (false || null))) && (setBannerInSession) == true) {
        sessionStorage.setItem('isBannerShown', setBannerInSession);
    }
    return sessionStorage.getItem('isBannerShown');
}



const IosInstallBanner: React.FC = ({ }) => {

    const [showIosToast, setShowIosToast] = useState(bannerInSession());

    function showIosInstall() {


        const isIos = () => {
            return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
        };
        const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
        console.log("bannerInSession()! " + !bannerInSession());
        if (isIos() && !isInStandaloneMode() && !bannerInSession()) {
            return <IonToast
                isOpen={!false}
                //onDidDismiss={() => setShowToast2(false)}
                message={'To install the app, tap "Share" icon below and select "Add to Home Screen".'}
                position="bottom"
                onDidDismiss={() => (bannerInSession(true))}
                mode="ios"
                buttons={[
                    {
                        side: 'start',
                        icon: add,
                    },
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]}
            />
        }
    }



    return (
        <>
            {showIosInstall()}
        </>
    )
};


export default IosInstallBanner;
