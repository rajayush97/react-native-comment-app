import { StyleSheet, Dimensions, Platform } from 'react-native';

export const COLORS = ['#e1f5fe', '#fce4ec', '#e8f5e9', '#fff3e0', '#ede7f6', '#f3e5f5'];

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.95,
    alignSelf: 'center',
    
    // iOS shadow properties (for darker shadow effect)
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 4}, 
    shadowOpacity: 0.3, 
    shadowRadius: 12,    
    elevation: 12,       
    
    backgroundColor: '#fff',
    minHeight: 180, 
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 12,
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#f4ede4', 
    borderRadius: 10,
    shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0,
    shadowRadius: 3,
    elevation: Platform.OS === 'android' ? 3 : 0,
  },
  
  ratingCount: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
  },

    clearRatingButton: {
      marginTop: 20,
      padding: 8,
      borderRadius: 5,
      alignItems: 'center',
    },
    clearRatingContainer: {
      width: '100%',
      alignItems: 'flex-end',
      paddingRight: 10,
    },
    
    clearRatingText: {
      color: '#000',
      fontSize: 12,
      marginTop: 15,
    },
    
});

export default styles;
