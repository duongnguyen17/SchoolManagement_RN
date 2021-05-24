import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  //VirtualizedList,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import TagUser from '../components/TagUser';
const Teachers = (props) => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    setTeachers([
      {
        _id: '98364582367r7yweqeyr',
        name: 'Nguyễn Văn Dương',
        avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
        position: 'Họ sinh',
        phoneNumber: '0393072748',
        email: 'duongthptnt@gmail.com',
        class: '10A7',
      },
      {
        _id: '8762348egwgfjsdajfg7',
        name: 'Nguyễn Văn Duy',
        avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
        position: 'Học sinh',
        phoneNumber: '0393072748',
        email: 'duongthptnt@gmail.com',
        class: '12A1',
      },
    ]);
  }, []);
  // const getItem = (data, index) => {
  //   // console.log(`data`, data);
  //   console.log(`item`, {
  //     id: index,
  //     data: data[index],
  //   });
  //   return {
  //     id: index,
  //     data: data[index],
  //   };
  // };
  // const getItemCount = data => data.length;
  const gotoUserInfor = userName => {
    props.navigation.navigate('UserInfor', {name: userName});
  };
  return (
    <SafeAreaView>
      {/* <FlatList
        data={teachers}
        // initialNumToRender={5}
        renderItem={({item}) => <Item teacher={item.data} />}
        keyExtractor={item => item._id}
        // getItemCount={getItemCount}
        // getItem={getItem}
      /> */}
      <ScrollView style={{marginVertical: 10}}>
        {teachers.map((value, index) => (
          <TagUser user={value} key={index} gotoUserInfor={gotoUserInfor}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Teachers;
