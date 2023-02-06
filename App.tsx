//importing Libraries
import React from 'react';
import {
    View,
    Text,
    StyleSheet,

  }
     from 'react-native';

const App = () => {

  
   return (
    //parentView
    <View style = {styles.parent}>
      {/* HeaderVeiew */}
      <View style = {styles.header}>
        <Text>
          {"Header"}
        </Text>
      </View>
      {/* middle */}
      <View style = {styles.middle}>
      <Text>
        {"Helo"}
        </Text>
        </View>
        {/* footerView */}
        <View style = {styles.footer}>
          <Text>
            {"Footer"}
          </Text>
        </View>
    </View>
   )
    }

const styles = StyleSheet.create({
  parent :{
    flex : 1,

  },
  header:{
    flex : 2,
    backgroundColor : 'cyan',
  },
  middle :{
    flex: 6,
    backgroundColor  :'#0ced48',
  },
  footer : {
    flex : 2,
    backgroundColor : 'yellow',
  }
})
export default App;
