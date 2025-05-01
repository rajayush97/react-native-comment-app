import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e3a59',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f5f9',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  error: {
    textAlign: 'center',
    marginTop: 50,
    color: 'red',
    fontSize: 16,
  },
});

export default styles;
