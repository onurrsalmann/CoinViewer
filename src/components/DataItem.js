import React from 'react';
import {ListItem, Text, Left, Body, Right} from 'native-base';
import {SvgUri} from 'react-native-svg';

class DataItem extends React.Component {
  render() {
    const price = parseFloat(this.props.value.price).toFixed(2);
    const name = this.props.value.name;
    const symbol = this.props.value.symbol;
    const photo = this.props.value.iconUrl;
    const color = this.props.value.color;
    console.log(this);
    return (
      <ListItem
        thumbnail
        onPress={() =>
          this.props.navigation.navigate('Details', {value: this.props.value})
        }>
        <Left>
          <SvgUri width="40" height="40" uri={photo} />
        </Left>
        <Body>
          <Text style={{color: color}}>
            {name} - {symbol}
          </Text>
        </Body>
        <Right>
          <Text style={{color: color}}>{price}</Text>
        </Right>
      </ListItem>
    );
  }
}

export default DataItem;