import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StateContext } from "../context/state";
import API from "../http/api";
const { height, width } = Dimensions.get("screen");

const TabScreenA = ({ navigation }: any) => {
    
  const [num, setNum] = useState<string | null>(null);
  const LinkToPageG = () => {
    navigation.navigate("Screen_G", { name: "李华", id: "18" });
    //前往StackG页面
  };

  useEffect(() => {
    console.log("宽/高",width,height);
  }, []);

  useEffect(() => {
    (async () => {
      const res1 = await API.relicManage.getData();
      console.log("管理信息API模块中的数据结果1", res1);
      const res2 = await API.user.userData();
      console.log("用户信息API模块中的数据结果2", res2);
      const res3 = await API.relicManage.initData();
      console.log("管理信息API模块中的数据结果3", res3);
    })();
  }, []);

  //useContext
  const { state, dispatch }: any = useContext(StateContext);
  useEffect(() => {
    console.log("context中的默认值", state);
  }, [state]);
  //useContext

  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "orange", height: 100 }}
        activeOpacity={0.7}
        onPress={() => LinkToPageG()}
      >
        <Text>TAB页面A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "blue", height: 100 }}
        activeOpacity={0.7}
        onPress={() => dispatch({ type: "changeToBlue", color: "blue" })}
      >
        <Text style={{color:"white"}}>修改Context</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});

export default TabScreenA;
