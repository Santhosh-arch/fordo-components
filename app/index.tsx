import { ProductListingCard } from "@/components/ProductListingCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { mockProducts } from "@/models/ProductSummary";
import { useNavigation } from "expo-router";
import { FlatList, View } from "react-native";

export default function HomeScreen() {
    const navigation = useNavigation();

//   useEffect(() => {
//     navigation.setOptions({ headerShown: false });
//   }, [navigation]);
    return(<ThemedView >
        
        <ThemedText type="title">Components</ThemedText>
        {/* <ProductListingCard {...mockProducts[0]}></ProductListingCard> */}
        <FlatList ItemSeparatorComponent={()=><View style={{borderColor:"#e5e5e5",borderBottomWidth:1,marginLeft:8,marginRight:8}}></View>} keyExtractor={item=>item.adId.toString()} data={mockProducts} renderItem={(item)=>{return<ProductListingCard {...item.item}></ProductListingCard>}}></FlatList>
        
        </ThemedView>);
}