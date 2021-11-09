import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

export { firebaseAuth };

type FirebaseConfigType = {
  readonly apiKey: string;
  readonly authDomain: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
  readonly measurementId: string;
};

const getFirebaseConfig = (): FirebaseConfigType => ({
  apiKey: 'AIzaSyArhJ45U-aEZd1BRb2l_fZ70b3RxI2YJ6Y',
  authDomain: 'buddi-64137.firebaseapp.com',
  projectId: 'buddi-64137',
  storageBucket: 'buddi-64137.appspot.com',
  messagingSenderId: '556144940386',
  appId: '1:556144940386:web:93728bbe57f0406e3d483b',
  measurementId: 'G-4RBT8HHXT2',
});

export const firebaseApp = firebase.initializeApp(getFirebaseConfig());
const auth = firebaseAuth.getAuth(firebaseApp);

export const SendVerifyEmail = async (user: firebaseAuth.User) => firebaseAuth.sendEmailVerification(user);

export const CreateEmailAndPasswordUser = async (
  email: string,
  password: string,
): Promise<firebaseAuth.UserCredential> =>
  firebaseAuth.createUserWithEmailAndPassword(auth, email, password).then(credential => {
    SendVerifyEmail(credential.user);
    firebaseAuth.sendEmailVerification(credential.user);
    localStorage.setItem('emailForSignIn', email);
    return credential;
  });

export const SignInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<firebaseAuth.UserCredential> =>
  firebaseAuth.signInWithEmailAndPassword(auth, email, password).then(credentials => {
    localStorage.setItem('emailForSignIn', email);
    return credentials;
  });

export const SignInWithGoogle = async (): Promise<firebaseAuth.UserCredential> =>
  firebaseAuth.signInWithPopup(auth, new firebaseAuth.GoogleAuthProvider());
