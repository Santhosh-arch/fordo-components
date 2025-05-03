import { ProductSummary } from '@/models/ProductSummary';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export function ProductListingCard(props: ProductSummary) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.thumbnailUrl }} style={styles.image} />
      <View style={{marginLeft:8,flex:1}}>
        <Text style={{backgroundColor:"gold",flex:0,alignItems: 'flex-start',justifyContent:'flex-start'}}>Featured</Text>
        <View style={{ flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={styles.title}>{props.title}</Text>
      <Ionicons name='heart-outline' size={24}></Ionicons>
      </View>
      <Text style={styles.price}>₹{props.price} {props.unit}</Text>
      <Text>Verified</Text>
      <View style={{flexDirection:"row",alignItems:"flex-end",justifyContent:'space-between',flex:1,marginBottom:4}}>
      <Text style={styles.location}>{props.location}</Text>
      <Text style={styles.date}>{props.postedOn}</Text>
      </View>
    </View></View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection:"row",
    margin: 8,
    

  },
  image: {
    width: 125,
    height: 125,
    margin:4,
    backgroundColor:'lightgrey',
    resizeMode:'cover',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    
  },
  price: {
    fontSize: 18,
    color: 'black',
    fontWeight:"bold"
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
});
