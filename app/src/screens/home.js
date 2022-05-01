import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Navbar from "../components/navbar";

export default function Home ({route}) {
    const navigation = useNavigation();
    const {name} = route.params
    const libimg = "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-reading-book-mothers-day-wanicon-lineal-color-wanicon.png"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet libero sit amet odio pharetra, non pellentesque odio aliquam."
    const [library, setlibrary] = useState([,{'id':'2','img':libimg,'name':'The King of Prussia', 'desc':desc},{'id':'3','img':libimg,'name':'The King of Prussia', 'desc':desc},{'id':'4','img':libimg,'name':'The King of Prussia','desc':desc},{'id':'5','img':libimg,'name':'The King of Prussia', 'desc':desc},{'id':'6','img':libimg,'name':'The King of Prussia', 'desc':desc}])
    return(
        <View style={{paddingTop:'10%', flex:1}}>
            <View style={{paddingHorizontal:'7.5%'}}>
                <Text style={{fontWeight:'bold', textAlign:'center'}}>Home</Text>
                <Text>Welcome Back, {name}</Text>
                <Text style={{fontWeight:'bold', color:"#000", fontSize:22, marginBottom:'5%'}}>Library</Text>


                <View style={{width:300, height:650, alignSelf:'center'}}><ScrollView>{library.map((lib)=>(<TouchableOpacity onPress={()=>navigation.navigate('Book',{bookid:lib.id})}><View style={{backgroundColor:"#EAEAEA", width:300, borderRadius:20, height:150, margin:'2.5%', flexDirection:'row'}}>
                    <View style={{marginTop:'10%', marginLeft:'5%'}}>
                        <Image source={{uri:lib.img}} style={{width:50, height:50, alignSelf:'center'}}></Image>
                    </View>
                    <View style={{width:'60%', marginLeft:'5%', marginVertical:'5%'}}>
                    <Text style={{fontWeight:'bold', textAlign:'left', marginTop:'.5%'}}>{lib.name}</Text>
                    <Text style={{textAlign:'left', marginTop:'5%'}}>{lib.desc}</Text>
                    </View>
                    
                </View></TouchableOpacity>))}</ScrollView></View>
            </View>
            
            <Navbar/>
        </View>
    )
}