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
    Modal,
    TextInput,
    ScrollView
} from 'react-native';
import backgroundImage from '../../assets/imgs/landscapes.jpg';




class Viveiro extends Component {


    constructor(props){
        super(props);
        this.state = {isVisible: false};
        this.animatedValue = new Animated.Value(0)
    };


    state = {
        dados: [],
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



    render () {

        const caracteristicas = [ 'SOLIDÃO' , 'RENOVAÇÃO', 'MORTE' , 'AMOR', 'AMIZADE', 'FORÇA', 'CORAGEM', 'FAMÍLIA', 'MISTÉRIO', 'SEPARAÇÃO','UNIÃO','FÉ']

        const totalImagens = [
            {
                name: 'Imagem 1',
                image:require("../../assets/imgs/art.jpg") ,
                caracteristicas: caracteristicas[0],
            }, {
                name: 'Imagem 2',
                image: require("../../assets/imgs/catrina.jpeg"),
                caracteristicas: caracteristicas[1],
            }, {
                name: 'Imagem 3',
                image: require("../../assets/imgs/caveira.jpg"),
                caracteristicas: caracteristicas[2],
            }, {
                name: 'Imagem 4',
                image: require("../../assets/imgs/crop.jpeg"),
                caracteristicas: caracteristicas[3],
            }, {
                name: 'Imagem 5',
                image: require("../../assets/imgs/mascarada.jpg"),
                caracteristicas: caracteristicas[4],
            }, {
                name: 'Imagem 6',
                image: require("../../assets/imgs/desenho.jpg"),
                caracteristicas: caracteristicas[5],
            }, {
                name: 'Imagem 7',
                image: require("../../assets/imgs/dolla.jpg"),
                caracteristicas: caracteristicas[6],
            }, {
                name: 'Imagem 8',
                image: require("../../assets/imgs/linda.jpg"),
                caracteristicas: caracteristicas[7],
            }, {
                name: 'Imagem 9',
                image: require("../../assets/imgs/login-tato.jpg"),
                caracteristicas: caracteristicas[8],
            },
            {
                name: 'Imagem 10',
                image: require("../../assets/imgs/mulher.jpg"),
                caracteristicas: caracteristicas[9],
            },{
                name: 'Imagem 11',
                image: require("../../assets/imgs/orion.jpg"),
                caracteristicas: caracteristicas[10],
            }, {
                name: 'Imagem 12',
                image: require("../../assets/imgs/lobo.jpg"),
                caracteristicas: caracteristicas[11],
            }]



        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const rotateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        })
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 2],
            outputRange: [0, 300]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 300, 0]
        })
        const movingMinimun = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 50, 0]
        })







        return(


        <ImageBackground source={backgroundImage} style={styles.background}>

            <ScrollView>

                <View style={styles.container}>

                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.isVisible}
                        onRequestClose={() => {
                            this.setState({ isVisible: false });
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ isVisible: false });
                            }}>
                            <View style={styles.modal}>
                                <Text style={styles.text}>Olá! Gostaria de conversar?</Text>
                                <TextInput/>
                            </View>
                        </TouchableOpacity>
                    </Modal>

                    <View >
                        {/*Raiva/Nojo*/}

                        <Animated.View
                            style={{
                                marginLeft: this.animatedValue.interpolate({
                                    inputRange: [0, 0.5, 1],
                                    outputRange: [0, 300, 0]
                                }),
                                marginTop: 10,
                                height: 60,
                                width: 70,
                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[9]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.separacao}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                    </View>

                    {/*<View >*/}

                    {/*    <Animated.View*/}
                    {/*        style={{*/}
                    {/*            transform: [{rotateX}],*/}
                    {/*            height: 50,*/}
                    {/*            width: 60,*/}
                    {/*        }}>*/}
                    {/*        */}
                    {/*    </Animated.View>*/}

                    {/*</View>*/}

                    <View >
                        {/*Felicidade*/}

                        <Animated.View
                            style={{
                                marginLeft: marginLeft,
                                marginTop: 10,
                                height: 60,
                                width: 70,
                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[1]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.renovação}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                        <Animated.View
                            style={{
                                marginLeft: marginLeft,
                                marginTop: 10,
                                height: 60,
                                width: 70,
                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[3]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.amor}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                        <Animated.View
                            style={{
                                marginLeft: marginLeft,
                                marginTop: 10,
                                height: 60,
                                width: 70,
                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[4]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.amizade}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                        <Animated.View
                            style={{
                                marginLeft: marginLeft,
                                marginTop: 10,
                                height: 60,
                                width: 70,
                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[7]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.familia}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>


                        <Animated.View
                            style={{
                                marginLeft: marginLeft,
                                marginTop: 10,
                                height: 60,
                                width: 70,
                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[5]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.força}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                        <Animated.View
                            style={{
                                marginLeft: marginLeft,
                                marginTop: 10,
                                height: 60,
                                width: 70,
                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[10]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.união}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                        <Animated.View
                            style={{
                                marginLeft: marginLeft,
                                marginTop: 10,
                                height: 60,
                                width: 70,
                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[11]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.fé}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>



                    </View>

                    <View >
                        {/*Tristeza*/}

                        <Animated.View
                            style={{
                                opacity,
                                marginTop: 10,
                                marginBottom: 15,
                                height: 60,
                                width: 70,

                            }}>
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[0]).map(imagens =>
                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.solidão}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                        <Animated.View
                            style={{
                                opacity,
                                marginTop: 10,
                                marginBottom: 15,
                                height: 60,
                                width: 70,

                            }}>
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[2]).map(imagens =>
                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.morte}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>


                    </View>

                    <View>
                        {/*Medo/Surpresa*/}

                        <Animated.View
                            style={{
                                marginLeft: movingMinimun,
                                marginTop: movingMinimun,


                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[6]).map(imagens =>

                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.coragem}/>
                                        <Text style={styles.name}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                        <Animated.View
                            style={{
                                marginLeft: movingMinimun,
                                marginTop: movingMinimun,


                            }} >
                            { totalImagens.filter(tattoos => tattoos.caracteristicas === caracteristicas[8]).map(imagens =>
                                <View style={styles.linha}>
                                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
                                        <Image source={imagens.image} style={styles.misterio}/>
                                        <Text style={styles.nameSurpresa}>{ imagens.name }</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Animated.View>

                    </View>




                </View>
            </ScrollView>
        </ImageBackground>
    )
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },
    container: {
        display: "flex",
    },
    image: {
        width: 40,
        height: 50,
        marginTop: 10,
    },
    linha: {
        marginTop: 50,
        marginBottom: 50,
    },
    solidão: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 15,
        borderRadius: 10,
        width: '53%',
        height: '44%',
    },
    amor: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 13,
        borderRadius: 10,
        width: '56%',
        height: '53%',
    },
    renovação: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 10,
        borderRadius: 10,
        width: '63%',
        height: '64%',
    },
    amizade: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 15,
        borderRadius: 10,
        width: '63%',
        height: '61%',
    },
    morte: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 15,
        borderRadius: 26,
        width: '39%',
        height: '42%',
    },
    força: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 20,
        borderRadius: 10,
        width: '62%',
        height: '58%',
    },
    coragem: {
        paddingBottom: 20,
        borderWidth: 20,
        borderRadius: 10,
        width: '44%',
        height: '56%',
        marginBottom: 30,
    },
    separacao: {
        width: '45%',
        height: '44%',
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 28,
        borderRadius: 26,

    },
    familia: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth:  15,
        borderRadius: 10,
        width: '93%',
        height: '80%',
    },
    união: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 10,
        borderRadius: 10,
        width: '91%',
        height: '90%',
    },
    misterio: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 10,
        borderRadius: 10,
        width: '83%',
        height: '100%',
    },
    fé: {
        marginTop: 20,
        paddingBottom: 20,
        borderWidth: 10,
        borderRadius: 10,
        width: '85%',
        height: '95%',
    },
    nameSurpresa: {
        fontWeight: 'bold',
        left: 90,
    }

})




export default Viveiro
