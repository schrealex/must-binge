<template>
  <div id="app">
    <header class="page-header"></header>
    <section class="wrapper">
      <form class="new-game-form">
        <label class="new-game-label">
          New Game:
          <input v-model="title" type="text" class="new-game-input" placeholder="Title of the Game"/>

          <label class="new-game-input">
            <input
              type="checkbox"
              v-model="physical"
              class="game-item__checkbox">
            Has Physical Game
          </label>

          <label class="new-game-input">
            <input
              type="checkbox"
              v-model="finished"
              class="game-item__checkbox">
            Has Finished Game
          </label>

          <label class="new-game-input">
            <input
              type="checkbox"
              v-model="finishedDLC"
              class="game-item__checkbox">
            Has Finished DLC
          </label>

        </label>
        <button type="submit" @click.prevent="addGame()" class="new-game-button">Add</button>
      </form>
      <ul class="game-list">
        <li v-for="game in games" :key="game.id" class="game-item">
          <label v-if="currentlyEditing !== game.id" class="game-item-label">
            {{ game.title }} {{ game.physical ? 'P' : '' }} {{ game.finished ? 'F' : '' }} {{ game.finishedDLC ? 'F DLC' : '' }}
          </label>
          <div v-if="currentlyEditing !== game.id">
            <button
              @click="editGame(game)"
              class="game-button">
              <img src="./assets/pencil.svg" alt="Edit game">
            </button>
            <button @click="deleteGame(game)"
                    class="game-button">
              <img src="./assets/trash.svg" alt="Delete game">
            </button>
          </div>

          <form v-else class="edit-game-form">
            <label class="edit-game-label">
              Edit:
              <input type="text" v-model="gametitleEdit" class="edit-game-input">
            </label>
            <button
              type="submit"
              class="edit-game-button"
              @click.prevent="updateGameText(game)">
              Save
            </button>
          </form>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {gamesCollection} from './firebase';

  export default {
    name: 'app',
    data() {
      return {
        title: '',
        physical: true,
        finished: false,
        finishedDLC: false,
        games: [],
        currentlyEditing: null,
        gametitleEdit: ''
      }
    },
    firestore() {
      return {
        games: gamesCollection.orderBy('title', 'asc')
      }
    },
    methods: {
      addGame() {
        gamesCollection.add({
          title: this.title,
          physical: this.physical,
          finished: this.finished,
          finishedDLC: this.finishedDLC,
          // id: this.games.length,
          addedToCollectionAt: new Date()
        })
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
        this.title = '';
      },
      updateGame(game) {
        gamesCollection.doc(game.id).update({...game})
          .then(() => {
            console.log("Updated document with ID: ", game.id);
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      },
      editGame(game) {
        this.currentlyEditing = game.id;
        this.gametitleEdit = game.title;
      },
      updateGameText(game) {
        gamesCollection.doc(this.currentlyEditing).update({
          title: this.gametitleEdit
        })
          .then(function () {
            console.log("Updated document text with ID: ", game.id);
          })
          .catch(function (error) {
            console.error("Error updating document text: ", error);
          });
        this.currentlyEditing = null;
        this.gametitleEdit = '';
      },
      deleteGame(game) {
        gamesCollection.doc(game.id).delete()
          .then(() => {
            console.log("Deleted document with ID: ", game.id);
          })
          .catch((error) => {
            console.error("Error deleting document: ", error);
          });
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }

  button {
    cursor: pointer;
  }

  .page-header {
    padding: 5rem 0;
    width: 100%;
    background: #dc2e0a;
  }

  .wrapper {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .new-game-form {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 3px;
    border: 1px solid #FAFAFA;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, .15);
    margin-top: -3rem;
    background: white;
  }

  .new-game-label {
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: flex-start;
    text-align: left;
    font-weight: bold;
  }

  .new-game-input {
    padding: .5rem;
    border-radius: 3px;
    border: 1px solid lightgrey;
    font-size: 1rem;
    margin-top: .5rem;
    font-weight: normal;
  }

  .new-game-button {
    font-size: 1rem;
    padding: .5rem .7rem;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    background: #dc2e0a;
    flex: 1;
    margin-left: 1rem;
    border: 1px solid #dc2e0a;
  }

  .edit-game-form {
    width: 100%;
    justify-content: space-between;
    display: flex;
    padding: 1rem;
  }

  .edit-game-label {
    flex: 1;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .edit-game-input {
    padding: .5rem;
    border-radius: 3px;
    border: 1px solid lightgrey;
    font-size: 1rem;
    font-weight: normal;
    flex: 1;
    margin-left: 1rem;
  }

  .edit-game-button {
    font-size: 1rem;
    padding: .5rem .7rem;
    border-radius: 3px;
    color: #dc2e0a;
    font-weight: bold;
    margin-left: 1rem;
    border: 1px solid #dc2e0a;
  }

  .game-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;

    &:first-of-type {
      border-radius: 3px 3px 0 0;
    }

    &:last-of-type {
      border-bottom: 1px solid lightgrey;
      border-radius: 0 0 3px 3px;
    }
  }

  .game-item-label {
    cursor: pointer;
    padding: 1rem;
  }

  .game-item__checkbox {
    margin-right: 1rem;
  }

  .game-list {
    max-width: 100%;
    margin: 2rem auto;
  }

  .game-button {
    background: transparent;
    border: 0;
    padding: .5rem;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
