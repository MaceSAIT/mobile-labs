import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { ExpoRouter } from "expo-router";
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import Hyperlink from '../../components/hyperlink';
import Logout from '../../components/logout';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Logout text="Logout"/>

      <Text style={styles.textHeader}>Edmonton</Text>
      <Hyperlink link='https://www.edmonton.ca/' text='City Page'/>
      <Image source={{uri: 'https://cityuniversity.ca/wp-content/uploads/2021/01/iStock-1136615456-scaled.jpg'}} style={{width: 250, height: 250, alignSelf: 'center'}}/>



      <Text style={styles.textSubHeader}>About</Text>

      <View style={styles.whiteBox}>
        <View style={styles.iconTextWrapper}>
          <Text style={styles.textBody}>
          Edmonton is the capital city of the Canadian province of Alberta.
          It is situated on the North Saskatchewan River and is the centre of the Edmonton Metropolitan Region, which is surrounded by Alberta's central region.
          </Text>
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
  whiteBox: { // Style for white button boxes
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 20,
    width: 350,
    height: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textHeader: { // Style for the title header
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginLeft: 40,
    marginTop: 5,
  },
  textSubHeader: { // Style for the sub header
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  textBody: { // Style for body text
    fontWeight: 'regular',
    fontSize: 20,
    color: 'black',
  },
  linkText: { // Style for link text
    fontWeight: 'regular',
    fontSize: 20,
    color: '#E4AF0B',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    alignSelf: 'flex-start',
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  }
  // Orange icons are #E4AF0B
  // White box lines are #C6C5CA
});
