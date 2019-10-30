import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './src/2.reducers'
import firebase from 'firebase'
import TodoListScreen from './src/components/TodoListScreen';
import TodoStack from './src/navigators/TodoStack';


export default function App() {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))

  var firebaseConfig = {
    apiKey: "AIzaSyCg552hKnP6fHTH98E4N3nADis3mwf-8Q0",
    authDomain: "vicmobileporject.firebaseapp.com",
    databaseURL: "https://vicmobileporject.firebaseio.com",
    projectId: "vicmobileporject",
    storageBucket: "vicmobileporject.appspot.com",
    messagingSenderId: "973551246254",
    appId: "1:973551246254:web:bb3f22a05432cba0fbc63f"

  };
  // Initialize Firebase

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  console.disableYellowBox = true
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoStack />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
