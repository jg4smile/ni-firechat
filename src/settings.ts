import { TabsPage } from './pages/tabs/tabs';
import { VerificationPage } from './pages/verification/verification';

export namespace Settings {
  // replace with your key
  export const firebaseConfig = {
    apiKey: "AIzaSyAhidhRNOa-NulCQI1cMP7xNncfpqNQeQ0",
    authDomain: "northstar-firechat.firebaseapp.com",
    databaseURL: "https://northstar-firechat.firebaseio.com",
    projectId: "northstar-firechat",
    storageBucket: "northstar-firechat.appspot.com",
    messagingSenderId: "319304131070"
  };

  // For Facebook Login
  export const facebookLoginEnabled = true;
  export const facebookAppId: string = "917139738452500"; // Not required, If you're not using FBLogin

  //For Google Login
  export const googleLoginEnabled = true;
  export const googleClientId: string = "319304131070-r3d2sbepl770vq2j6fhkrdedj7n98du1.apps.googleusercontent.com"; // Not Required, If you're not using Google+ login

  // For PhoneNumber Login
  // we used Facebook AccountKit for PhoneNumber Validation
  // Limitation: customToken will generate only if you have firebase blaze plan
  export const phoneLoginEnabled = true; // only works on real devices
  export const customTokenUrl: string = "https://us-central1-northstar-firechat.cloudfunctions.net/getCustomToken"; // Not Required, If you're not using PhoneNumber login

  export const homePage = TabsPage;
  export const verificationPage = VerificationPage;
}
