import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import Classes from './screens/Classes';
import Message from './screens/Message';
import MoreOptions from './screens/MoreOptions';
import Notification from './screens/Notification';
import Schedule from './screens/Schedule';
import Students from './screens/Students';
import Subjects from './screens/Subjects';
import Teachers from './screens/Teachers';
import AddNotification from './screens/AddNotification';
import UserInfor from './screens/UserInfor';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
const Tab = AnimatedTabBarNavigator();
const MainStack = createStackNavigator();
const OptionsStack = createStackNavigator();
// const Options = () => {
//   return (
//     <OptionsStack.Navigator initialRouteName="MoreOptions">
//       <OptionsStack.Screen
//         name="MoreOptions"
//         component={MoreOptions}
//         options={{headerShown: false}}
//       />
//       <OptionsStack.Screen name="Teachers" component={Teachers} />
//       <OptionsStack.Screen name="Students" component={Students} />
//       <OptionsStack.Screen name="Classes" component={Classes} />
//       <OptionsStack.Screen name="Subjects" component={Subjects} />
//     </OptionsStack.Navigator>
//   );
// };
const TabBar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#3399ff',
        inactiveTintColor: '#222222',
        activeBackgroundColor: '#e6e6e6',
        tabStyle: {shadow: true, tabBarBackground: '#4d94ff'}, //không thấy có thay đổi gì
        labelStyle: {
          fontSize: 18,
        },
      }}>
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({focused, color}) => (
            <MaterialIcons
              name="schedule"
              size={focused ? 24 : 30}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="notifications-none"
              size={focused ? 24 : 30}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="messenger-outline"
              size={focused ? 24 : 30}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreOptions}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Octicons
              name="three-bars"
              size={focused ? 24 : 30}
              color={focused ? color : '#222222'}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        <MainStack.Screen
          name="Main"
          component={TabBar}
          options={{headerShown: false}}
        />
        <MainStack.Screen name="Teachers" component={Teachers} />
        <MainStack.Screen
          name="Students"
          component={Students}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
        {/* <MainStack.Screen
          name="Classes"
          component={Classes}
          options={({route}) => ({
            title: route.params.name,
          })}
        /> */}
        <MainStack.Screen
          name="UserInfor"
          component={UserInfor}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
        <MainStack.Screen name="Add Notification" component={AddNotification} />
        <MainStack.Screen name="Subjects" component={Subjects} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
