import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Position from './Position';
const TagNotification = props => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [position, setPosition] = useState('');
  const [content, setContent] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const gotoUserInfor = props.gotoUserInfor;
  useEffect(() => {
    setName(props.data.name);
    setAvatar(props.data.avatar);
    setPosition(props.data.position);
    setContent(props.data.content);
    setTime(props.data.time);
    setCategory(props.data.category);
  }, [props]);
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 10, marginHorizontal: 5}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            onPress={() => {
              gotoUserInfor(name);
            }}>
            <Image
              source={{uri: avatar}}
              style={{width: 40, height: 40, borderRadius: 40}}
            />
            <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '600'}}>
              {name}
            </Text>
          </TouchableOpacity>
          {position == '' || position == undefined ? null : (
            <Position position={position} />
          )}
        </View>
        <View style={{marginLeft: 10}}>
          <Text>{time}</Text>
        </View>
        <View style={{borderTopWidth: 0.5}}>
          <Text style={{marginLeft: 3, marginTop: 10}}>{content}</Text>
        </View>
        {category === 'xin nghỉ' ? (
          <View style={{borderTopWidth: 0.5, marginTop: 10}}>
            <View
              style={{
                marginTop: 10,
                height: 40,
              }}>
              <TextInput
                multiline={true}
                placeholder="Lời nhắn"
                style={{
                  height: 37,
                  borderBottomWidth: 0.5,
                  marginHorizontal: 15,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: 50,
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    marginRight: 40,
                    backgroundColor: '#ff9966',
                    borderColor: '#ff9966',
                    borderWidth: 0.5,
                  },
                ]}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
                  Từ chối
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: '#0066ff',
                    borderColor: '#0066ff',
                    borderWidth: 0.5,
                  },
                ]}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
                  Đồng ý
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default TagNotification;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 3,
    shadowColor: '#595959',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
  },
  button: {
    borderRadius: 5,
    shadowColor: '#595959',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    width: 80,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
