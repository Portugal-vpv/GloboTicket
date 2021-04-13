import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Menu from './menu';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.globologo}
                source={require('./images/globe.jpg')}
            />
            <Text style={styles.title}>Welcome to GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <Text style={styles.subtitle}>My lightsaber is {props.lightsaber}</Text>
            <Image 
                style={styles.heroimage}
                source={require('./images/globe.jpg')}
            />
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
            <View style={styles.menu}>
                <Menu />
            </View>
        </View>
    );
}

const introText = `This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets
`;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    textcontainer: {
        padding: 20
    },
    globologo: {
        height: 140,
        width: 150,
    },
    title: {
        fontFamily: "Ubuntu-Bold",
        paddingTop: 20,
        fontSize: 16
    },
    subtitle: {
        paddingTop: 5,
        fontFamily: 'Ubuntu-Bold',
        fontSize: 14
    },
    content: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '300',
        width: 300
    },
    heroimage: {
        height: 140,
        width: '100%'
    },
    menu: {
        position: 'absolute',
        bottom: 10
    }
});

export default Home;