/**
 * This type describes the Options for a Select element
 */
export type SelectOptions = { value: string; label: string };

/**
 * Observation data from the API endpoint
 */
export type ObservationData = {
  copyright_url: string;
  credit: string;
  credit_URL: string;
  dewpoint_c: number;
  dewpoint_f: number;
  dewpoint_string: string;
  disclaimer_url: string;
  icon_url_base: string;
  icon_url_name: string;
  latitude: number;
  location: string;
  longitude: number;
  ob_url: string;
  observation_time: string;
  observation_time_rfc822: string;
  pressure_in: number;
  pressure_mb: number;
  pressure_string: string;
  privacy_policy_url: string;
  relative_humidity: number;
  station_id: string;
  suggested_pickup: string;
  suggested_pickup_period: number;
  temp_c: number;
  temp_f: number;
  temperature_string: string;
  two_day_history_url: string;
  visibility_mi: number;
  weather: string;
  wind_degrees: number;
  wind_dir: string;
  wind_kt: number;
  wind_mph: number;
  wind_string: string;
  windchill_c: number;
  windchill_f: number;
  windchill_string: string;
};

/**
 * Current observation wrapper type
 */
export type CurrentObservation = {
  current_observation: ObservationData;
};
