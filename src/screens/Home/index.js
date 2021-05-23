import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../assets/images/logo.svg';
import {CardPokemon} from '../../components';
import http from '../../helpers/http';
import {REACT_APP_API_URL as API_URL} from '@env';

export default class Home extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const response = await http().get(API_URL);
    let temp = [];
    for (let i = 0; i < response.data.results.length; i++) {
      const getType = await http().get(response.data.results[i].url);
      temp.push(getType.data.types);
    }
    const result = response.data.results.map((data, index) => ({
      id: index + 1,
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        index + 1
      }.png`,
      url: data.url,
      types: temp[index],
    }));
    this.setState({data: result});
  }
  detail = async url => {
    const result = await http().get(url);
    this.props.navigation.navigate('Detail', {data: result.data});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgLogo}>
          <Logo />
        </View>
        <Text style={styles.title}>Pokedex</Text>
        {this.state.data.length > 0 ? (
          <FlatList
            data={this.state.data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.gap}
                onPress={() => this.detail(item.url)}>
                <CardPokemon
                  name={item.name}
                  pokemon={item.image}
                  types={item.types.map(data => data.type.name)}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  bgLogo: {
    position: 'absolute',
    right: -90,
    top: -55,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  gap: {
    padding: 5,
  },
});
