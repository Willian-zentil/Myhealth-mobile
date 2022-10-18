import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/body-bg.jpg')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.bgApp}>
        <View>
          <View style={styles.viewCenter}>
            <Image
              style={styles.imageLogo}
              source={require('./assets/icon-vaccine.png')}
            />
            <Text style={styles.sectionTitle}>MyHealth</Text>
          </View>
          <Text style={styles.sectionSeccondTitle}>
            Controle as suas vacinas e fique seguros
          </Text>
        </View>

        <View style={styles.viewinputs}>
          <View style={styles.camposInput}>
            <Text>E-mail</Text>
            <TextInput
              style={styles.inputEmail}
              placeholder="Email"
              autoCompleteType="email"
              autoCapitalize="none"
              placeholderTextColor="#000"
            />
          </View>

          <View style={styles.camposInput}>
            <Text>Senha</Text>
            <TextInput
              style={styles.inputPassword}
              placeholder="Senha"
              autoCompleteType="password"
              autoCapitalize="none"
              autoCorrect={true}
              placeholderTextColor="#000"
            />
          </View>
          <TouchableOpacity style={styles.buttonForm}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 44,
    fontWeight: '600',
    fontFamily: 'Averia Libre',
    fontstyle: 'normal',
    fontweight: '400',
    textDecorationLine: 'underline',
    color: '#419ED7',
    textAlign: 'center',
    marginLeft: 30,
    marginTop: 40,
  },
  camposInput: {
    width: '100%',
    height: '100%',
    maxHeight: 100,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageLogo: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: '40%',
    left: 60,
  },
  viewCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: 120,
  },
  viewinputs: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  sectionSeccondTitle: {
    fontSize: 38,
    fontWeight: '600',
    fontFamily: 'Averia Libre',
    fontweight: '400',
    color: '#419ED7',
    textAlign: 'center',
    marginTop: 81,
    marginBottom: 131,
    minHeight: 120,
  },
  textButton: {
    color: 'red',
    fontWeight: 'bold',
    background: '#49B976',
    borderWidth: 2,
    fontSize: 28,
    width: 110,
    textAlign: 'center',
    padding: 4,
    alignSelf: 'center',
  },
  inputEmail: {
    width: 300,
    maxHeight: 51,
    borderRadius: 5,
    flex: 1,
    paddingLeft: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'thistle',
    backgroundColor: 'white',
  },
  inputPassword: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 300,
    flex: 2,
    maxHeight: 51,
    borderRadius: 5,
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 30,
  },
  bgApp: {
    height: '100%',
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
