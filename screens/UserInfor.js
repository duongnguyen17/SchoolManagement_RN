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
import {ContributionGraph} from 'react-native-chart-kit';
import TagInfor from '../components/TagInfor';

const UserInfor = props => {
  const [userInfor, setUserInfor] = useState({});
  useEffect(() => {
    setUserInfor({
      name: 'Nguyễn Văn Dương',
      avatar: 'https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG',
      position: 'Học sinh',
      phoneNumber: '0393072748',
      email: 'duongthptnt@gmail.com',
      class: '12A1',
      absent: [
        {date: '2017-01-02', count: 1},
        {date: '2017-01-03', count: 2},
        {date: '2017-01-04', count: 1},
        {date: '2017-01-05', count: 2},
        {date: '2017-01-06', count: 1},
        {date: '2017-01-30', count: 1},
        {date: '2017-01-31', count: 2},
        {date: '2017-03-01', count: 1},
        {date: '2017-04-02', count: 1},
        {date: '2017-03-05', count: 1},
        {date: '2017-02-30', count: 1},
      ],
    });
  }, []);
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
      <View style={styles.tag}>
        {/* <ContributionGraph
          values={userInfor.absent}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={220}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default UserInfor;

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
