import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import globoTickets from './ticketsDB'; 

const Tickets = ({navigation}) => {
    const ticketItem = ({item}) => {

        return(
            <View style={styles.tickets}>
                <View>
                    <Image 
                        style={styles.img}
                        source={item.image}
                    />
                </View>
                <View>
                    <Text style={styles.tickettitle}>
                        {item.event}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        {item.shortDescription}
                    </Text>
                    <Text
                        style={styles.ticketdescription}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {item.description}
                    </Text>
                    <Text style={styles.price}>
                        {item.price}
                    </Text>
                    <TouchableOpacity
                        onPress={() =>{
                            navigation.navigate('Purchase', {tickId: item.eventId})
                        }}
                    >
                        <Text style={styles.ticketbutton}>
                            GET TICKETS
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <FlatList
                data={globoTickets}
                renderItem={ticketItem}
                keyExtractor={(item) => item.eventId}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15
    },
    tickets: {
        flexDirection: 'column'
    },
    img: {
        height: 130,
        width: '100%'
    },
    tickettitle: {
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ticketshortdescription: {
        fontFamily: 'Ubuntu-Light',
        fontWeight: '600',
        padding: 15
    },
    price: {
        textAlign: 'center'
    },  
    ticketbutton: {
        fontFamily: 'Ubuntu-Bold',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 15,
        paddingTop: 5

    }

});

export default Tickets;