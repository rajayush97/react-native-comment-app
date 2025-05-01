import React, { useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, setRating } from '../redux/actions';
import CommentCard from '../components/CommentCard';
import { saveRatings, loadRatings } from '../utils/storage';
import styles from '../styles/CommentListScreenStyle'; 

const CommentListScreen = () => {
  const dispatch = useDispatch();

  const comments = useSelector(state => state.comments);
  const ratings = useSelector(state => state.ratings);
  const error = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);
  const page = useSelector(state => state.page);

  useEffect(() => {
    dispatch(fetchComments());
    loadRatings().then((loadedRatings) => {
      Object.entries(loadedRatings).forEach(([id, rating]) => {
        dispatch(setRating(Number(id), rating));
      });
    });
  }, []);

  useEffect(() => {
    saveRatings(ratings);
  }, [ratings]);

  const handleLoadMore = () => {
    if (!loading) {
      dispatch(fetchComments(page + 1));
    }
  };

  if (loading && page === 1) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Loading comments...</Text>
      </View>
    );
  }

  if (error) return <Text style={styles.error}>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Comments</Text>
      <FlatList
        data={comments}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <CommentCard
            comment={item}
            rating={ratings[item.id]}
            onRate={(id, val) => dispatch(setRating(id, val))}
          />
        )}
        onEndReached={handleLoadMore} 
        onEndReachedThreshold={0.5} 
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 20,
        }}
      />
      {loading && page > 1 && (
        <ActivityIndicator size="large" color="#4a90e2" />
      )}
    </View>
  );
};

export default CommentListScreen;
