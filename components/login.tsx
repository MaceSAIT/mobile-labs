import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as Credentials from '../credentials.json'; // Import credentials
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const validatePassword = (password: string): boolean => { // Validate the pass word base on the criteria
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\-])[A-Za-z\d@$!%*?&#\-]{8,}$/
        return passwordRegex.test(password);
    };

    const handleLogin = () => { // Handle login and possible errors/alerts
        if (username.length < 5) {
            Alert.alert("Error", "Username must be at least 5 characters long.");
            return;
        }

        // Debug logs
        console.log("Password valid status:",validatePassword(password));
        //console.log("Input password:",password,"END");


        if (!validatePassword(password)) {
            Alert.alert("Error", "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        const users = Credentials.users; // Access the users array
        const user = users.find(u => u.username === username.trim() && u.password === password.trim()); // Trim whitespace

        if (user) {
            // Successful login, navigate to Calgary Page
            router.push('/yyc');
        } else {
            Alert.alert("Error", "Invalid username or password.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <TextInput
                    style={styles.textLogin}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />
            </View>
            <View style={styles.loginBox}>
                <TextInput
                    style={styles.textLogin}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry // Hide password
                />
            </View>
            <TouchableOpacity style={styles.whiteBox} onPress={handleLogin}>
                <View style={styles.iconTextWrapper}>
                    <FontAwesome5 name="user-check" size={20} color="#E4AF0B" />
                    <Text style={styles.textButtons}>Sign In</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

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
        padding: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginBox: { // Style for grey login box
        backgroundColor: '#E4E3E9',
        borderWidth: 0,
        borderRadius: 20,
        width: 350,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    textHeader: { // Style for the header
        fontWeight: 'bold',
        fontSize: 50,
        color: 'black',
        marginLeft: 40,
        marginTop: 100,
    },
    textLogin: { // Style for the login text
        fontWeight: 'regular',
        fontSize: 20,
        color: '#807F85',
        marginLeft: 20,
    },
    textButtons: { // Style for button text
        fontWeight: 'regular',
        fontSize: 20,
        color: 'black',
        marginLeft: 20,
    },
    iconTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    }
});


export default Login;