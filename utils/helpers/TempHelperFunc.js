// celsius conversions
export const CelsiusToKelvin = (celsius) => {
    return celsius + 273.15;
}

export const CelsiusToFahrenheit = (celsius) => {
    return (celsius * (9 / 5)) + 32;
}

// kelvin conversions
export const KelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
}

export const KelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * 1.8 + 32;
}

// fahrenheit conversions
export const FahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * (5 / 9);
}

export const FahrenheitToKelvin = (fahrenheit) => {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
}