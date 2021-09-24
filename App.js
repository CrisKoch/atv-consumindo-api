import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, SafeAreaView, ImageBackground, StyleSheet} from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDados = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Uberlândia&units=metric&appid=c6190e2233abb2a900e03e2349a0eca1');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDados();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <View style={styles.container2}>
          <ImageBackground
            source={{ uri: 'https://blogdoenem.com.br/wp-content/uploads/2019/03/4-estacoes-do-ano.jpg' }}
            style={{ width: 400, height: 400 }}/>
          <Text style={styles.temp}>Uberlândia</Text>
          <Text style={styles.umid}> {data.main.temp}ºC</Text>
          <Text>Umidade {data.main.humidity}%</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  temp: {
    padding: 10, 
    fontSize: 20, 
    color: 'red', 
    fontWeight: 'bold'
  },
  umid: {
    fontSize: 80
  },
  img: {
    width: 400, 
    height: 400
  }
})