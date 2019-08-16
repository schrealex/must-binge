const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCSe2SkQNR0eYpY_Wp4VJb0Q0tXv8yyGIM",
  authDomain: "must-binge.firebaseapp.com",
  databaseURL: "https://must-binge.firebaseio.com",
  projectId: "must-binge",
  storageBucket: "",
  messagingSenderId: "2306870811",
  appId: "1:2306870811:web:4e9cd496896c86d9"
});

const db = firebase.firestore();

const games =[
  {
    "title": "1-2-Switch",
    "physical": true,
    "finished": null,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Axiom Verge",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Captain Toad: Treasure Tracker",
    "physical": true,
    "finished": true,
    "finishedDLC": true,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Castlevania Anniversary Collection",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Celeste",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Commander Keen in Keen Dreams",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Crypt of the NecroDancer",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Dark Souls",
    "physical": true,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Doom",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "DRAGON BALL Xenoverse 2",
    "physical": true,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "FIFA 18",
    "physical": false,
    "finished": null,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "FIFA 19",
    "physical": false,
    "finished": null,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Hollow Knight",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Inside",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Kamiko",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Layers of Fear",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Mario + Rabbids Kingdom Battle",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Mega Man 11",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Mega Man Legacy Collection",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Mega Man Legacy Collection 2",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "MIGHTY GUNVOLT BURST",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Minit",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Mortal Kombat 11",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Octopath Traveler",
    "physical": true,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Outlast",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Owlboy",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Pokémon: Let's Go, Pikachu!",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Resident Evil Revelations 2",
    "physical": false,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Shovel Knight",
    "physical": false,
    "finished": true,
    "finishedDLC": true,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Snipperclips Plus - Cut it out, together!",
    "physical": true,
    "finished": true,
    "finishedDLC": true,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Sonic Mania",
    "physical": true,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Splatoon 2",
    "physical": true,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "SteamWorld Dig",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "SteamWorld Dig 2",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Super Mario Odyssey",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Super Mario Party",
    "physical": true,
    "finished": null,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Super Smash Bros. Ultimate",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "The Legend of Zelda: Breath of the Wild",
    "physical": true,
    "finished": true,
    "finishedDLC": false,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "The Messenger",
    "physical": false,
    "finished": true,
    "finishedDLC": true,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Ultra Street Fighter II: The Final Challengers",
    "physical": true,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Wolfenstein II: The New Colossus",
    "physical": true,
    "finished": false,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Wonder Boy: The Dragon's Trap",
    "physical": false,
    "finished": true,
    "finishedDLC": null,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  },
  {
    "title": "Xenoblade Chronicles 2",
    "physical": true,
    "finished": false,
    "finishedDLC": false,
    "addedToCollectionAt": "2019-08-16T19:30:30.000Z"
  }
];

games.forEach(function(game) {
  db.collection("games").add({
    title: game.title,
    physical: game.physical,
    finished: game.finished,
    finishedDLC: game.finishedDLC,
    addedToCollectionAt: new Date()
  }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});
