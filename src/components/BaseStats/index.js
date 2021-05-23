import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';

export default function BaseStats() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <Text style={styles.name}>HP</Text>
        <Text style={styles.text}>45</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={0.5} color={Colors.red800} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Attack</Text>
        <Text style={styles.text}>60</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={0.5} color={Colors.red800} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Defense</Text>
        <Text style={styles.text}>48</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={0.5} color={Colors.red800} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Sp. Atk</Text>
        <Text style={styles.text}>65</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={0.5} color={Colors.red800} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Sp. Def</Text>
        <Text style={styles.text}>65</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={0.5} color={Colors.red800} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Speed</Text>
        <Text style={styles.text}>45</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={0.5} color={Colors.red800} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>Total</Text>
        <Text style={styles.text}>317</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={0.5} color={Colors.red800} />
        </View>
      </View>
      <Text style={styles.title}>Type Defenses</Text>
      <Text style={styles.type}>The effectiveness of each on Charmander</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
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
  text: {
    width: '14%',
  },
  progressBar: {
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
  },
  type: {
    marginBottom: 20,
  },
});
