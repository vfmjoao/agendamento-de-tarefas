import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'tasks';

const getData = async () => {
    // JSON.parse transforma textos em objetos
    let data = JSON.parse(await AsyncStorage.getItem(key));

    // Se não houverem dados, preencher e salvar um array vazio
    if (data == null) {
        data = []
        setData(data)
    }
    return data
}

const setData = async (value) => {
    // JSON.stringify transforma objetos em textos
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

const addData = async (task) => {
    task.id = new Date().getTime()
    const data = await getData()
    data.push(task)
    await setData(data)
}

const removeData = async (task) => {
    const tasks = await getData()
    for (let _tasks of tasks) {
        if (_tasks.id == task.id) {
            tasks.splice(tasks.indexOf(_tasks), 1)
        }
        break
    }
    await setData(tasks)
}

export {
    getData,
    setData,
    addData,
    removeData
}