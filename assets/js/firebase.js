
var firebaseConfig = {
  apiKey: "AIzaSyB-isfaLP9MHQHdGEOv9PWpx1fOAjDIgFM",
  authDomain: "project-adsense-26c65.firebaseapp.com",
  databaseURL: "https://project-adsense-26c65-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-adsense-26c65",
  storageBucket: "project-adsense-26c65.appspot.com",
  messagingSenderId: "608324017972",
  appId: "1:608324017972:web:ad8062f65c7044fbbacf61",
  measurementId: "G-SM8DP8G6Q4"
  };




// Initialize Firebase using the provided config object
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Reference to the Firebase database
const dbRef = firebase.database().ref();

// Function to update the content in the HTML elements
function updateDataOnPage(data) {
    document.getElementById('title').innerText = data.title;
    document.getElementById('subtitle').innerText = data.subtitle;
}

// Fetch data from Firebase
dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    updateDataOnPage(data);
});
