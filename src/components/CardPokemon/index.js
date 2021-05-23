import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Logo from '../../assets/images/logo.svg';
import color from '../../helpers/color';

export default function CardPokemon({name, pokemon, types, backgroundColor}) {
  return (
    <View style={styles.card((backgroundColor = color(types)))}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.row}>
        <View>
          {types.map((item, index) => (
            <View style={styles.type} key={String(index)}>
              <Text style={styles.typeName}>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.bgPokemon}>
          <Image
            style={styles.image}
            source={{
              uri: pokemon,
            }}
          />
          <View style={styles.logo}>
            <Logo width={90} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: type => ({
    backgroundColor: type,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 12,
    width: 150,
    position: 'relative',
    overflow: 'hidden',
  }),
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginBottom: 10,
  },
  type: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 8,
  },
  typeName: {
    fontSize: 12,
    color: 'white',
  },
  bgPokemon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 30,
  },
  logo: {
    position: 'absolute',
    top: -60,
    right: -20,
  },
  image: {
    resizeMode: 'cover',
    width: 60,
    height: 60,
    zIndex: 2,
  },
});
