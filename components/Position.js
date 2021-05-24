import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
const Position = props => {
  const [position, setPosition] = useState('');
  useEffect(() => {
    setPosition(props.position);
  }, [props]);
  return (
    <View
      style={{
        backgroundColor: position == 'Hiệu trưởng' ? '#ff9980' : '#ffffcc',
        borderRadius: 15,
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontWeight: 'bold'}}>{position}</Text>
    </View>
  );
};

export default Position;
