import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
const AddNotification = props => {
  const [isShow, setIsShow] = useState(false);
  let height = useRef(new Animated.Value(0)).current;
  const [notiTo, setNotiTo] = useState('Toàn trường');
  const [arrOption, setArrOption] = useState([]);
  const input = useRef(null);
  useEffect(() => {
    setArrOption(['Toàn trường', 'Giáo viên', 'Lớp']);
  }, []);
  const show = () => {
    Animated.timing(height, {
      toValue: 100,
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 20,
            flex: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Thông báo tới: </Text>
            <View style={{marginLeft: 10}}>
              <TouchableOpacity
                onPress={() => {
                  if (isShow) {
                    hide();
                  } else show();
                }}
                style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18}}>{notiTo}</Text>
              </TouchableOpacity>
              <Animated.View
                style={{
                  height: height,
                  borderWidth: 1,
                  borderColor: 'gray',
                }}>
                {arrOption.map((value, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setNotiTo(value);
                      hide();
                    }}
                    style={{marginHorizontal: 10, marginVertical: 5}}>
                    <Text style={{fontSize: 18}}>{value}</Text>
                  </TouchableOpacity>
                ))}
              </Animated.View>
            </View>
          </View>
          <TouchableOpacity
            style={{height: 300, marginVertical: 10}}
            onPress={() => {
              input.current.focus();
            }}>
            <TextInput
              placeholder="Nội dung thông báo"
              ref={input}
              multiline={true}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
              style={styles.button}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
                Hủy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {marginLeft: 30}]}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
                Đăng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AddNotification;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
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
    backgroundColor: '#0066ff',
    borderColor: '#0066ff',
    borderWidth: 0.5,
  },
});
