import { expect } from "chai";
import { describe, it } from "mocha";

import { getAlertas, getDashboard, getEstacoes, getEstacoesId, getNometabela, getParameter, getParameterID, getParameters, getTipoParametroID, getTipoParametros, getUserId, getUsuarioEmail, gethistoric, GetUsers, postAlertas, postEstacoes, postParameter, postTypeParameter, postUsuario, putEstacoes, putTypeParameter, deleteParameter, deleteTypeParameter, deleteEstacoes, deleteUsuario, updateUsuario } from "../../src/utils/axios.routes";

describe("TESTE UNITÁRIO - UNICIALIZAÇÃO DE ROTAS", () => {
    it("INICIALIZAÇÃO - getAlertas", () => {
        expect(getAlertas);
    });
    it("INICIALIZAÇÃO - getDashboard", () => {
        expect(getDashboard);
    });
    it("INICIALIZAÇÃO - getEstacoes", () => {
        expect(getEstacoes);
    });
    it("INICIALIZAÇÃO - getEstacoesId", () => {
        expect(getEstacoesId);
    });
    it("INICIALIZAÇÃO - getNometabela", () => {
        expect(getNometabela);
    });
    it("INICIALIZAÇÃO - getParameter", () => {
        expect(getParameter);
    });
    it("INICIALIZAÇÃO - getParameterID", () => {
        expect(getParameterID);
    });
    it("INICIALIZAÇÃO - getParameters", () => {
        expect(getParameters);
    });
    it("INICIALIZAÇÃO - getTipoParametroID", () => {
        expect(getTipoParametroID);
    });
    it("INICIALIZAÇÃO - getTipoParametros", () => {
        expect(getTipoParametros);
    });
    it("INICIALIZAÇÃO - getUserId", () => {
        expect(getUserId);
    });
    it("INICIALIZAÇÃO - getUsuarioEmail", () => {
        expect(getUsuarioEmail);
    });
    it("INICIALIZAÇÃO - gethistoric", () => {
        expect(gethistoric);
    });
    it("INICIALIZAÇÃO - GetUsers", () => {
        expect(GetUsers);
    });
    it("INICIALIZAÇÃO - postAlertas", () => {
        expect(postAlertas);
    });
    it("INICIALIZAÇÃO - postEstacoes", () => {
        expect(postEstacoes);
    });
    it("INICIALIZAÇÃO - postParameter", () => {
        expect(postParameter);
    });
    it("INICIALIZAÇÃO - postTypeParameter", () => {
        expect(postTypeParameter);
    });
    it("INICIALIZAÇÃO - postUsuario", () => {
        expect(postUsuario);
    });
    it("INICIALIZAÇÃO - putEstacoes", () => {
        expect(putEstacoes);
    });
    it("INICIALIZAÇÃO - putTypeParameter", () => {
        expect(putTypeParameter);
    });
    it("INICIALIZAÇÃO - deleteParameter", () => {
        expect(deleteParameter);
    });
    it("INICIALIZAÇÃO - deleteTypeParameter", () => {
        expect(deleteTypeParameter);
    });
    it("INICIALIZAÇÃO - deleteEstacoes", () => {
        expect(deleteEstacoes);
    });
    it("INICIALIZAÇÃO - deleteUsuario", () => {
        expect(deleteUsuario);
    });
    it("INICIALIZAÇÃO - updateUsuario", () => {
        expect(updateUsuario);
    });
});