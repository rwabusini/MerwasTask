const CartScreen = ({ navigation }) => {
    return (     
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{}}>CartScreen</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Product")}>
          <Text>"Go To Home Screen"</Text>
        </TouchableOpacity>
      </View>
      
    );
    };