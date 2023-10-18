import FaceBookImage from '../images/facebook.svg';
import InstagramImage from '../images/instagram.svg';
import WhatsAppImage from '../images/whatsapp.svg';

export const NetworkRoute: ISocialNetworkRoute[] = [
    {
        buttonText: "Підпишись",
        buttonValue:"facebook",
        buttonImage:FaceBookImage
    },
    {
        buttonText: "Поділись",
        buttonValue:"whatsapp",
        buttonImage:WhatsAppImage
    },
    {
        buttonText: "Підпишись",
        buttonValue:"insta",
        buttonImage:InstagramImage
    }
]