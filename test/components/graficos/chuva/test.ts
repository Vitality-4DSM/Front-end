import { expect } from "chai";
import { describe, it } from "mocha";

import ChartComponent from "../../../../src/components/graficos/lineChart/chuva";

describe("TESTE UNITÁRIO - COMPONENTE DE GRÁFICO DE LINHA", () => {
    it("INICIALIZAÇÃO - ChartComponent", () => {
        expect(ChartComponent);
        expect(ChartComponent.prototype).to.be.an.instanceof(ChartComponent);
    });
});

