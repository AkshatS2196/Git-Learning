import React, {Component} from 'react'
import Page1 from './Page1';
//import rootReducer from './Store/rootReducer';
import detailReducer from './Store/detailReducer';
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react'

const rootReducer = combineReducers({
  detailReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['detailReducer'] // which reducer want to store
};

  const pReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(pReducer);
  const persistor = persistStore(store);
  class App extends Component
  {

    render()
    {
      return(
        <Provider store={store}>
        <PersistGate loading={null}

        persistor={persistor}>
        <Page1 />
        </PersistGate>
        </Provider>
        );
    }
  }
  export default App;
