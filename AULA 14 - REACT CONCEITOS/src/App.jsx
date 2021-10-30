import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';
import './App.css';

/*eslint-disable */
export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="Primeiro Componente" color="#FA6900">
                <Primeiro />
            </Card>
            <Card titulo="Arrow" color="#E94C6F">
                <h1>Arrow</h1>
            </Card>
            <Card titulo="Com Parâmetros" color="#E8B71A">
                <ComParametro titulo="Segundo componente" aluno="Henrique" nota={9.3} />
            </Card>
            <Card titulo="Fragmento" color="#588C73">
                <Fragmento />
            </Card>
            <Card titulo="Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="Familia" color="#00C8F8">
                <Familia sobrenome="Fratoni Motton">
                    <FamiliaMembro nome="Eduardo" />
                    <FamiliaMembro nome="Célia" />
                    <FamiliaMembro nome="Bheatriz" />
                    <FamiliaMembro nome="Henrique" />
                </Familia>
            </Card>
            <Card titulo="Lista de Alunos" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Tabela de Produtos" color="#3A9AD9">
                <TabelaProdutos />
            </Card>
            <Card titulo="Renderização Condicional" color="#982395">
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{ email: 'fer@gmail.com' }} />
            </Card>
            <Card titulo="Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card titulo="Mega" color="#B9006E">
                <Mega qtde={6}></Mega>
            </Card>
        </div>
    </div>;
