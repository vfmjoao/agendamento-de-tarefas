import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function NovaTarefa(){
    return (
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
            </View>
            <View style={styles.opcao}>
                <Text style={styles.nome}>Nome da Tarefa:</Text>
                <TextInput style={styles.texto}></TextInput>
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
    texto: {
        color: 'black',
        fontSize: 12,
        borderColor:'#ccc',
        borderWidth: 1,
        padding: 5,
        borderRadius: 8
    },
    nome: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
})