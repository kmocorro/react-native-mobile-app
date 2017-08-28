import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image, TextInput, Alert, Button, ScrollView, FlatList, ActivityIndicator, ListView, ToolbarAndroid, RefreshControl } from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';



export default class GreetingsTo extends React.Component {
  constructor(props) {
  super(props);

  var d = new Date(); // get current date
  d.setHours(d.getHours(),d.getMinutes()-10,0,0);

  this.state = {
    text: '',
    isLoading: true,
    curTime: d.toLocaleString(),
    refreshing: false,
    }
  }

  _onRefresh() {
    this.setState({refreshing: true});
    return fetch('http://192.168.1.113:3000/mobile/')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.process),
        }, function() {
          //do something with new state
          this.setState({refreshing: false});
        });
      })

      .catch((error) => {
        console.error(error);
      });
    
  }

  _onPressbutton_doNot() {
    Alert.alert('I told you do not press!')
  }

  _onPressbutton_maybe() {
    Alert.alert('Just wait for maybe.')
  }

  _onPressbutton_now() {
    Alert.alert('Neh! Tara Pancit Canton!')
  }

  componentDidMount() {
    // change this url soon
    return fetch('http://192.168.1.113:3000/mobile/')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.process),
        }, function() {
          //do something with new state
        });
      })

      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    
    let pic_kevs = {
      uri: 'https://avatars0.githubusercontent.com/u/26828995'
    };

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
      return (
        <ScrollView
          refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh.bind(this)}
                    />
                    }
          >
        <View style={{flex:1}}>
        
          <IndicatorViewPager style={{height:650}} indicator={this._renderDotIndicator()}>
        
            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>DAMAGE</Text>
                    </View>
                </Image>

                <View style={styles.targetContainer}>
                  <Text style={styles.targetText}>Target</Text>
                  <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => {
                    if(rowData.process_name == "DAMAGE"){
                      return <Text style={styles.targetValue}> {((Math.round(rowData.t_target* 100)/100).toLocaleString(undefined, {maximumFractionDigits: 0}))} </Text>
                      } else { return null }
                    }
                  }/>
                  <Text style={styles.targetTime}>{this.state.curTime}</Text>
                </View>

                <View style={styles.outsContainer}>
                  <Text style={styles.outsText}>Actual Outs</Text>
                  <Text style={styles.outsValue}>123,120</Text>
                  <Text style={styles.outsTime}>{this.state.curTime}</Text>
                </View>

                <View style={styles.varContainer}>
                  <Text style={styles.varText}>Variance</Text>
                  <Text style={styles.varValue}>0</Text>
                  <Text style={styles.varTime}>{this.state.curTime}</Text>
                </View>

            </View>
            
            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>POLY</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => {
                    if(rowData.process_name == "POLY"){
                      return <Text> {rowData.process_name}, {rowData.t_target} </Text>
                      } else { return null }
                    }
                  }/>

            </View>

          </IndicatorViewPager>

        </View>
        </ScrollView>
              
        );
    }
      
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={2} />;
    }
    

}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },

  targetContainer: {
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 15,
    width: 360,
    height: 120,
    marginBottom: 15,

  },

  outsContainer: {
    backgroundColor: '#fff',
    padding: 5,
    width: 360,
    height: 120,
    marginBottom: 15,
  },

  varContainer: {
    backgroundColor: '#fff',
    padding: 5,
    width: 360,
    height: 120,
    marginBottom: 15,
  },

  targetText: {
    fontSize: 20,
    textAlign: 'left',
    padding: 5,
    fontWeight: "500",
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 0.2,
  },

  outsText: {
    fontSize: 20,
    textAlign: 'left',
    padding: 5,
    fontWeight: "500",
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 0.2,
  },

  varText: {
    fontSize: 20,
    textAlign: 'left',
    padding: 5,
    fontWeight: "500",
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 0.2,
  },

  targetValue: {
    fontSize: 24,
    textAlign: 'left',
    padding: 5,
    fontWeight: "700",
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 0.2,
  },

  outsValue: {
    fontSize: 24,
    textAlign: 'left',
    padding: 5,
    fontWeight: "700",
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 0.2,
  },

  varValue: {
    fontSize: 24,
    textAlign: 'left',
    padding: 5,
    fontWeight: "700",
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 0.2,
  },

  targetTime: {
    fontSize: 14,
    textAlign: 'left',
    padding: 5,
  },

  outsTime: {
    fontSize: 14,
    textAlign: 'left',
    padding: 5,
  },

  varTime: {
    fontSize: 14,
    textAlign: 'left',
    padding: 5,
  },

  buttonContainer: {
    margin: 20,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  backdrop: {
    paddingTop: 60,
    width: 320,
    height: 120
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  headline: {
    fontSize: 30,
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    marginTop: 60,
    padding: 5
  }  

});
