# Testes de software

Os testes são escritos usando o frameworks de testes **Mocha** e **Chai**, focados na verificação de diferentes aspectos do sistema. Os testes garantem que os elementos visuais e interações se comportem conforme o esperado em diferentes cenários.

# Executando os testes

Para executar os testes, é necessário que o sistema esteja rodando localmente e o banco de dados esteja conectado. Siga os passos abaixo:

1. Certifique-se de que o sistema está rodando **localmente**.
2. Abra um terminal (ex: CMD, Terminal, etc.).
3. Digite o comando npm test na raiz do projeto.

```
npm test
```

# Como escrever novos testes

Ao escrever novos testes, é importante seguir diretrizes para garantir a eficácia dos mesmos, utilizando das bibliotecas Mocha e Chai. Seguem abaixo algumas diretrizes:

1. Nomenclatura clara: Nomear os testes de forma clara e descritiva, indicando o que está sendo testado.
2. Compreensão do comportamento: Proporcionar o comportamento esperado do sistema após a execução do teste.
3. Isolamento de testes: Garantir que teste unitários seja independente e não dependa do estado ou resultado de outros testes.
4. Cobertura abrangente: Buscar cobrir o máximo possível do código, identificando áreas críticas e garantindo a confiabilidade do sistema.
5. Testes de regressão: Garantir que os testes sejam executados sempre que uma nova funcionalidade for adicionada ou alterada, evitando que erros sejam introduzidos no sistema.

Todos os testes estão localizados na pasta raiz ./test, separados em pastas de acordo com a entidade que está sendo testada, como ./test/models, ./test/routes, etc. Dentro de cada pasta, os testes estão separados em arquivos de acordo com o componente que está sendo testado, como ./test/models/parametro.ts, ./test/routes/estacao.ts, etc.

# Exemplo de Teste

Exemplo de um teste unitário realizado para verificar a inicialização correta do componente de gráfico de linha.

Teste localizado em ./test/components/graficos/chuva/test.ts
```
import { expect } from "chai";
import { describe, it } from "mocha";

import ChartComponent from "../../../../src/components/graficos/lineChart/chuva";

describe("TESTE UNITÁRIO - COMPONENTE DE GRÁFICO DE LINHA", () => {
    it("INICIALIZAÇÃO - ChartComponent", () => {
        expect(ChartComponent);
        expect(ChartComponent.prototype).to.be.an.instanceof(ChartComponent);
    });
});
```

Este exemplo testa se o componente de gráfico de linha foi inicializado corretamente, verificando se o mesmo é uma instância do componente ChartComponent.