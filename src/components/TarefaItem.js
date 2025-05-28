import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { removeData } from '../storage/async-storage';

export default function TarefaItem(props) {

    let statusColor = 'orange';

    if (props.status == 'concluído') {
        statusColor = 'green';
    }

    const handleDelete = async () => {
        await removeData(props.task)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.removeButton} onPress={handleDelete}>
                <Ionicons name="trash-outline" size={22} color="#FFF"/>
            </TouchableOpacity>
            <Text style={styles.titulo}>{props.task.nome}</Text>
            <Text style={styles.data}>{props.task.data}</Text>
            <Text style={styles.categoria}>Categoria - {props.task.categoria}</Text>
            <View style={{ ...styles.status, backgroundColor: statusColor }}>
                <Text style={styles.textoStatus}>{props.task.status}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        position: 'relative'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18
    },
    data: {
        marginTop: 5,
        marginLeft: 3.5
    },
    categoria: {
        marginTop: 8
    },
    status: {
        backgroundColor: 'orange',
        width: 150,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 150
    },
    textoStatus: {
        color: 'white'
    },
    removeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: '#FF0000',
        width: 35,
        height: 35,
        borderRadius: 17.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});