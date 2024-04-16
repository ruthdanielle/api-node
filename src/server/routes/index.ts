import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Ola, tudo bom?');
});

router.post('/cidades', CidadesController.createValidation, CidadesController.create);


export {router};