import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Navbar from "../components/navbar";

export default function Book ({route}) {
    const navigation = useNavigation();
    const {name} = route.params
    const libimg = "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-reading-book-mothers-day-wanicon-lineal-color-wanicon.png"
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet libero sit amet odio pharetra, non pellentesque odio aliquam. Sed lacus augue, sagittis eget dapibus id, scelerisque sed orci. Pellentesque vel nisl felis. Suspendisse convallis tempor mattis. Mauris posuere sollicitudin neque, ut pretium erat dignissim eu. Donec neque neque, accumsan quis purus ut, posuere egestas magna. Proin ornare turpis venenatis libero sodales rhoncus.Cras sit amet venenatis leo, sit amet efficitur lorem. Curabitur tincidunt enim nec ipsum posuere, at egestas lorem malesuada. Suspendisse gravida augue sit amet justo congue ullamcorper. Donec luctus dolor magna. Vivamus accumsan, metus eu consequat aliquet, erat libero pretium magna, eget porta erat leo sit amet nisi. Phasellus quis eleifend arcu. Nullam nec metus ligula. In sed sagittis odio. Integer tristique ut odio in tempus. Sed maximus arcu sit amet neque auctor, ut scelerisque ante dignissim. Integer malesuada massa odio, vel dictum felis hendrerit sit amet. Donec non sagittis dolor, id sagittis felis. Proin vitae venenatis tellus. Fusce in fringilla dolor. Suspendisse convallis sagittis nulla, non porta elit pulvinar vel. In non semper nunc. Nunc commodo odio in imperdiet pretium. Mauris vitae enim ornare, tincidunt sapien non, mattis velit. Maecenas convallis nisl sed ipsum euismod, a vulputate quam porta. Cras ultrices ex ac justo pellentesque, molestie viverra nulla luctus. Fusce a ligula erat. Phasellus orci quam, auctor vel molestie a, gravida vitae enim. Donec eget accumsan mi. Mauris et sapien ut ante tincidunt facilisis.Etiam interdum tellus vel enim rutrum, in efficitur nibh ornare. Donec ultricies commodo urna, eu ultricies turpis cursus imperdiet. Sed eget ligula mi. Phasellus laoreet venenatis tempor. Nulla non cursus nibh. Maecenas rutrum leo et fringilla aliquet. Nulla sed lorem eleifend, efficitur dui sit amet, consequat turpis. Mauris tincidunt auctor tempus. Maecenas quis feugiat nunc. Pellentesque quis ex vitae quam consequat vestibulum eu eget erat. Nunc posuere velit quis tincidunt sollicitudin. Ut eu euismod erat. In hac habitasse platea dictumst. Suspendisse convallis massa eu sem congue malesuada. Pellentesque ex orci, accumsan ac semper non, ullamcorper at orci. Nam porta id neque in porttitor. Donec eget odio consectetur, malesuada velit in, malesuada erat."
    const [details, setdetails] = useState({'img':libimg,'name':'The King of Prussia', 'desc':desc})
    return(
        <View style={{paddingTop:'10%', flex:1}}>
            <View style={{paddingHorizontal:'7.5%'}}>
                <Text style={{fontWeight:'bold', textAlign:'center'}}>Book</Text>
                <Text style={{fontWeight:'bold', color:"#000", fontSize:22, marginBottom:'5%', alignSelf:'center'}}>{details.name}</Text>


                <View style={{width:350, height:650, alignSelf:'center'}}>
                    <View style={{width:'90%', marginLeft:'5%', marginVertical:'5%'}}>
                    <ScrollView><Text style={{textAlign:'left', marginTop:'5%'}}>{details.desc}</Text></ScrollView>
                    </View>
                    
                </View>
            </View>
            
            <Navbar/>
        </View>
    )
}