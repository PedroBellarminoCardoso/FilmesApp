import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function Detalhes({ route, navigation }) {
  const { filme } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        {filme.Poster !== 'N/A' && <Card.Cover source={{ uri: filme.Poster }} />}
        <Card.Content style={styles.conteudo}>
          <Text variant="headlineMedium">{filme.Title}</Text>
          <Text variant="titleMedium">Ano: {filme.Year}</Text>
          <Text variant="titleMedium">Tipo: {filme.Type}</Text>
          <Text variant="bodySmall">IMDb ID: {filme.imdbID}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.goBack()}>
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12 },
  conteudo: { gap: 6, marginTop: 12 },
});
