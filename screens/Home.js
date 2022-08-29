import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Catagories from '../components/Catagories';
import RestaurantItems from '../components/RestaurantItems';
import BottomBar from '../components/BottomBar';

const YELP_API_KEY = "_utLaP_-yyeFfMYlmeqMB__JnPhA9g_CWlr4_mN2sHreK8DsY_-Ac5_GYFjKQ4LIXhJUOMmf3OJLENrdi8RkkiAaMYG_dG6FWQRm1FFXbDa9OLmeDzbfpEa7y7wMY3Yx"

export default function Home() {
  const [RestaurantData, setRestaurantData] = useState();
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=NewYork";
  
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
         json.businesses.filter((businesses)=>businesses.transactions.includes(activeTab.toLowerCase()))
          )
        )
    
  };

  useEffect(()=>{
    getRestaurantsFromYelp()
    
  },[activeTab])


  return (
    <SafeAreaView style={style.AndroidSafeArea}>
      <View style={{ backgroundColor: 'white', padding: '3%' }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar  />
      </View>

      <ScrollView>
        <Catagories />
        <RestaurantItems RestaurantData={RestaurantData} />
      </ScrollView>
      <BottomBar />
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});