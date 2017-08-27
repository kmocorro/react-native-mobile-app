import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image, TextInput, Alert, Button, ScrollView, FlatList, ActivityIndicator, ListView, ToolbarAndroid } from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';


export default class GreetingsTo extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    text: '',
    isLoading: true
    }
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
    return fetch('http://192.168.1.113:3000/mobile/')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.name),
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
        <View style={{flex:1}}>

          <IndicatorViewPager style={{height:200}} indicator={this._renderDotIndicator()}>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>DAMAGE</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

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
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>BSGDEP</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>
            
            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>NTM</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>NOXE</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>NDEP</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>PTM</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>TOXE</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>CLEANTEX</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>PDRIVE</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>OLT</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>PBA</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>LCM</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>SEED</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>FGA</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>PLM</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>EDGECOAT</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>PLATING</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>ETCHBACK</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>HST</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>

            <View style={styles.container}>
                <Image 
                  style={styles.backdrop}
                  source={require('./public/pc.jpg')} style={{width: 360, height: 110}}>
                    <View style={styles.backdropView}>
                      <Text style={styles.headline}>TEST</Text>
                    </View>
                </Image>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={ (rowData) => 
                    <Text> {rowData.firstName}, {rowData.age} </Text>
                    }/>

            </View>
          
          </IndicatorViewPager>

        </View>

        );
    }
      
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={21} />;
    }
    

}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  toolbar: {
    backgroundColor: '#2E8B57',
    height: 56
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
