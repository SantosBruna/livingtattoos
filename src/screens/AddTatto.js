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



class AddTatto extends Component {
    state = {
        image: null,
        name: '',
        caracteristicas: []
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

        Alert.alert('Imagem adicionada!', this.state.name, this.state.caracteristicas)
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Adicione sua Tatto no viveiro!</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom} >
                        <Text style={styles.buttomText}>Escolha a imagem da sua tatto!</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Qual o nome irá dar para a sua tatuagem?' style={styles.input} value={this.state.name} onChangeText={name => this.setState({ name })} />
                    <TextInput placeholder='Qual as características da sua tatuagem no viveiro?' style={styles.input} value={this.state.caracteristicas} onChangeText={caracteristicas => this.setState({ caracteristicas })} />

                    <TouchableOpacity onPress={this.save} style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        )
    }

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    container:{
        flex: 1,
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
        width: '90%'
    }
})

export default AddTatto
