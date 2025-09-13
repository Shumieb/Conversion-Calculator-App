import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text, View } from 'react-native';

const CustomScreenFooter = () => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 5 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5 name="copyright" size={16} color="#e64459" />
                <Text style={{ fontSize: 16, marginLeft: 5, color: "#e64459", fontWeight: "bold" }}>2025</Text>
            </View>
            <Text style={{ textAlign: "center", fontSize: 15, color: "#e64459", fontWeight: "bold" }}>Created by Shumie</Text>
        </View>
    )
}

export default CustomScreenFooter