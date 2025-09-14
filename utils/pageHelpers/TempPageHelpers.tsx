import {
    CelsiusToFahrenheit,
    CelsiusToKelvin,
    FahrenheitToCelsius,
    FahrenheitToKelvin,
    KelvinToCelsius,
    KelvinToFahrenheit
} from "../helpers/TempHelperFunc";

export const HandlecelsConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "cels":
            setOutputValue(val)
            break
        case "kelv":
            newVal = CelsiusToKelvin(Number(val))
            setOutputValue(newVal.toString());
            break
        case "fahr":
            newVal = CelsiusToFahrenheit(Number(val))
            setOutputValue(newVal.toString());
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
            break
    }
}

export const HandlekelvConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "cels":
            newVal = KelvinToCelsius(Number(val))
            setOutputValue(newVal.toString())
            break
        case "kelv":
            setOutputValue(val);
            break
        case "fahr":
            newVal = KelvinToFahrenheit(Number(val))
            setOutputValue(newVal.toString());
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
            break
    }
}

export const HandlefahrConversions = (
    val: string,
    valueOutput: string,
    setOutputValue: (val: string) => void,
    setErrorMsg: (val: string) => void,
    setError: (val: boolean) => void
) => {
    let newVal: number;
    switch (valueOutput) {
        case "cels":
            newVal = FahrenheitToCelsius(Number(val))
            setOutputValue(newVal.toString())
            break
        case "kelv":
            newVal = FahrenheitToKelvin(Number(val))
            setOutputValue(newVal.toString());
            break
        case "fahr":
            setOutputValue(val);
            break
        default:
            setErrorMsg(`Unable to convert ${val}`)
            setError(true)
            break
    }
}


