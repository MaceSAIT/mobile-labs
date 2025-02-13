import React from 'react';
import { Link } from 'expo-router';
import { Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

type LogoutProps = {
    text: string;
}

const Logout = (props: LogoutProps) => {
    const router = useRouter();

    const handleLogout = async () => {
        router.replace('/');
    }

    return (
        <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.linkText}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default Logout;



const styles = StyleSheet.create({
    linkText: { // Style for link text
        fontWeight: 'regular',
        fontSize: 20,
        color: '#807F85',
        marginTop: 5,
        marginBottom: 0,
        marginRight: 20,
        alignSelf: 'flex-end',
    },
});