import { Router } from 'express';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Ola, tudo bom?');
});

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteValidation, CidadesController.deleteById);

export {router};