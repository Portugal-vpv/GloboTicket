import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.globologo}
                source={require('./images/globe.jpg')}
            />
            <Text style={styles.title}>Welcome to GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
        </View>
    );
}

const introText = `This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets
 This is just a random intro text. Lorem ipsum dolor mets`;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    textcontainer: {
        textAlign: 'center',
        paddingTop: 10
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
    }
});

export default Home;