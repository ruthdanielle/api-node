import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Cidades - Create', () => {

    it('Cria registro', async () => {
        
        const res1 = await testServer.post('/cidades').send({ nome: 'Cotia' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');
    });

    it('Tenta criar registro com nome curto', async () => {
        
        const res1 = await testServer.post('/cidades').send({ nome: 'Co' });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

    it('Tenta criar registro sem a propriedade nome', async () => {
        
        const res1 = await testServer.post('/cidades').send({  });

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.nome');
    });

});