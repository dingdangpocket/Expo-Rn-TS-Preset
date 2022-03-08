import React,{FC, useState,useEffect} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput
  } from 'react-native';

  interface IProps {
    increment: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent> | any,
    ) => void;
    navigation: any;
    route:any
  }
  //Props约束

  interface IProps {
   title:string;
   onPress:()=>void;
   onCheck:(text:string)=>void;
  }

const ScreenG:React.FC<IProps>  = ({ navigation,route})  => {
    const [SearchValue, setSearchValue] = useState<string>("");
    useEffect(() => {
      console.log("文本框内容",SearchValue);
    }, [SearchValue]);
    //文本框;

    const {name,id}=route.params
    useEffect(() => {
      console.log("页面传参",name,id);
    }, []);
    //页面传参;

    return (
        <View >
            <Text>G页面</Text>
            <TextInput
            style={{
              backgroundColor: "rgb(220,220,220)",
              width: 1000 * 0.7,
              height: 35,
              borderColor: "black",
              padding: 5,
            }}
            placeholder="请输入搜索内容..."
            onChangeText={setSearchValue}
            value={SearchValue}
          ></TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
export default ScreenG;