import type { SetStateAction } from "react";

export interface PositionProps {
  Latitude: number | undefined;
  Longitude: number | undefined;
  StatusError: Error | undefined;
}

export interface AreaProps {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

export class CityProps {
  constructor() {
    this.Version = "1";
    this.Key = "";
    this.Type = "";
    this.LocalizedName = "";
    this.Region = {
      ID: "",
      LocalizedName: "",
      EnglishName: "",
    };
    this.Country = {
      ID: "",
      LocalizedName: "",
      EnglishName: "",
    };
    this.AdministrativeArea = {
      ID: "",
      LocalizedName: "",
      EnglishName: "",
    };
    this.FunctionSet = (_value: SetStateAction<CityProps>) => {};
  }

  Version: string;
  Key: string;
  Type: string;
  LocalizedName: string;
  Country: AreaProps;
  Region: AreaProps;
  AdministrativeArea: AreaProps;
  FunctionSet: React.Dispatch<React.SetStateAction<CityProps>>;
}

export interface HeadlineProps {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
}

export interface SunProps {
  Rise: string;
  EpochRise: number;
  Set: string;
  EpochSet: number;
}

export interface MoonProps {
  Rise: string;
  EpochRise: number;
  Set: string;
  EpochSet: number;
  Phase: string;
  Age: number;
}

export interface WeatherParamStringProps {
  Value: string;
  Unit: string;
  UnitType: number;
}

export interface WeatherParamProps {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface StatisticProps {
  Minimum: number;
  Maximum: number;
  Average: number;
}

export interface FeelTemperatureProps {
  Value: number;
  Unit: string;
  UnitType: number;
  Phrase: string;
}

export interface OrientationProps {
  Degrees: number;
  Localized: string;
  English: string;
}

export interface WindProps {
  Speed: WeatherParamProps;
  Direction: OrientationProps;
}

export interface WeatherConditionProps {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  ShortPhrase: string;
  LongPhrase: string;
  PrecipitationProbability: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
  Wind: WindProps;
  WindGust: WindProps;
  TotalLiquid: WeatherParamProps;
  Rain: WeatherParamProps;
  Snow: WeatherParamProps;
  Ice: WeatherParamProps;
  HoursOfPrecipitation: number;
  HoursOfRain: number;
  HoursOfSnow: number;
  HoursOfIce: number;
  CloudCover: number;
  Evapotranspiration: WeatherParamProps;
  SolarIrradiance: WeatherParamProps;
  RelativeHumidity: StatisticProps;
  WetBulbTemperature: {
    Minimum: WeatherParamProps;
    Maximum: WeatherParamProps;
    Average: WeatherParamProps;
  };
  WetBulbGlobeTemperature: {
    Minimum: WeatherParamProps;
    Maximum: WeatherParamProps;
    Average: WeatherParamProps;
  };
}

export class OneDayForecastProps {
  constructor() {
    this.Date = "";
    this.EpochDate = 0;
    this.Sun = {
      Rise: "",
      Set: "",
      EpochRise: 0,
      EpochSet: 0,
    };
    this.Moon = {
      Rise: "",
      Set: "",
      EpochRise: 0,
      EpochSet: 0,
      Phase: "",
      Age: 0,
    };
    this.Temperature = {
      Minimum: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      Maximum: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
    };
    this.RealFeelTemperature = {
      Minimum: {
        Value: 0,
        Unit: "",
        UnitType: 0,
        Phrase: "",
      },
      Maximum: {
        Value: 0,
        Unit: "",
        UnitType: 0,
        Phrase: "",
      },
    };
    this.RealFeelTemperatureShade = {
      Minimum: {
        Value: 0,
        Unit: "",
        UnitType: 0,
        Phrase: "",
      },
      Maximum: {
        Value: 0,
        Unit: "",
        UnitType: 0,
        Phrase: "",
      },
    };
    this.HoursOfSun = 0;
    this.DegreeDaySummary = {
      Heating: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      Cooling: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
    };
    this.Sources = Array<string>(0);
    this.Link = "";
    this.MobileLink = "";
    this.Day = {
      Icon: 0,
      IconPhrase: "",
      HasPrecipitation: false,
      ShortPhrase: "",
      LongPhrase: "",
      PrecipitationProbability: 0,
      ThunderstormProbability: 0,
      RainProbability: 0,
      SnowProbability: 0,
      IceProbability: 0,
      Wind: {
        Speed: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Direction: {
          Degrees: 0,
          Localized: "",
          English: "",
        },
      },
      WindGust: {
        Speed: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Direction: {
          Degrees: 0,
          Localized: "",
          English: "",
        },
      },
      TotalLiquid: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      Rain: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      Snow: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      Ice: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      HoursOfPrecipitation: 0,
      HoursOfRain: 0,
      HoursOfSnow: 0,
      HoursOfIce: 0,
      CloudCover: 0,
      Evapotranspiration: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      SolarIrradiance: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      RelativeHumidity: {
        Minimum: 0,
        Maximum: 0,
        Average: 0,
      },
      WetBulbTemperature: {
        Minimum: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Maximum: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Average: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
      },
      WetBulbGlobeTemperature: {
        Minimum: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Maximum: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Average: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
      },
    };

    this.Night = {
      Icon: 0,
      IconPhrase: "",
      HasPrecipitation: false,
      ShortPhrase: "",
      LongPhrase: "",
      PrecipitationProbability: 0,
      ThunderstormProbability: 0,
      RainProbability: 0,
      SnowProbability: 0,
      IceProbability: 0,
      Wind: {
        Speed: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Direction: {
          Degrees: 0,
          Localized: "",
          English: "",
        },
      },
      WindGust: {
        Speed: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Direction: {
          Degrees: 0,
          Localized: "",
          English: "",
        },
      },
      TotalLiquid: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      Rain: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      Snow: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      Ice: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      HoursOfPrecipitation: 0,
      HoursOfRain: 0,
      HoursOfSnow: 0,
      HoursOfIce: 0,
      CloudCover: 0,
      Evapotranspiration: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      SolarIrradiance: {
        Value: 0,
        Unit: "",
        UnitType: 0,
      },
      RelativeHumidity: {
        Minimum: 0,
        Maximum: 0,
        Average: 0,
      },
      WetBulbTemperature: {
        Minimum: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Maximum: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Average: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
      },
      WetBulbGlobeTemperature: {
        Minimum: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Maximum: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
        Average: {
          Value: 0,
          Unit: "",
          UnitType: 0,
        },
      },
    };
  }

