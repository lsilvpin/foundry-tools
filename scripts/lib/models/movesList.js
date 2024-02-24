
/**
 * @fileoverview This file contains the definition of the MOVES_LIST constant, which represents a list of moves.
 * @module movesList
 */

/**
 * Represents a move in the game.
 * @typedef {Object} Move
 * @property {string} flavor - The flavor text of the move.
 * @property {string} trigger - The trigger condition for the move.
 * @property {string} sucessoCritico - The description of the move's critical success outcome.
 * @property {string} sucesso - The description of the move's success outcome.
 * @property {string} parcial - The description of the move's partial success outcome.
 * @property {string} falha - The description of the move's failure outcome.
 * @property {string} falhaCritica - The description of the move's critical failure outcome.
 */

/**
 * Represents a list of moves.
 * @type {Move[]}
 */
const MOVES_LIST = [
    {
        "tag": "Defy Danger",
        "flavor": "Desafiar perigo",
        "trigger": "Você realiza uma ação cujo resultado é incerto",
        "sucessoCritico": "<p>Sucesso Crítico => Você alcança seu objetivo e recebe um benefício extra</p>",
        "sucesso": "<p>Sucesso => Você alcança seu objetivo</p>",
        "parcial": "<p>Parcial => Você alcança seu objetivo, mas paga o preço</p>",
        "falha": "<p>Falha => Você não alcança seu objetivo e paga o preço</p>",
        "falhaCritica": "<p>Falha Crítica => Você não alcança seu objetivo, paga o preço e recebe um prejuízo extra</p>"
    },
    {
        "tag": "Secure an Advantage",
        "flavor": "Garantir uma vantagem",
        "trigger": "Você procura uma vantagem momentânea",
        "sucessoCritico": "<p>Sucesso Crítico => Você garante uma vantagem e recebe um benefício extra</p>",
        "sucesso": "<p>Sucesso => Você garante uma vantagem</p>",
        "parcial": "<p>Parcial => Você garante uma vantagem, mas paga o preço</p>",
        "falha": "<p>Falha => Você não garante uma vantagem e paga o preço</p>",
        "falhaCritica": "<p>Falha Crítica => Você não garante uma vantagem, paga o preço e recebe um prejuízo extra</p>"
    }
];
