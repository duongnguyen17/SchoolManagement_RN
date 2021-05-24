import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
const TagInfor = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  useEffect(() => {
    setTitle(props.title);
    setContent(props.content);
  }, [props]);
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-end', marginVertical: 5}}>
      <Text style={{fontWeight: '600'}}>{title}: </Text>
      <Text style={{fontWeight: '600', fontSize: 18}}>{content}</Text>
    </View>
  );
};

export default TagInfor;
