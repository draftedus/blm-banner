export type $Config = {
  name?: string;
  fontFamily?: string;
  primaryColor?: string;
  backgroundColor?: string;
  metricsEnabled?: boolean;
  metricsUrl?: string;
  preview?: boolean;
};

let CONFIGURATION: $Config;

/**
 * If no configuration is provided, fallback to these defaults
 * @param config
 */
function setConfigWithDefaults(config: $Config) {
  return {
    primaryColor: '#FFFFFF',
    backgroundColor: '#000000',
    fontFamily: 'Teko',
    preview: false,
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
