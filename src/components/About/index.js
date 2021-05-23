import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.name}>Species</Text>
        <Text style={styles.text}>Seed</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Height</Text>
        <Text style={styles.text}>70 cm</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Weight</Text>
        <Text style={styles.text}>69 kg</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Abilities</Text>
        <Text style={styles.text}>Overgrow</Text>
      </View>
      <Text style={styles.title}>Breeding</Text>
      <View style={styles.row}>
        <Text style={styles.name}>Gender</Text>
        <Text style={styles.text}>Female</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Egg Groups</Text>
        <Text style={styles.text}>Monster</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Egg Cycle</Text>
        <Text style={styles.text}>Grass</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    width: '30%',
    color: '#AAAAAA',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
  },
});
