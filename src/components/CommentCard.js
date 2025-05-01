import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import Toast from 'react-native-toast-message';
import { Platform } from 'react-native';
import styles, { COLORS } from '../styles/componentCardStyle'; 

const getRandomColor = (id) => COLORS[id % COLORS.length];

const CommentCard = ({ comment, rating, onRate }) => {
  const bgColor = getRandomColor(comment.id);
  
  // Handle the onFinishRating callback to show rating
  const handleRating = (val) => {
    onRate(comment.id, val);
    Toast.show({ type: 'success', text1: 'Thanks for rating!' });
  };

   // Handle Clear Rating
  const handleClearRating = () => {
    onRate(comment.id, 0); // Clear the rating by setting it to 0
    Toast.show({ type: 'info', text1: 'Rating cleared' });
  };

  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>{comment.title}</Text>
      <Text style={styles.body}>{comment.body}</Text>
      
      <View style={styles.ratingContainer}>
        <Rating
          type="star"
          startingValue={rating || 0}
          imageSize={30}
          onFinishRating={handleRating}
          ratingColor={Platform.OS === 'android' ? '#1976d2' : undefined}
          tintColor={Platform.OS === 'ios' ? '#f4ede4' : undefined}
          style={{ marginTop: 10 }}
        />
        
        {rating > 0 && (
          <Text style={styles.ratingCount}>
            {rating} {rating === 1 ? 'rating' : 'ratings'}
          </Text>
        )}
      </View>

       {/* Clear rating button */}
       {rating > 0 && (
         <View style={styles.clearRatingContainer}>
         <TouchableOpacity onPress={handleClearRating}>
           <Text style={styles.clearRatingText}>Clear Rating</Text>
         </TouchableOpacity>
       </View>
        )}
    </View>
  );
};

export default CommentCard;
