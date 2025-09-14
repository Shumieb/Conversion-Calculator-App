// celsius conversions
export const CelsiusToKelvin = (celsius: number) => {
    return celsius + 273.15;
}

export const CelsiusToFahrenheit = (celsius: number) => {
    return (celsius * (9 / 5)) + 32;
}

// kelvin conversions
export const KelvinToCelsius = (kelvin: number) => {
    return kelvin - 273.15;
}

export const KelvinToFahrenheit = (kelvin: number) => {
    return (kelvin - 273.15) * 1.8 + 32;
}

// fahrenheit conversions
export const FahrenheitToCelsius = (fahrenheit: number) => {
    return (fahrenheit - 32) * (5 / 9);
}

export const FahrenheitToKelvin = (fahrenheit: number) => {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
}