import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import TarefaItem from '../components/TarefaItem';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>ABRIL / 2025</Text>
                <View style={styles.icone}></View>
            </View>
            <ScrollView style={styles.body}>
                <TarefaItem 
                    nome="Tarefa 1" 
                    status="a cumprir" 
                    data="24/04/2004" 
                    categoria="reunião"
                />
                <TarefaItem 
                    nome="Tarefa 2" 
                    status="concluído" 
                    data="35/13/2088" 
                    categoria="estudo"
                />
            </ScrollView>

            <TouchableOpacity 
                style={styles.botaoAdicionar}
                onPress={() => {
                    navigation.navigate('NovaTarefa');
                }}
            >
                <Text style={styles.botaoMais}>+</Text>
            </TouchableOpacity>
        </View>
    );
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
    icone: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        right: 15
    },
    body: {
        flex: 1
    },
    botaoAdicionar: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 30,
        position: 'absolute',
        bottom: 15,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoMais: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    }
});