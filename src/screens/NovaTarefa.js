import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

export default function NovaTarefa(){

    const data = [
        { label: 'Selecione uma categoria', value: '1' },
        { label: 'Trabalho', value: '2' },
        { label: 'Família', value: '3' },
        { label: 'Amigos', value: '4' },
    ];

    return (
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
            </View>
            <View style={styles.opcao}>
                <Text style={styles.nome}>Nome da Tarefa:</Text>
                <TextInput style={styles.texto}></TextInput>
                <Text style={styles.nome}>Categoria:</Text>
                <Dropdown
                    styles={styles.dropdown}
                    data = {data}
                    placeholderStyle={styles.place}
                    selectedTextStyle={styles.selected}
                    inputSearchStyle={styles.input}
                    labelField={"label"}
                    valueField={"value"}
                    value= "1"
                    />
                <Text style={styles.nome}>Descrição da Tarefa:</Text>
                <TextInput multiline={true} numberOfLines={4} style={styles.descricao}></TextInput>

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
        borderRadius: 8,
        marginBottom: 10
    },
    nome: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
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
    dropdown: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 8,
        padding: 5,
        marginBottom: 10
    },
    selected: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        color: 'black'
    },
    place: {
        color: 'gray',
        fontSize: 12
    },
    input: {
        color: 'black',
        fontSize: 12,
        borderColor:'#ccc',
        borderWidth: 1,
        padding: 5,
        borderRadius: 8,
        marginBottom: 10
    }
})