  Date: string;
  EpochDate: number;
  Sun: SunProps;
  Moon: MoonProps;
  Temperature: {
    Minimum: WeatherParamProps;
    Maximum: WeatherParamProps;
  };
  RealFeelTemperature: {
    Minimum: FeelTemperatureProps;
    Maximum: FeelTemperatureProps;
  };
  RealFeelTemperatureShade: {
    Minimum: FeelTemperatureProps;
    Maximum: FeelTemperatureProps;
  };
  HoursOfSun: number;
  DegreeDaySummary: {
    Heating: WeatherParamProps;
    Cooling: WeatherParamProps;
  };
  Day: WeatherConditionProps;
  Night: WeatherConditionProps;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export class WeatherForecastProps {
  constructor() {
    this.Headline = {
      Text: "",
      EffectiveDate: "",
      EffectiveEpochDate: 0,
      Severity: 0,
      Category: "",
      EndDate: "",
      EndEpochDate: 0,
    };
    this.DailyForecasts = Array<OneDayForecastProps>(new OneDayForecastProps());
    this.FunctionSet = (_value: SetStateAction<WeatherForecastProps>) => {};
  }

  Headline: HeadlineProps;
  DailyForecasts: OneDayForecastProps[];
  FunctionSet: React.Dispatch<React.SetStateAction<WeatherForecastProps>>;
}

export type PositionResultCallback = (position: PositionProps) => void;

async function processRequest<T>(request: string): Promise<T> {
  try {
    const response = await fetch(request);
    const dataReceived = await response.json();

    return new Promise<T>((resolve) => resolve(dataReceived));
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Promise<T>((_resolve, reject) =>
        reject(`${error.name}: ${error.message}`),
      );
    }
    return new Promise<T>((_resolve, reject) => reject("Unknown error"));
  }
}

const { VITE_API_KEY1, VITE_API_KEY2, VITE_API_KEY3, VITE_API_KEY4 } =
  import.meta.env;

const apiKeys = [VITE_API_KEY1, VITE_API_KEY2, VITE_API_KEY3, VITE_API_KEY4];
let apiKeyIndex = 0;

function apiKey() {
  return apiKeys[apiKeyIndex++ % apiKeys.length];
}

export async function getCityByName(cityName: string): Promise<CityProps> {
  const request = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey()}&q=${cityName}&language=fr-fr&details=false`;

  const dataReceived = await processRequest<CityProps[]>(request);
  if (dataReceived.length === 0) {
    // No city was found matching criteria.
    return new Promise((_resolve, reject) =>
      reject(`No city was found which name matches ${cityName}.`),
    );
  }

  return dataReceived[0] as CityProps;
}

export async function getCityByLocation(
  latitude: number,
  longitude: number,
): Promise<CityProps> {
  const request = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey()}&q=${latitude},${longitude}&language=fr-fr&details=false&toplevel=true`;

  return (await processRequest<CityProps>(request)) as CityProps;
}

export async function getFiveDaysWeatherForecast(
  cityKey: string,
): Promise<WeatherForecastProps> {
  const request = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey()}&language=fr-fr&metric=true&details=true`;

  return await processRequest<WeatherForecastProps>(request);
}

export async function getCityByAutoCompletion(
  cityName: string,
): Promise<CityProps[]> {
  const request = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey()}&q=${cityName}&language=fr-fr`;

  if (cityName === "") {
    return Array<CityProps>(0);
  }

  const dataReceived = await processRequest<CityProps[]>(request);
  if (dataReceived.length === 0) {
    // No city was found matching criteria.
    return new Promise((_resolve, reject) =>
      reject(`No city was found which name matches ${cityName}.`),
    );
  }

  return dataReceived as CityProps[];
}

export function getCurrentPosition(callback: PositionResultCallback) {
  navigator.geolocation.getCurrentPosition(
    (position: GeolocationPosition) => {
      callback({
        Latitude: position.coords.latitude,
        Longitude: position.coords.longitude,
        StatusError: undefined,
      });
    },
    (positionError: GeolocationPositionError) => {
      callback({
        Latitude: undefined,
        Longitude: undefined,
        StatusError: new Error(positionError.message),
      });
    },
  );
}
