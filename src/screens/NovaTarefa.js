import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function NovaTarefa(){

    return (
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
            </View>
            <View style={styles.opcao}>
                <Text style={styles.nome}>Nome da Tarefa:</Text>
                <TextInput style={styles.texto}></TextInput>
                <Text style={styles.nome}>Categoria:</Text>
                <Picker style={styles.picker}>
                    <Picker.Item label="Estudo" value="estudo"/>
                    <Picker.Item label="Trabalho" value="trabalho"/>
                    <Picker.Item label="Academia" value="academia"/>
                </Picker>
                <Text style={styles.nome}>Descrição da Tarefa:</Text>
                <TextInput multiline={true} numberOfLines={4} style={styles.descricao}placeholder='Descreva sua tarefa'></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    opcao: {
        width: '100%',
        height: 100,
        padding: 15,
    },
    nome: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    texto: {
        color: 'black',
        fontSize: 12,
        borderColor:'#ccc',
        borderWidth: 1,
        padding: 5,
        borderRadius: 8,
        marginBottom: 10
    },
    descricao: {
        color: 'black',
        fontSize: 12,
        borderColor:'#ccc',
        borderWidth: 1,
        padding: 15,
        paddingBottom: 100,
        width: '100%',
        height: 500,
        borderRadius: 8,
    },
    picker: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        padding: 5
        ,
        marginBottom: 10,
    }
})