import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Card, Searchbar, Text } from 'react-native-paper';
import { buscarFilmes } from '../services/api';

export default function Home({ navigation }) {
  const [filmes, setFilmes] = useState([]);
  const [termo, setTermo] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  async function carregar(busca) {
    setCarregando(true);
    setErro(null);
    try {
      const resultado = await buscarFilmes(busca);
      setFilmes(resultado);
    } catch (e) {
      setFilmes([]);
      setErro(e.message);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregar('spider man');
  }, []);

  function pesquisar() {
    if (termo.trim()) carregar(termo.trim());
  }

  function renderFilme({ item }) {
    return (
      <Card style={styles.card} onPress={() => navigation.navigate('Detalhes', { filme: item })}>
        {item.Poster !== 'N/A' && <Card.Cover source={{ uri: item.Poster }} />}
        <Card.Title title={item.Title} subtitle={`${item.Year} • ${item.Type}`} />
      </Card>
    );
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar filme"
        value={termo}
        onChangeText={setTermo}
        onSubmitEditing={pesquisar}
        style={styles.busca}
      />

      {carregando ? (
        <ActivityIndicator animating size="large" style={styles.centro} />
      ) : erro ? (
        <Text variant="bodyLarge" style={styles.centro}>{erro}</Text>
      ) : (
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.imdbID}
          renderItem={renderFilme}
          contentContainerStyle={styles.lista}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  busca: { margin: 12 },
  lista: { paddingHorizontal: 12, paddingBottom: 24 },
  card: { marginBottom: 12 },
  centro: { alignSelf: 'center', marginTop: 40 },
});
