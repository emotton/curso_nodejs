import app from './app';
import 'reflect-metadata';
import './database';

app.get('/', (req, res) => {
    res.send('Servidor OK !');
});

app.listen(3000, () => {
  console.log('🏃 Running Server');
});
