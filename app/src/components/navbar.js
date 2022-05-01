import { View } from "react-native";
import { Icon } from "react-native-elements";

export default function Navbar () {
    return(
        <View style={{width:'100%', flexDirection:'row', justifyContent:'space-around', backgroundColor:"#581596", paddingVertical:'2.5%', position:'absolute', bottom:0}}>
            <Icon name="home" type="feather" color="#FFF"></Icon>
            <Icon name="book" type="feather" color="#FFF"></Icon>
            <Icon name="user" type="feather" color="#FFF"></Icon>
        </View>
    )
}