import { HandlegConversions, HandlekgConversions, HandlemgConversions, HandleounceConversions, HandlepoundConversions } from '@/utils/pageHelpers/WeightPageHelpers';
import { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const WeightConversions = () => {
    // variables
    const labelData = [
        { label: 'Kilogram(s)', value: 'kg' },
        { label: 'Gram(s)', value: 'g' },
        { label: 'Miligram(s)', value: 'mg' },
        { label: 'Pound(s)', value: 'pound' },
        { label: 'Ounce', value: 'ounce' },
    ]

    //  state
    const [openInputDropdown, setOpenInputDropdown] = useState(false);
    const [openOutputDropdown, setOpenOutputDropdown] = useState(false);

    // dropdown
    const [valueInput, setValueInput] = useState("kg");
    const [valueOutput, setValueOutput] = useState("g");

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const [itemsInput, setItemsInput] = useState(labelData);
    const [itemsOutput, setItemsOutput] = useState(labelData);

    // input
    const [inputValue, setInputValue] = useState("");
    const [outputValue, setOutputValue] = useState("");

    // handle conversions
    //on dropdown change
    useEffect(() => {
        HandleConversion(inputValue)
    }, [valueInput, valueOutput])

    // text input change handler
    const HandleTextChange = (val: string) => {
        setInputValue(val);
        HandleConversion(val)
    }

    // conversion
    const HandleConversion = (val: string) => {

        if (val.trim().length < 1) return

        let numberVal = Number(val);
        if (numberVal && numberVal < 0) {
            setErrorMsg("Please enter a number greater than 0.")
            setError(true)
            return
        } else if (!numberVal) {
            setErrorMsg("Please enter a valid number.")
            setError(true)
            return
        } else {

            let valToEvaluate = valueInput
            let valToSet = valueOutput
            let funcToSend = setOutputValue

            switch (valToEvaluate) {
                case "kg":
                    HandlekgConversions(val, valToSet, funcToSend, setErrorMsg, setError)
                    break
                case "g":
                    HandlegConversions(val, valToSet, funcToSend, setErrorMsg, setError)
                    break
                case "mg":
                    HandlemgConversions(val, valToSet, funcToSend, setErrorMsg, setError)
                    break
                case "pound":
                    HandlepoundConversions(val, valToSet, funcToSend, setErrorMsg, setError)
                    break
                case "ounce":
                    HandleounceConversions(val, valToSet, funcToSend, setErrorMsg, setError)
                    break
                default:
                    setErrorMsg(`Unable to convert ${val}`)
                    setError(true)
                    break
            }
        }
    }

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
                {/* Top Section */}
                <View style={styles.topSectContainer}>
                    {/* Dropdown Section */}
                    <View style={styles.dropDownSect}>
                        <DropDownPicker
                            open={openInputDropdown}
                            value={valueInput}
                            items={itemsInput}
                            setOpen={setOpenInputDropdown}
                            setValue={setValueInput}
                            setItems={setItemsInput}
                            style={{ backgroundColor: "#e64459", borderColor: "#e64459" }}
                            labelStyle={{ fontWeight: "bold", color: "#fff", fontSize: 26 }}
                            textStyle={{ fontSize: 20, color: "#e64459", fontWeight: "bold" }}
                        />
                    </View>

                    {/* TextInput Section */}
                    <TextInput
                        style={styles.input}
                        placeholder='0'
                        value={inputValue}
                        onChangeText={(val) => HandleTextChange(val)}
                        keyboardType='numeric'
                    />
                    {
                        (error && errorMsg.trim().length < 1) ?
                            <Text style={[styles.info, styles.errorLight]}>{errorMsg}</Text> :
                            <Text style={styles.info}>tap to change the value</Text>
                    }
                </View>

                {/* Bottom Section */}
                <View style={styles.bottomSectContainer}>
                    {/* Dropdown Section */}
                    <View style={styles.dropDownSect}>
                        <DropDownPicker
                            open={openOutputDropdown}
                            value={valueOutput}
                            items={itemsOutput}
                            setOpen={setOpenOutputDropdown}
                            setValue={setValueOutput}
                            setItems={setItemsOutput}
                            style={{ backgroundColor: "#eaebef", borderColor: "#eaebef" }}
                            labelStyle={{ fontWeight: "bold", color: "#e64459", fontSize: 26 }}
                            textStyle={{ fontSize: 20, color: "#e64459", fontWeight: "bold" }}
                        />
                    </View>

                    {/* Answer Section */}
                    <Text style={styles.answerTxt}>{outputValue}</Text>
                    {
                        (error && errorMsg.trim().length < 1) &&
                        <Text style={[styles.info, styles.errorDark]}>{errorMsg}</Text>
                    }
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default WeightConversions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#eaebef",
        paddingBottom: 20
    },
    topSectContainer: {
        width: "100%",
        backgroundColor: "#e64459",
        height: "50%",
        justifyContent: "center"
    },
    dropDownSect: {
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "auto",
        width: "80%"
    },
    input: {
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
    },
    info: {
        color: "#fff",
        fontWeight: "bold",
        marginTop: 18,
        textAlign: "center"
    },
    bottomSectContainer: {
        width: "100%",
        height: "50%",
        justifyContent: "center"
    },
    answerTxt: {
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
    },
    errorLight: {
        color: "#ed9da8ff"
    },
    errorDark: {
        color: "#e64459"
    }
})