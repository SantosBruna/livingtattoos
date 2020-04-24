import React, { Component } from 'react'
import {ImageBackground, StyleSheet, Text,Image, TouchableOpacity, View} from 'react-native';
import AuthInput from '../components/AuthInput';
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

                <View style={styles.rowContainer}>
                    <Image source={require('../../assets/imgs/cobraViva.jpg')} style={styles.image}/>
                        <View style={styles.article}>
                            <Text style={styles.subtitle} > Que tal adicionar a sua tattoo no Viveiro?</Text>
                            <TouchableOpacity onPress= {() => this.props.navigation.navigate('AddTatto')}>
                            <Text style={styles.textButton} >Para isso clique aqui!</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={styles.rowContainer}>
                    <Image source={require('../../assets/imgs/gate2.jpg')} style={styles.image}/>
                    <View style={styles.article}>
                        <Text style={styles.subtitle} > Entregue-se ao desconhecido</Text>
                        <TouchableOpacity onPress= {() => this.props.navigation.navigate('Viveiro')}>
                            <Text style={styles.textButton} >Entre no viveiro por aqui</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        marginTop: 30,
        marginLeft:30,
        fontSize: 90,
    },
    subtitle:{
        color: '#000',
    },
    textButton: {
        fontWeight: 'bold'

    },
    image: {
        marginTop: 30,
        borderRadius: 300,
        width:80,
        height:66,

    }
})


export default Home;
