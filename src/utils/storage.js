import AsyncStorage from '@react-native-async-storage/async-storage';

const RATINGS_KEY = 'ratings';

export const saveRatings = async (ratings) => {
  try {
    await AsyncStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
  } catch (e) {
    console.error('Failed to save ratings:', e);
  }
};

export const loadRatings = async () => {
  try {
    const value = await AsyncStorage.getItem(RATINGS_KEY);
    return value ? JSON.parse(value) : {};
  } catch (e) {
    console.error('Failed to load ratings:', e);
    return {};
  }
};
