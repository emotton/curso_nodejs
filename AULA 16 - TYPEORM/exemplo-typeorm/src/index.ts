import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import { Client } from './entity/Client';

createConnection().then(async connection => {

    console.log('Conectado e sincromizado !!!')

    /*
    const cliente1 = new Client();
    cliente1.name = 'SAO PIO TECH LTDA';
    cliente1.cnpj = '44.303.806/0001-24';

    await connection.manager.save(cliente1);

    console.log('Cliente1 inserido !!!');

    const cliente2 = new Client();
    cliente2.name = '3HTEC INFORMATICA LTDA';
    cliente2.cnpj = '33.333.333/0001-33';

    await connection.manager.save(cliente2);

    console.log('Cliente2 inserido !!!');
    */

    const repoClient = getRepository(Client);

    const c3 = await repoClient.findOne(3);

    console.log(c3);

    c3.cnpj = '55.555.555/0001-55';

    repoClient.save(c3);

   

}).catch(error => console.log(error));
