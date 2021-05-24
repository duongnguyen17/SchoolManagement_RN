import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import TableSchedule from '../components/TableSchedule';

const Schedule = () => {
  const [days, setDays] = useState([
    {
      title: 'Thứ 2, 21/05/2021',
      lessMorning: 5,
      subMorning: [
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
      ],
      lessAfternoon: 1,
      subAfternoon: [
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
      ],
    },
    {
      title: 'Thứ 3, 22/05/2021',
      lessMorning: 5,
      subMorning: [
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
      ],
      lessAfternoon: 1,
      subAfternoon: [
        {
          name: 'Sinh học',
          teacher: 'Nguyễn Văn Dương',
          note: 'nộp bài báo cáo',
        },
      ],
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 5, marginTop: 10}}>
        {days.map((value, index) => (
          <TableSchedule data={value} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;
