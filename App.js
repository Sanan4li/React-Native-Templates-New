import React from 'react';
import {View, Text, Button} from "react-native";
import BottomNavigator from "./Navigation/BottomNavigator";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import TopNavigator from "./Navigation/TopNavigator";
const App: () => React$Node = () => {
  return (
  
  //  <BottomNavigator/>
   <DrawerNavigator/>
    //  <TopNavigator/>
  );
};

export default App;
