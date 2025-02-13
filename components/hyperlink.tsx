import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

type LinkProps = {
    link: string;
    text: string;
}

const Hyperlink = (props: LinkProps) => {
    return (
        <Link style={styles.linkText} href={props.link}>{props.text}</Link>
    );
};

export default Hyperlink;



const styles = StyleSheet.create({
    linkText: { // Style for link text
        fontWeight: 'regular',
        fontSize: 20,
        color: '#E4AF0B',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 50,
        alignSelf: 'flex-start',
    },
});