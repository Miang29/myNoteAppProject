import { StyleSheet,View ,TouchableOpacity,Text} from 'react-native';
import * as React from 'react';
import TodoNotesScreen from './TodoNotesScreen';



export default function HomeScreen() {
  


  return (
    <View style={styles.container}>
   <TouchableOpacity
      style={styles.Plus}
  onPress= {(TodoNotesScreen)}>
      <Text style={styles.PlusSize}>+</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#DEB1B8"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor:'#AF715D',

  },
  Plus: {
    height: 50,
    width: '15%',
    justifyContent: 'center',
    alignItems:'center',
    padding:1,
    borderRadius:80,
    backgroundColor:'#AF715D',
    marginTop:520,
    marginLeft:230,
  },
PlusSize: {
  color: 'white',
  fontSize: 30,
  textAlign:'center'
},
});


