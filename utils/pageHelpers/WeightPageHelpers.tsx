import { GramsToKilograms, GramsToMiligrams, GramsToOunce, GramsToPounds, KilogramsToGrams, KilogramsToMiligrams, KilogramsToOunce, KilogramsToPounds, MiligramsToGrams, MiligramsToKilograms, MiligramsToOunce, MiligramsToPounds, OunceToGrams, OunceToKilograms, OunceToMiligrams, OunceToPounds, PoundsToGrams, PoundsToKilograms, PoundsToMiligrams, PoundsToOunce } from "../helpers/WeightHelperFunc";

export const HandlekgConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "kg":
            setOutputValue(val)
            break
        case "g":
            newVal = KilogramsToGrams(Number(val))
            setOutputValue(newVal.toString())
            break
        case "mg":
            newVal = KilogramsToMiligrams(Number(val))
            setOutputValue(newVal.toString())
            break
        case "pound":
            newVal = KilogramsToPounds(Number(val))
            setOutputValue(newVal.toString())
            break
        case "ounce":
            newVal = KilogramsToOunce(Number(val))
            setOutputValue(newVal.toString())
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
            break
    }
}

export const HandlegConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "kg":
            newVal = GramsToKilograms(Number(val))
            setOutputValue(newVal.toString())
            break
        case "g":
            setOutputValue(val)
            break
        case "mg":
            newVal = GramsToMiligrams(Number(val))
            setOutputValue(newVal.toString())
            break
        case "pound":
            newVal = GramsToPounds(Number(val))
            setOutputValue(newVal.toString())
            break
        case "ounce":
            newVal = GramsToOunce(Number(val))
            setOutputValue(newVal.toString())
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
            break
    }
}

export const HandlemgConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "kg":
            newVal = MiligramsToKilograms(Number(val))
            setOutputValue(newVal.toString())
            break
        case "g":
            newVal = MiligramsToGrams(Number(val))
            setOutputValue(newVal.toString())
            break
        case "mg":
            setOutputValue(val)
            break
        case "pound":
            newVal = MiligramsToPounds(Number(val))
            setOutputValue(newVal.toString())
            break
        case "ounce":
            newVal = MiligramsToOunce(Number(val))
            setOutputValue(newVal.toString())
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
            break
    }
}

export const HandlepoundConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "kg":
            newVal = PoundsToKilograms(Number(val))
            setOutputValue(newVal.toString())
            break
        case "g":
            newVal = PoundsToGrams(Number(val))
            setOutputValue(newVal.toString())
            break
        case "mg":
            newVal = PoundsToMiligrams(Number(val))
            setOutputValue(newVal.toString())
            break
        case "pound":
            setOutputValue(val)
            break
        case "ounce":
            newVal = PoundsToOunce(Number(val))
            setOutputValue(newVal.toString())
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
            break
    }
}

export const HandleounceConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "kg":
            newVal = OunceToKilograms(Number(val))
            setOutputValue(newVal.toString())
            break
        case "g":
            newVal = OunceToGrams(Number(val))
            setOutputValue(newVal.toString())
            break
        case "mg":
            newVal = OunceToMiligrams(Number(val))
            setOutputValue(newVal.toString())
            break
        case "pound":
            newVal = OunceToPounds(Number(val))
            setOutputValue(newVal.toString())
            break
        case "ounce":
            setOutputValue(val)
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
            break
    }
}