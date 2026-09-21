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
  WiNightClear,
  WiNightAltPartlyCloudy,
  WiNightCloudy,
  WiNightFog,
  WiNightSprinkle,
  WiNightRainMix,
  WiNightRain,
  WiNightSleet,
  WiNightSnow,
  WiNightSnowWind,
  WiNightShowers,
  WiNightThunderstorm,
  WiNightStormShowers,
} from 'react-icons/wi';

const weatherCodes = {
  0: { description: 'Clear sky', icon: WiDaySunny, nightIcon: WiNightClear },
  1: { description: 'Mainly clear', icon: WiDaySunnyOvercast, nightIcon: WiNightAltPartlyCloudy },
  2: { description: 'Partly cloudy', icon: WiDayCloudy, nightIcon: WiNightAltPartlyCloudy },
  3: { description: 'Overcast', icon: WiCloudy, nightIcon: WiNightCloudy },

  45: { description: 'Fog', icon: WiFog, nightIcon: WiNightFog },
  48: { description: 'Depositing rime fog', icon: WiFog, nightIcon: WiNightFog }, // no rime-specific icon in this set

  51: { description: 'Light drizzle', icon: WiSprinkle, nightIcon: WiNightSprinkle },
  53: { description: 'Moderate drizzle', icon: WiSprinkle, nightIcon: WiNightSprinkle },
  55: { description: 'Dense drizzle', icon: WiSprinkle, nightIcon: WiNightSprinkle },

  56: { description: 'Light freezing drizzle', icon: WiRainMix, nightIcon: WiNightRainMix },
  57: { description: 'Dense freezing drizzle', icon: WiRainMix, nightIcon: WiNightRainMix },

  61: { description: 'Slight rain', icon: WiRain, nightIcon: WiNightRain },
  63: { description: 'Moderate rain', icon: WiRain, nightIcon: WiNightRain },
  65: { description: 'Heavy rain', icon: WiRain, nightIcon: WiNightRain },

  66: { description: 'Light freezing rain', icon: WiSleet, nightIcon: WiNightSleet },
  67: { description: 'Heavy freezing rain', icon: WiSleet, nightIcon: WiNightSleet },

  71: { description: 'Slight snow fall', icon: WiSnow, nightIcon: WiNightSnow },
  73: { description: 'Moderate snow fall', icon: WiSnow, nightIcon: WiNightSnow },
  75: { description: 'Heavy snow fall', icon: WiSnow, nightIcon: WiNightSnow },
  77: { description: 'Snow grains', icon: WiSnowflakeCold, nightIcon: WiNightSnow }, // closest analog, no exact match

  80: { description: 'Slight rain showers', icon: WiShowers, nightIcon: WiNightShowers },
  81: { description: 'Moderate rain showers', icon: WiShowers, nightIcon: WiNightShowers },
  82: { description: 'Violent rain showers', icon: WiShowers, nightIcon: WiNightShowers },

  85: { description: 'Slight snow showers', icon: WiSnowWind, nightIcon: WiNightSnowWind },
  86: { description: 'Heavy snow showers', icon: WiSnowWind, nightIcon: WiNightSnowWind },

  95: { description: 'Thunderstorm', icon: WiThunderstorm, nightIcon: WiNightThunderstorm },
  96: { description: 'Thunderstorm with slight hail', icon: WiStormShowers, nightIcon: WiNightStormShowers }, // no hail+thunder icon
  99: { description: 'Thunderstorm with heavy hail', icon: WiStormShowers, nightIcon: WiNightStormShowers },
};

export default weatherCodes;