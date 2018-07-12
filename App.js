/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import GphApiClient from 'giphy-js-sdk-core'

const client = GphApiClient('')

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  trendingGifs = () => {
    this.setState({ isLoading: true })
    client.trending("gifs", {})
      .then((response) => {
        this.setState({ isLoading: false })
        alert('success')
      })
      .catch((err) => {
        alert('error')
        this.setState({ isLoading: false })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Giphy Core SDK for JS Bug #22</Text>
        <Button
          onPress={this.trendingGifs}
          disabled={this.state.isLoading}
          title="Fetch trending GIFs"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
