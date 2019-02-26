import React, { Component } from 'react';
import { View, Image, FlatList } from "react-native"


export default class PhotoList extends React.Component {
  state = {
    selectedPhoto: null
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.photos}
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap"
          }}
          renderItem={(data) => {
            console.log(data.item.node.image.filename);
            return (<Image key={data.item.node.image.uri} source={{uri: data.item.node.image.uri}} style={{width: "33vw", height: "33vw"}}/>)
          }}
        />
      </View>
    )
  }
}
