// Maps Open-Meteo's WMO weather codes to a short description and a
// react-icons/wi icon component.
// Source table: https://open-meteo.com/en/docs (WMO Weather interpretation codes)
// Icons: https://react-icons.github.io/react-icons/icons/wi/

import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiCloudy,
  WiFog,
  WiSprinkle,
  WiRainMix,
  WiRain,
  WiSleet,
  WiSnow,
  WiSnowflakeCold,
  WiShowers,
  WiSnowWind,
  WiThunderstorm,
  WiStormShowers,
} from 'react-icons/wi';

const weatherCodes = {
  0: { description: 'Clear sky', icon: WiDaySunny },
  1: { description: 'Mainly clear', icon: WiDaySunnyOvercast },
  2: { description: 'Partly cloudy', icon: WiDayCloudy },
  3: { description: 'Overcast', icon: WiCloudy },

  45: { description: 'Fog', icon: WiFog },
  48: { description: 'Depositing rime fog', icon: WiFog }, // no rime-specific icon in this set

  51: { description: 'Light drizzle', icon: WiSprinkle },
  53: { description: 'Moderate drizzle', icon: WiSprinkle },
  55: { description: 'Dense drizzle', icon: WiSprinkle },

  56: { description: 'Light freezing drizzle', icon: WiRainMix },
  57: { description: 'Dense freezing drizzle', icon: WiRainMix },

  61: { description: 'Slight rain', icon: WiRain },
  63: { description: 'Moderate rain', icon: WiRain },
  65: { description: 'Heavy rain', icon: WiRain },

  66: { description: 'Light freezing rain', icon: WiSleet },
  67: { description: 'Heavy freezing rain', icon: WiSleet },

  71: { description: 'Slight snow fall', icon: WiSnow },
  73: { description: 'Moderate snow fall', icon: WiSnow },
  75: { description: 'Heavy snow fall', icon: WiSnow },
  77: { description: 'Snow grains', icon: WiSnowflakeCold }, // closest analog, no exact match

  80: { description: 'Slight rain showers', icon: WiShowers },
  81: { description: 'Moderate rain showers', icon: WiShowers },
  82: { description: 'Violent rain showers', icon: WiShowers },

  85: { description: 'Slight snow showers', icon: WiSnowWind },
  86: { description: 'Heavy snow showers', icon: WiSnowWind },

  95: { description: 'Thunderstorm', icon: WiThunderstorm },
  96: { description: 'Thunderstorm with slight hail', icon: WiStormShowers }, // no hail+thunder icon
  99: { description: 'Thunderstorm with heavy hail', icon: WiStormShowers },
};

export default weatherCodes;