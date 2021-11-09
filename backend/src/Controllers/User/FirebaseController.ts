import { getEnvironementVariable } from '../../Shared/EnvrironmentHelper';
import { initializeApp } from 'firebase/app';

export type FirebaseConfigType = {
  readonly apiKey: string;
  readonly authDomain: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
  readonly measurementId: string;
};

export const getFirebaseConfig = (): FirebaseConfigType | undefined => {
  const apiKey = getEnvironementVariable('FIREBASE_API_KEY', false);
  const authDomain = getEnvironementVariable('FIREBASE_AUTH_DOMAIN', false);
  const projectId = getEnvironementVariable('FIREBASE_PROJECT_ID', false);
  const storageBucket = getEnvironementVariable('FIREBASE_STORAGE_BUCKET', false);
  const messagingSenderId = getEnvironementVariable('FIREBASE_MESSAGING_SENDER_ID', false);
  const appId = getEnvironementVariable('FIREBASE_APP_ID', false);
  const measurementId = getEnvironementVariable('FIREBASE_MEASUREMENT_ID', false);

  if (apiKey && authDomain && projectId && storageBucket && messagingSenderId && appId && measurementId) {
    return {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      measurementId,
    };
  } else {
    return undefined;
  }
};

export const getFirebaseApp = (config: FirebaseConfigType) => initializeApp(config);
