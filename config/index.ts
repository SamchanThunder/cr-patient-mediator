// These are to work with my own local environment
import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 6010;

export const OPENHIM = {
  username: getEnvironmentVariable('OPENHIM_USERNAME', 'interop@openhim.org'), // First argument is what to look for in env file. Second is backup if not found
  password: getEnvironmentVariable('OPENHIM_PASSWORD', 'interop-password'),
  apiURL: getEnvironmentVariable('OPENHIM_API_URL', 'https://openhim-core:8080'),
  trustSelfSigned: true,
};

export const FHIR = {
  url: getEnvironmentVariable('FHIR_URL', 'http://openhim-core:5001/fhir'),
  username: getEnvironmentVariable('FHIR_USERNAME', 'interop-client'),
  password: getEnvironmentVariable('FHIR_PASSWORD', 'interop-password'),
};

// Specifically using Bahmni Application
export const MRS = {
  url: getEnvironmentVariable('OPENMRS_URL', 'http://localhost:8082/openmrs/ws/fhir2/R4'),
  username: getEnvironmentVariable('OPENMRS_USERNAME', 'admin'),
  password: getEnvironmentVariable('OPENMRS_PASSWORD', 'Admin123'),
};

function getEnvironmentVariable(env: string, def: string) {
  if (process.env.NODE_ENV === 'test') {
    return def;
  }
  
  return process.env[env] || def;
}
