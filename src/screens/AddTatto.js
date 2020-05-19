import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Platform,
    Alert,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import axios from 'axios';
import {server, showError} from '../common';
import RNPickerSelect from 'react-native-picker-select';



class AddTatto extends Component {

    state = {
        image: null,
        nameTattoo: '',
        caracteristicas: '',
        fotoLoguin: '0',
        name: '',
        email:'',
        password: '',
        confirmPassword: '',
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            masWidth: 800
        }, res => {
            if(!res.didiCancel){
                this.setState({ image: { uri: res.uri, base64: res.data}})
            }
        })
    }

    save = () => {

        // try {
        //     await axios.post(`${server}/tattoos`, {
        //
        //         name: this.state.nameTattoo,
        //         photo:this.state.image,
        //         idCharacteristics:this.state.caracteristicas,
        //         login: this.state.fotoLoguin,
        //         viveiro: '1',
        //
        //
        //     })

            Alert.alert('Imagem adicionada!'),
            this.props.navigation.navigate('Home')

        // } catch (err) {
        //     showError(err)
        // }
    }

    signup = async () => {
          try {
                await axios.post(`${server}/signup`, {

                    nameTattoo: this.state.nameTattoo,
                    foto:this.state.image,
                    caracteristicas:this.state.caracteristicas,
                    fotoLoguin: this.state.fotoLoguin,
                    name:this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword:this.state.confirmPassword,


                })

                 Alert.alert('Sucesso!', 'Usuario cadastrado ')
                this.props.navigation.navigate('Auth')

               } catch (err) {
                   showError(err)
                }

            }


    render () {

        const params = this.props.navigation.state.params?this.props.navigation.state.params: null;


        this.state.name = this.props.navigation.state.params?this.props.navigation.state.params.name: null;
        this.state.email = this.props.navigation.state.params?this.props.navigation.state.params.email: null;
        this.state.password = this.props.navigation.state.params?this.props.navigation.state.params.password: null;
        this.state.confirmPassword = this.props.navigation.state.params?this.props.navigation.state.params.confirmPassword: null;

        return (
            <ScrollView>
                <View style={styles.background}>
                    <Text style={styles.title}>Adicione a sua tatuagem aqui!</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom} >
                        <Text style={styles.buttomText}>Escolha a imagem da sua tatto!</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Qual o nome irá dar para a sua tatuagem?' style={styles.input} value={this.state.nameTattoo} onChangeText={nameTattoo => this.setState({ nameTattoo })} />
                    <RNPickerSelect
                        onValueChange={(caracteristicas) => this.setState({ caracteristicas })}
                        placeholder={{
                            label: 'Informe a característica da sua tatuagem',
                            value: this.state.caracteristicas,
                        }}
                        placeholderTextColor="black"
                        items={[
                            { label: 'Solidão', value: '1' },
                            { label: 'Renovação', value: '2' },
                            { label: 'Morte', value: '3' },
                            { label: 'Amor', value: '4' },
                            { label: 'Amizade', value: '5' },
                            { label: 'Força', value: '6' },
                            { label: 'Coragem', value: '7' },
                            { label: 'Família', value: '8' },
                            { label: 'Mistério', value: '9' },
                            { label: 'Separação', value: '10' },
                            { label: 'União', value: '11' },
                            { label: 'Fé', value: '12' },
                        ]}
                    />
                    {/*{params &&*/}

                    {/*<TouchableOpacity onPress={() => this.signup(params)} style={styles.buttom}>*/}
                    {/*    <Text style={styles.buttomText}>Salvar</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*}*/}
                    {/*{!params &&*/}
                    <TouchableOpacity onPress={() => {Alert.alert('Imagem adicionada!'),
                        this.props.navigation.navigate('Home')}} style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                    {/*}*/}


                </View>
            </ScrollView>

        )
    }

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE' ,
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center',
    },
    buttom: {
        marginTop: 30,
        padding:10,
        backgroundColor: '#000000'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 30,
        width: '90%',
        fontWeight: 'bold',
        color: '#000',
    }
})

export default AddTatto
