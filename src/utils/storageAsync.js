import { AsyncStorage } from 'react-native';

const storageData = {
  async saveKey(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch(error) {
      console.log('AsyncStorage Error: ' + error.message);
      return false;
    }

    return true;
  },

  async getKey(key) {
    try {
      const result = await AsyncStorage.getItem(key);
      return result
    } catch(e) {
      console.error(e);
      return null;
    }
  },

  async removeKey(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch(e) {
      console.error(e);
      return null;
    }
  }
}

export default storageData;