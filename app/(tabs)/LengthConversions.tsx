import { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const LengthConversions = () => {

    // dropdown variables
    const [openInputDropdown, setOpenInputDropdown] = useState(false);
    const [openOutputDropdown, setOpenOutputDropdown] = useState(false);
    const [valueInput, setValueInput] = useState("apple");
    const [valueOutput, setValueOutput] = useState("banana");
    const [itemsInput, setItemsInput] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const [itemsOutput, setItemsOutput] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    // input values
    const [inputValue, setInputValue] = useState("100");
    const [outputValue, setOutputValue] = useState("50");

    useEffect(() => {

    }, [])

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
                {/* Top Section */}
                <View style={{ width: "100%", backgroundColor: "#e64459", height: "50%", justifyContent: "center" }}>
                    {/* Dropdown Section */}
                    <View
                        style={{
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginHorizontal: "auto",
                            width: "70%"
                        }}
                    >
                        <DropDownPicker
                            open={openInputDropdown}
                            value={valueInput}
                            items={itemsInput}
                            setOpen={setOpenInputDropdown}
                            setValue={setValueInput}
                            setItems={setItemsInput}
                            style={{
                                backgroundColor: "#e64459",
                                borderColor: "#e64459"
                            }}
                            labelStyle={{
                                fontWeight: "bold",
                                color: "#fff",
                                fontSize: 26,

                            }}
                            textStyle={{
                                fontSize: 20,
                                color: "#e64459",
                                fontWeight: "bold"
                            }}
                        />
                    </View>

                    {/* TextInput Section */}
                    <TextInput
                        style={{
                            color: "#fff",
                            fontSize: 26,
                            width: "65%",
                            textAlign: "center",
                            borderRadius: 10,
                            fontWeight: "bold",
                            marginHorizontal: "auto",
                            marginVertical: 10,
                            borderColor: "#c7c2c2ff",
                            borderWidth: 1,
                        }}
                        placeholder='50'
                        value={inputValue}
                        onChangeText={setInputValue}
                        keyboardType='numeric'
                    />
                    <Text
                        style={{
                            color: "#fff",
                            fontWeight: "bold",
                            marginTop: 18,
                            textAlign: "center"
                        }}
                    >tap to change the value</Text>

                </View>

                {/* Bottom Section */}
                <View style={{ width: "100%", height: "50%", justifyContent: "center" }}>
                    {/* Dropdown Section */}
                    <View
                        style={{
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 25,
                            marginHorizontal: "auto",
                            width: "70%"
                        }}
                    >
                        <DropDownPicker
                            open={openOutputDropdown}
                            value={valueOutput}
                            items={itemsOutput}
                            setOpen={setOpenOutputDropdown}
                            setValue={setValueOutput}
                            setItems={setItemsOutput}
                            style={{
                                backgroundColor: "#eaebef",
                                borderColor: "#eaebef"
                            }}
                            labelStyle={{
                                fontWeight: "bold",
                                color: "#e64459",
                                fontSize: 26,

                            }}
                            textStyle={{
                                fontSize: 20,
                                color: "#e64459",
                                fontWeight: "bold"
                            }}
                        />
                    </View>

                    {/* TextInput Section */}
                    <Text
                        style={{
                            color: "#e64459",
                            fontSize: 26,
                            width: "65%",
                            textAlign: "center",
                            borderRadius: 10,
                            fontWeight: "bold",
                            marginHorizontal: "auto",
                            marginVertical: 10,
                            borderColor: "#e64459",
                            borderWidth: 1,
                            paddingVertical: 10
                        }}
                    >{outputValue}</Text>

                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default LengthConversions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eaebef",
        paddingBottom: 20
    },
})