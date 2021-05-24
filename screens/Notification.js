import React, {useState, useRef, useEffect} from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Animated,
  TextInput,
} from 'react-native';
import TagNotification from '../components/TagNotification';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Notification = props => {
  const [notifications, setNotifications] = useState([
    {
      name: 'Nguyễn Văn Dương',
      avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
      position: 'Hiệu trưởng',
      content: 'Thông báo tới toàn thể nhà trường: .....',
      time: 'thứ 4, 23/05/2021',
      category: 'bình thường',
    },
    {
      name: 'Nguyễn Văn Tuấn',
      avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
      position: 'GVCN',
      content: 'Ngày mai lớp chúng ta sẽ....',
      time: 'thứ 4, 23/05/2021',
      category: 'xin nghỉ',
    },
    {
      name: 'Nguyễn Văn Duy',
      avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
      position: 'GVBM',
      content: 'Ngày mai lớp chúng ta sẽ....',
      time: 'thứ 4, 23/05/2021',
      category: 'bình thường',
    },
    {
      name: 'Nguyễn Văn Dương',
      avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
      position: 'Hiệu trưởng',
      content: 'Thông báo tới toàn thể nhà trường: .....',
      time: 'thứ 4, 23/05/2021',
      category: 'bình thường',
    },
    {
      name: 'Nguyễn Văn Tuấn',
      avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
      position: 'GVCN',
      content: 'Ngày mai lớp chúng ta sẽ....',
      time: 'thứ 4, 23/05/2021',
      category: 'xin nghỉ',
    },
    {
      name: 'Nguyễn Văn Duy',
      avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
      position: 'GVBM',
      content: 'Ngày mai lớp chúng ta sẽ....',
      time: 'thứ 4, 23/05/2021',
      category: 'bình thường',
    },
  ]);
  const gotoUserInfor = userName => {
    props.navigation.navigate('UserInfor', {name: userName});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 5, marginTop: 10}}>
        {notifications.map((value, index) => (
          <TagNotification
            data={value}
            key={index}
            gotoUserInfor={gotoUserInfor}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#fff',
          borderRadius: 50,
          width: 50,
          height: 50,
        }}
        onPress={() => {
          props.navigation.navigate('Add Notification');
        }}>
        <MaterialIcons name="add-circle-outline" size={50} color="#0066ff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Notification;
