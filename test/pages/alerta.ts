import { expect } from "chai";
import { describe, it } from "mocha";

import Alertas from "../../src/pages/Alertas";

describe("TESTE UNITÁRIO - PÁGINA DE ALERTAS", () => {
    it("INICIALIZAÇÃO - Alertas", () => {
        expect(Alertas);
        expect(Alertas.prototype).to.be.an.instanceof(Alertas);
    });
});