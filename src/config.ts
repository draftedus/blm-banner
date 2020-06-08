export type $Config = {
  name?: string;
  fontFamily?: string;
  primaryColor?: string;
  backgroundColor?: string;
  metricsEnabled?: boolean;
  metricsUrl?: string;
};

let CONFIGURATION: $Config;

function setConfigWithDefaults(config: $Config) {
  return {
    primaryColor: 'blue',
    backgroundColor: 'red',
    fontFamily: 'Times New Roman',
    ...config,
  };
}

/**
 * Method to configure the banner
 * @param config
 */
export function configure(config: $Config) {
  CONFIGURATION = setConfigWithDefaults(config);
}

/**
 * Grab the configuration if we need to
 */
export function getConfiguration() {
  return CONFIGURATION;
}
