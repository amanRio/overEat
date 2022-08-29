import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Restaurants = [
    {
      imageUrl: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=", 
      name: "Pick-up",
      Rating: '4.5',
    },
    {
      imageUrl: "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb",
      name: "Soft Drinks",
      Rating: '4.5',
    },
    {
      imageUrl: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123", 
      name: "Bakery Items",
      Rating: '4.9',
    },
    {
      imageUrl: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
      name: "Fast Foods",
      Rating: '4.5'
    },
    {
      imageUrl: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
      name: "Deals",
      Rating: '4.5',
    },
    {
      imageUrl: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
      name: "Coffee & Tea",
      Rating: '4.5',
    },
    {
      imageUrl: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
      name: "Desserts",
      Rating: '4.5',
    }
  ];

export default function RestaurantItems(props) {
    return (
        
            <TouchableOpacity activeOpacity={0.9} style={{marginBottom: 10}}>
                {props.RestaurantData.map((Restaurants ,index)=>(
            <View key={index} style={{ padding: 15, marginTop: 10, backgroundColor: "white" }}>
                <RestaurantImage image={Restaurants.image_url} />
                <RestaurantDetail name={Restaurants.name} Rating={Restaurants.rating}/>
            </View>
            ))}
        </TouchableOpacity>
        
        
    )
}

const RestaurantImage = (props) => (
    <>
        <Image source={{
            uri: props.image
        }}
            style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color='white' />
        </TouchableOpacity>
    </>
);
const RestaurantDetail = (props) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View >
            <Text style={{ fontSize: 17, fontWeight: '900' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, fontWeight: '300' }}>{props.name}</Text>
        </View>
        <View style={{ backgroundColor: '#eee', borderRadius: 15, height: 30, width: 30, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: '600' }}>{props.Rating}</Text>
        </View>

    </View>
);