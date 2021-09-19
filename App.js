import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://brasilapi.com.br/api/feriados/v1/2022');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <View>
          <Text style={{padding: 10, fontSize: 20, color: 'blue', fontWeight: 'bold'}}>Programe-se! Conheça os feriados nacionais em 2022.</Text>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text >{item.date} -->> {item.name}</Text>
          )}
        />
        </View>
      )}
    </View>
  );
};

