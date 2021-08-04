import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d726',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f638',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d729',
    title: 'Third Item',
  }
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

function App() {
  const [data, setData] = React.useState(DATA);
  const [count, setCount] = React.useState(9);

  const onEndReached = () => {
    console.log('onEndReached');
    let _count = count;

    const newData = new Array(10).fill().map((e,i) => {
       return {
        id: Math.random() * 10000,
        title: _count++,
      }
    });
    setCount(_count);
    setData([...newData, ...data]);
    console.log(data);
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        inverted
        keyExtractor={item => item.id}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    maxHeight: 400,
  },
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  link: {
    color: '#1B95E0'
  },
  code: {
    fontFamily: 'monospace, monospace'
  }
});

export default App;
