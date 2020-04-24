import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Image,
    Animated,
    Easing,
    AppRegistry
} from 'react-native';
import backgroundImage from '../../assets/imgs/landscapes.jpg';
import nameTatoo from '../components/nameTattoo'




class Viveiro extends Component {


    state = {
        dados: [],
    }

    constructor () {
        super()
        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount () {
        this.animate()
    }
    animate () {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }
    //
    // verification (n, totalImagens, caracteristicas) {
    //     return let dados = totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[n]);
    // }


    //_onPressButton(params){
      //  <nameTatoo value={params}/>

    name = (nameTattoo) => {
        <Text>{nameTattoo}</Text>
    };






    render () {

        const caracteristicas = ['MISTERIOSA', 'MORTE', 'ALEGRIA', 'SENSUALIDADE']

        const totalImagens = [
            {
                name: 'Catrina',
                image:require("../../assets/imgs/catrina.jpeg") ,
                caracteristicas: caracteristicas[0],
            }, {
                name: 'Espanhola',
                image: require("../../assets/imgs/linda.jpg"),
                caracteristicas: caracteristicas[0],
            }, {
                name: 'Crop',
                image: require("../../assets/imgs/crop.jpeg"),
                caracteristicas: caracteristicas[1],
            }]


        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })
        const rotateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        })



           // const exibir = this.totalImagens.map((dados) => {
           //          return (
           //              <View>
           //                  <Text>{dados.name}</Text>
           //                  <Image source={ dados.image} />
           //              </View>
           //
           //          )
           //      })
           //  }



        return(


        <ImageBackground source={backgroundImage} style={styles.background}>

            <View style={styles.container}>

                <Animated.View
                    style={{
                        marginLeft,
                        height: 30,
                        width: 40,
                        }}>
                 </Animated.View>

                <Animated.View
                    style={{
                        opacity,
                        marginTop: 10,
                        height: 60,
                        width: 70,
                        }}>


                    { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[1]).map(imagens =>

                        <View>
                            <TouchableOpacity onPress={() => this.name(imagens.name)}>
                                <Image source={imagens.image} style={styles.image}/>
                            </TouchableOpacity>
                        </View>
                    )}

                </Animated.View>

                <Animated.View
                    style={{
                        marginLeft: movingMargin,
                        marginTop: 10,
                        height: 60,
                        width: 70,
                        }} >

                    { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[0]).map(imagens =>

                        <View>
                            <Text>{ imagens.name }</Text>
                            <Image source={imagens.image} style={styles.image}/>
                        </View>
                    )}



                </Animated.View>

                {/*<Animated.View*/}
                {/*    style={{*/}
                {/*        transform: [{rotateX}],*/}
                {/*        marginTop: 50,*/}
                {/*        height: 30,*/}
                {/*        width: 40,*/}
                {/*        backgroundColor: 'black'}}>*/}
                {/*    <Text style={{color: 'white'}}>Hello from TransformX</Text>*/}
                {/*</Animated.View>*/}

            </View>
        </ImageBackground>
    )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        paddingTop: 150,
    },
    image: {
        width: 40,
        height: 50,
        marginTop: 10,
    },
    name: {
        fontWeight: 'bold',
    }

})

export default Viveiro
