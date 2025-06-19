// Main Service File
import express, {Request, Response} from 'express';
import { mediatorConfig } from './config/mediator';
import {PORT, OPENHIM} from './config';
import { logger } from './src/utils/logger';
import { registerMediatorCallback } from './src/utils/openhim';
import os from 'os';

const {registerMediator} = require('openhim-mediator-utils');

// Initialize express application
const app = express();

// Allow app to parse json and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Time
app.get('*', (_: Request, res: Response) => {
  const osUptime = os.uptime();
  const processUptime = process.uptime();
  res.send({status: 'success', osuptime: osUptime, processuptime: processUptime});
});

// Register Mediator to OpenHIM
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`));
  
  registerMediator(OPENHIM, mediatorConfig, registerMediatorCallback);
}

export default app;
