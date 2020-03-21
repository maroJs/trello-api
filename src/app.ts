import * as bodyParser from 'body-parser';
import express from 'express';

import { TaskRoute } from './task/task-route';
import { Router } from './types/router';

/**
 * Start node application.
 */
export class App {
  express: express.Application;
  private services: Array<Router> = [
    TaskRoute,
  ];
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }
  private routes(): void {
    this.services.forEach((service) => service.init(this.express));
  }
}
