import firebase from 'firebase'; // 4.8.1

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDrIffJYEQnKp7f1OJHvCRMuSxIPp8tmzo",
  authDomain: "chatfunc.firebaseapp.com",
  projectId: "chatfunc",
  storageBucket: "chatfunc.appspot.com",
     databaseURL: 'https://chatfunc-default-rtdb.firebaseio.com/',
  messagingSenderId: "207665779919",
  appId: "1:207665779919:web:118a3609c5bf90f7ab53ba",
  measurementId: "G-D8SL7BW7QE"
      });
    }
  };



  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = messages => {
    for (let i = 0; i < messages.length; i++) 
    {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

 
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
