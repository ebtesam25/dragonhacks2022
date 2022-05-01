import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import { Button } from 'react-native-paper';
import { useEffect, useState } from "react";
import { Alert, Platform, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// You need to swap out the Auth0 client id and domain with the one from your Auth0 client.
// In your Auth0 client, you need to also add a url to your authorized redirect urls.
//
// For this application, I added https://auth.expo.io/@arielweinberger/with-auth0 because I am
// signed in as the 'arielweinberger' account on Expo and the name/slug for this app is 'with-auth0'.
//
// You can open this app in the Expo client and check your logs to find out your redirect URL.

const auth0ClientId = "roQKbe9OehT0wgQ5Qkkr93AaTStRsjMU";
const authorizationEndpoint = "https://dev-rq9s78x4.us.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function Login() {

  const navigation = useNavigation();
  const [name, setName] = useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );

  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  console.log(`Redirect URL: ${redirectUri}`);

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
        navigation.navigate('Home',{name:name})
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
        <Image source={{uri:'https://img.icons8.com/fluency/96/000000/reading-unicorn.png'}} style={{height:100, width:100}}></Image>
        <Text style={{fontWeight:'bold', fontSize:30, color:"#FFF"}}>tellmeastory.ai</Text>
      {name ? (
        <>
          <Text style={styles.title}>You are logged in, {name}!</Text>
          <Button title="Log out" onPress={() => setName(null)} />
        </>
      ) : (
        <Button
        mode="contained"
        style={{borderRadius:20, paddingHorizontal:'5%', paddingVertical:'.5%', marginTop:'15%', backgroundColor:"#581596"}}
        disabled={!request}
        onPress={() => promptAsync({ useProxy })}
        >Log in with Auth0</Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});