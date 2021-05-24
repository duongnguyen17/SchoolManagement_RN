import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Animated,
} from 'react-native';

import TagInfor from '../components/TagInfor';

const MoreOptions = props => {
  const [isShow, setIsShow] = useState(false);
  const [userInfor, setUserInfor] = useState({});
  const [classes, setClasses] = useState([]);
  let height = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setUserInfor({
      name: 'Nguyễn Văn Dương',
      avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
      position: 'Học sinh',
      phoneNumber: '0393072748',
      email: 'duongthptnt@gmail.com',
      class: '12A1',
    });
    setClasses([
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
      {
        name: '10A1',
        teacher: 'Daksjfhkas',
        numStudents: 34,
        _id: '23412421342134',
      },
    ]);
  }, []);

  const gotoTeachers = () => {
    props.navigation.navigate('Teachers');
  };
  const gotoStudents = name => {
    props.navigation.navigate('Students', {name: name});
  };
  const gotoSubjects = () => {
    props.navigation.navigate('Subjects');
  };
  const show = () => {
    Animated.timing(height, {
      toValue: 270,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setIsShow(true);
    });
  };
  const hide = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setIsShow(false);
    });
  };
  return (
    <SafeAreaView>
      <View style={[styles.tag, {flexDirection: 'row', marginVertical: 10}]}>
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
          source={{uri: userInfor.avatar}}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: 'column',
          }}>
          <TagInfor title={'Họ tên'} content={userInfor.name} />
          <TagInfor title={'Chức vụ'} content={userInfor.position} />
          <TagInfor title={'Lớp'} content={userInfor.class} />
          <TagInfor title={'SĐT'} content={userInfor.phoneNumber} />
          <TagInfor title={'Email'} content={userInfor.email} />
        </View>
      </View>
      {/* mức độ chuyên cần - biểu đồ*/}
      <View style={styles.tag}></View>
      <TouchableOpacity
        style={[styles.tag, {height: 55, justifyContent: 'center'}]}
        onPress={gotoTeachers}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: '600',
            marginVertical: 5,
          }}>
          Danh sách giáo viên
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tag, {height: 55, justifyContent: 'center'}]}
        onPress={gotoSubjects}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: '600',
            marginVertical: 5,
          }}>
          Danh sách môn học
        </Text>
      </TouchableOpacity>
      <View style={[styles.tag, {justifyContent: 'center'}]}>
        <TouchableOpacity
          style={{height: 55, justifyContent: 'center'}}
          onPress={() => {
            if (!isShow) {
              show();
            } else {
              hide();
            }
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              fontWeight: '600',
              marginVertical: 5,
            }}>
            Danh sách lớp
          </Text>
        </TouchableOpacity>
        <Animated.View style={{height: height}}>
          <ScrollView style={{marginLeft: 10}}>
            {classes.map((value, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  marginHorizontal: 10,
                  marginVertical: 20,
                  borderBottomWidth: 0.5,
                  borderColor: 'gray',
                }}
                onPress={() => {
                  gotoStudents(value.name);
                }}>
                <View style={{marginLeft: 20}}>
                  <Text style={{fontSize: 18}}>{value.name}</Text>
                  <Text>GVCN: {value.teacher}</Text>
                  <Text>Sĩ số: {value.numStudents}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default MoreOptions;

const styles = StyleSheet.create({
  container: {},
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
