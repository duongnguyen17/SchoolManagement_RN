import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import TagInfor from '../components/TagInfor';
const TagUser = props => {
  const {user, gotoUserInfor} = props;
  return (
    <TouchableOpacity
      style={[styles.tag, {flexDirection: 'row', marginVertical: 5}]}
      onPress={() => {
        gotoUserInfor(user.name);
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#4d94ff',
          marginHorizontal: 10,
          marginVertical: 20,
        }}
        source={{uri: user.avatar}}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: 'column',
        }}>
        <TagInfor title={'Họ tên'} content={user.name} />
        <TagInfor title={'Chức vụ'} content={user.position} />
        {user.class == '' || user.class == null ? null : (
          <TagInfor title={'Lớp'} content={user.class} />
        )}
        {user.phoneNumber == '' || user.phoneNumber == null ? null : (
          <TagInfor title={'SĐT'} content={user.phoneNumber} />
        )}
        {user.email == '' || user.email == null ? null : (
          <TagInfor title={'Email'} content={user.email} />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default TagUser;
const styles = StyleSheet.create({
  tag: {
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
    elevation: 5,
    marginVertical: 2,
  },
});
