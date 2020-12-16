import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';

import UserController from '../app/controller/UserController.js';
import Queue from '../app/lib/Queue';


const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta ", process.env.PORT)
});

