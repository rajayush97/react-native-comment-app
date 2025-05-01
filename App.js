import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import CommentListScreen from './src/screens/CommentListScreen';
import Toast from 'react-native-toast-message';


const App = () => {
  return (
    <Provider store={store}>
      <CommentListScreen />
      <Toast />  
    </Provider>
  );
};

export default App;
