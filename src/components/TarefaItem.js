import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TarefaItem(props) {

    let statusColor = 'orange';

    if (props.status == 'concluído') {
        statusColor = 'green';
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.removeButton}>
                <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>{props.nome}</Text>
            <Text style={styles.data}>{props.data}</Text>
            <Text style={styles.categoria}>Categoria - {props.categoria}</Text>
            <View style={{ ...styles.status, backgroundColor: statusColor }}>
                <Text style={styles.textoStatus}>{props.status}</Text>
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
        right: 15,
        top: 15,
        width: 25,
        height: 25,
        backgroundColor: '#ff4444',
        borderRadius: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    removeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});