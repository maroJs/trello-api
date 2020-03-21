import express from 'express';

import { TaskController } from './task-controller';

export class TaskRoute {
  static init(e: express.Application): void {
    const controller = new TaskController();
    e.get('/task', (req, res) => {
      const tasks = controller.get();
      return res.json(tasks);
    });

    e.post('/task', (req, res) => {
      const newTask = req.body;
      controller.post(newTask);
      return res.json(newTask);
    });
  }
 private constructor() {}
}
