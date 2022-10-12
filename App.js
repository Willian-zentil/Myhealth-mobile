import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
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
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}>
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
              Controle as suas vacinas e fique seguro
            </Text>
          </View>

          <View style={styles.viewinputs}>
            <TextInput
              style={styles.inputEmail}
              placeholder="Email"
              autoCompleteType="email"
              autoCapitalize="none"
              placeholderTextColor="#000"
            />
            <TextInput
              style={styles.inputPassword}
              placeholder="Senha"
              autoCompleteType="password"
              autoCapitalize="none"
              autoCorrect={true}
              placeholderTextColor="#000"
            />
            <TouchableOpacity style={styles.buttonForm}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 64,
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
  imageLogo: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: '50%',
    left: 30,
  },
  viewCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: 120,
    minWidth: '100%',
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
    width: 250,
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
    width: 250,
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
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
