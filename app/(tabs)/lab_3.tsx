import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { ExpoRouter } from "expo-router";
import { Link } from 'expo-router';

//export default ExpoRouter;

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.iconText}>Edit</Text>

      <Text style={styles.textHeader}>Lab 3</Text>

      <StatusBar style="auto" />



      <View style={styles.buttonContainer}>

        <View style={styles.addBox}>
          <Link href="/notes" style={styles.iconTextWrapper}>
            <AntDesign name='pluscircle' size={24} color='#E4AF0B'/>
          </Link>
        </View>
        
        <View style={styles.subBox}>
          <Link href="/notes" style={styles.iconTextWrapper}>
            <AntDesign name='minuscircle' size={24} color='#E4AF0B'/>
          </Link>
        </View>

      </View>

    





    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F3F2F8',
    //alignItems: 'center',
    justifyContent: 'flex-start',
  },
  addBox: { // Style for add button box
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 100,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subBox: { // Style for subtract button box
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 100,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textHeader: { // Style for the title header
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginLeft: 40,
    marginTop: 10,
  },
  textButtons: { // Style for button text
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  },
  iconText: { // Style for edit text
    fontWeight: 'regular',
    fontSize: 20,
    color: '#E4AF0B',
    marginTop: 40,
    marginRight: 30,
    alignSelf: 'flex-end',
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
  // Orange icons are #E4AF0B
  // White box lines are #C6C5CA
});
