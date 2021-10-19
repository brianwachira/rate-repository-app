import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  namespace: string;
  constructor(namespace: string = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );
    return accessToken ? JSON.parse(accessToken) : '';
  }

  async setAccessToken(accessToken: string) {
    // Add the access token to the storage
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(accessToken)
    );
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;