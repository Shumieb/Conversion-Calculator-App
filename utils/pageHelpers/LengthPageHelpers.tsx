import {
    CentimetersToKilometers,
    CentimetersToMeters,
    CentimetersToMilimeters,
    KilometersToCentimeters,
    KilometersToMeters,
    KilometersToMilimeters,
    MetersToCentimeters,
    MetersToKilometers,
    MetersToMilimeters,
    MilimetersToCentimeters,
    MilimetersToKilometers,
    MilimetersToMeters
} from '@/utils/helpers/LengthHelperFunc';

export const HandleKmConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "km":
            setOutputValue(val)
            break
        case "m":
            newVal = KilometersToMeters(Number(val))
            setOutputValue(newVal.toString());
            break
        case "cm":
            newVal = KilometersToCentimeters(Number(val))
            setOutputValue(newVal.toString())
            break
        case "mm":
            newVal = KilometersToMilimeters(Number(val))
            setOutputValue(newVal.toString())
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
    }
}

export const HandlemConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "km":
            newVal = MetersToKilometers(Number(val))
            setOutputValue(newVal.toString())
            break
        case "m":
            setOutputValue(val)
            break
        case "cm":
            newVal = MetersToCentimeters(Number(val))
            setOutputValue(newVal.toString())
            break
        case "mm":
            newVal = MetersToMilimeters(Number(val))
            setOutputValue(newVal.toString())
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
    }
}

export const HandlecmConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "km":
            newVal = CentimetersToKilometers(Number(val))
            setOutputValue(newVal.toString())
            break
        case "m":
            newVal = CentimetersToMeters(Number(val))
            setOutputValue(newVal.toString())
            break
        case "cm":
            setOutputValue(val)
            break
        case "mm":
            newVal = CentimetersToMilimeters(Number(val))
            setOutputValue(newVal.toString())
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
    }
}

export const HandlemmConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "km":
            newVal = MilimetersToKilometers(Number(val))
            setOutputValue(newVal.toString())
            break
        case "m":
            newVal = MilimetersToMeters(Number(val))
            setOutputValue(newVal.toString())
            break
        case "cm":
            newVal = MilimetersToCentimeters(Number(val))
            setOutputValue(newVal.toString())
            break
        case "mm":
            setOutputValue(val)
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
    }
}