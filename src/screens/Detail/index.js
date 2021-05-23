import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Arrow from '../../assets/images/arrow-back.svg';
import Logo from '../../assets/images/logo.svg';
import LoveOff from '../../assets/images/love-off.svg';
import LoveOn from '../../assets/images/love-on.svg';
import {About, BaseStats} from '../../components';

export default class Detail extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'about', title: 'About'},
      {key: 'base_stats', title: 'Base Stats'},
      {key: 'evolution', title: 'Evolution'},
      {key: 'moves', title: 'Moves'},
    ],
    love: false,
  };

  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.backgroundTabBar}
      renderLabel={({route, focused, color}) => (
        <Text style={styles.textTabbar(focused)}>{route.title}</Text>
      )}
    />
  );

  initialLayout = {width: Dimensions.get('window').width};
  renderScene = SceneMap({
    about: () => <About />,
    base_stats: () => <BaseStats />,
    evolution: () => <Text>Evolution</Text>,
    moves: () => <Text>Moves</Text>,
  });

  render() {
    const {index, routes} = this.state;
    console.log(this.props.route.params.data);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Arrow />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({love: !this.state.love})}>
              {this.state.love ? <LoveOn /> : <LoveOff />}
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={styles.name}>
                {this.props.route.params.data.name}
              </Text>
              <View style={styles.row}>
                {this.props.route.params.data.types.map((item, idx) => {
                  return (
                    <View style={styles.type} key={String(idx)}>
                      <Text style={styles.typeName}>{item.type.name}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
            <Text style={styles.number}>
              #00{this.props.route.params.data.id}
            </Text>
          </View>
          <View style={styles.rowImage}>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.props.route.params.data.id}.png`,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.logo}>
            <Logo width={160} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.scene}>
            <TabView
              renderTabBar={this.renderTabBar}
              navigationState={{index, routes}}
              renderScene={this.renderScene}
              onIndexChange={idx => this.setState({index: idx})}
              initialLayout={this.initialLayout}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63BB5B',
    position: 'relative',
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
    marginBottom: 10,
  },
  number: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  type: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  typeName: {
    fontSize: 14,
    color: 'white',
  },
  image: {
    resizeMode: 'cover',
    width: 200,
    height: 200,
  },
  rowImage: {
    alignItems: 'center',
    zIndex: 2,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -35,
    paddingHorizontal: 22,
    paddingVertical: 30,
  },
  logo: {
    position: 'absolute',
    bottom: 0,
    right: -10,
  },
  scene: {
    flex: 1,
  },
  indicator: {
    backgroundColor: '#0000ff',
  },
  backgroundTabBar: {
    backgroundColor: 'white',
  },
  textTabbar: focused => ({
    fontSize: 12,
    color: focused ? 'black' : '#AAAAAA',
  }),
});
