import { ScalekitClient } from '@scalekit-sdk/node';

function getEnvVariable(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} environment variable is required`);
  }
  return value;
}

const scalekit = new ScalekitClient(
  getEnvVariable('SCALEKIT_ENVIRONMENT_URL'),
  getEnvVariable('SCALEKIT_CLIENT_ID'),
  getEnvVariable('SCALEKIT_CLIENT_SECRET')
);

export default scalekit;