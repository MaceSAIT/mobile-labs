import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { ExpoRouter } from "expo-router";
import { Link } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

//export default ExpoRouter;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <Text style={styles.textHeader}>WELCOME</Text>


      <View style={styles.whiteBox}>
        <Link href="/(tabs)/yyc" style={styles.iconTextWrapper}>
          <View style={styles.iconTextWrapper}>
            <MaterialCommunityIcons name="map-marker" size={24} color="#E4AF0B" />
            <Text style={styles.textButtons}>Calgary</Text>
          </View>
        </Link>
      </View>


      <Text></Text>

      <View style={styles.whiteBox}>
        <Link href="/(tabs)/yeg" style={styles.iconTextWrapper}>
          <View style={styles.iconTextWrapper}>
          <MaterialCommunityIcons name="map-marker" size={24} color="#E4AF0B" />
            <Text style={styles.textButtons}>Edmonton</Text>
          </View>
        </Link>
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
  whiteBox: { // Style for white button boxes
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  whiteBoxLine: { // Style for white button lines
    backgroundColor: '#C6C5CA',
    borderWidth: 0,
    width: 300,
    height: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  textHeader: { // Style for the "WELCOME" header
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '15%',
    paddingBottom: '15%'
  },

  textButtons: { // Style for button text
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  }
  ,
  iconText: { // Style for button text
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
    marginLeft: 10,
  }
  // Orange icons are #E4AF0B
  // White box lines are #C6C5CA
});
