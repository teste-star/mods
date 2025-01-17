function initZombieApocalypse(gameState) {
    // Modificar estado inicial do jogo
    gameState.population.count = 100;
    gameState.army.count = 50;
    gameState.resources.wood = 500;
    gameState.resources.stone = 300;
    gameState.resources.money = 200;
    gameState.resources.elixir = 0;

    // Adicionar novas propostas
    proposals.push({
        id: 51,
        name: "Cientista Louco",
        description: "Podemos criar uma vacina contra o vírus zumbi.",
        requirements: {
            resources: {
                money: 500,
                elixir: 50
            }
        },
        yesEffect: {
            population: { happiness: "+50%" },
            resources: { money: -500, elixir: -50 }
        },
        noEffect: {
            population: { happiness: "-20%" }
        }
    });

    // Adicionar novas construções
    buildingTemplates[BUILDING_TYPES.ZOMBIE_LAB] = {
        name: "Laboratório Zumbi",
        workers: 5,
        production: {
            elixir: 10
        },
        options: [
            {
                name: "Aumentar Produção",
                cost: { money: 300 },
                effect: multiplier => multiplier * 2
            }
        ]
    };

    // Atualizar display
    updateDisplay();
}

// Registrar mod
activeMods.push({
    name: "Apocalipse Zumbi",
    init: initZombieApocalypse
});