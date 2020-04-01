import React, { Component } from 'react'
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AuthInput from '../components/AuthInput';
import backgroundImage from '../../assets/imgs/orion.jpg'
import AddTatto from './AddTatto';



class Home extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.title}> Living Tattos</Text>
                    </View>
                    <View style={styles.userContainer}>
                        <Text style={styles.userContainer}>Seja Bem vindo!</Text>
                    </View>
                </View>

                {/*<View style={styles.rowContainer}>*/}
                {/*    <ImageBackground source={backgroundImage} style={styles.background}>*/}
                {/*        <View style={styles.article}>*/}
                {/*            <Text style={styles.subtitle} > Que tal adicionar a sua tattoo no Viveiro?</Text>*/}
                {/*            <TouchableOpacity onPress= >*/}
                {/*            <Text style={styles.subtitle} >Para isso clique aqui!</Text>*/}
                {/*            </TouchableOpacity>*/}
                {/*        </View>*/}
                {/*    </ImageBackground>*/}
                {/*</View>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: Platform.OS === 'ios' ? 20 :0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 20
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        },
    article: {
        fontSize: 90,
    },
    subtitle:{
        color: '#FFF',
    }
})


export default Home;
