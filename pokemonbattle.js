confirm("A wild Pikachu appeared! Charmander, I chose you!");

var myTotalDamage = 0;

var myDamageLeft = 50;

var totalDamage = 0;

var damageLeft = 30;

var potionCount = 3;

var pokeballCount = 5;

var damageCounter = function() {
    if (totalDamage >= 30) {
        confirm("Pikachu fainted!");
    }
    else {
        pikachuAttack();
    }
};

var myDamageCounter = function() {
    if (myTotalDamage >= 50) {
        confirm("Charmander fainted! You flee to a Pokemon Center.");
    }
    else {
        pokemonBattle();
    }
};

var pikachuAttackDamage = function(damage) {
    myTotalDamage += damage;
    if (damage <= myDamageLeft) {
        myDamageLeft = myDamageLeft - damage;
    }
    else {
        myDamageLeft = 0;
    }
    confirm("Pikachu did " + damage + " damage! Charmander has " + myDamageLeft + " HP left!");
    myDamageCounter();
};

var charmanderAttackDamage = function(damage) {
    totalDamage += damage;
    if (damage <= damageLeft) {
        damageLeft = damageLeft - damage;
    }
    else {
        damageLeft = 0;
    }
    confirm("Charmander did " + damage + " damage! Pikachu has " + damageLeft + " HP left!");
    damageCounter();
};

var pokemonBattle = function() {   
    var user = prompt("Do you ATTACK, BAG, FLEE, or VIEW STATS?").toUpperCase();
    switch(user) {
        case 'ATTACK':
            var userAttack = prompt("Use TACKLE, QUICK ATTACK, EMBER, or FLAME THROWER?").toUpperCase();
            switch(userAttack) {
                case 'TACKLE':
                    var tackleAttack = Math.random();
                    if (tackleAttack > 0.25) {
                        charmanderAttackDamage(10);
                    }
                    else {
                        confirm("Charmander missed!");
                        pikachuAttack();
                    }
                    break;
                case 'QUICK ATTACK':
                    var quickAttackAttack = Math.random();
                    if (quickAttackAttack > 0.1) {
                        charmanderAttackDamage(5);
                    }
                    else {
                        confirm("Charmander missed!");
                        pikachuAttack();
                    }
                    break;
                case 'EMBER':
                    var emberAttack = Math.random();
                    if (emberAttack > 0.25) {
                        charmanderAttackDamage(10);
                    }
                    else {
                        confirm("Charmander missed!");
                        pikachuAttack();
                    }
                    break;
                case "FLAME THROWER":
                    var flameThrowerAttack = Math.random();
                    if (flameThrowerAttack > 0.5) {
                        charmanderAttackDamage(20);
                    }
                    else {
                        confirm("Charmander missed!");
                        pikachuAttack();
                    }
                    break;
                default:
                    confirm("That is not an attack! Please select TACKLE, QUICK ATTACK, EMBER, or FLAME THROWER!");
                    pokemonBattle();
                    break;
            }
            break;
        case 'BAG':
            var bagChoice = prompt("Use POKEBALL or POTION?").toUpperCase();
            switch(bagChoice) {
                case 'POKEBALL':
                    if (pokeballCount > 0) {
                        confirm("Use a POKEBALL?");
                        var catchChance = totalDamage * 10 * Math.random();
                        if (catchChance >= 50) {
                        confirm("Success! Pikachu has been caught!");
                        confirm("Pikachu's data has been added to the Pokedex.")
                        }
                        else {
                        confirm("Oh no! Pikachu broke free!");
                        pikachuAttack();
                        }
                        pokeballCount = pokeballCount - 1;
                    }
                    else {
                        confirm("You ran out of POKEBALLS!");
                        pokemonBattle();
                    }
                    break;
                case 'POTION':
                    if (potionCount > 0) {
                        confirm("Use a POTION?");
                        if (myDamageLeft <= 40) {
                        myDamageLeft += 10;
                        myTotalDamage -= 10;
                        confirm("You used a potion. Charmander now has " + myDamageLeft + " HP.");
                        potionCount = potionCount - 1;
                        pikachuAttack();
                    }
                        else if (40 < myDamageLeft < 50) {
                        myDamageLeft = 50;
                        myTotalDamage = 0;
                        confirm("You used a potion. Charmander now has " + myDamageLeft + " HP.");
                        potionCount = potionCount - 1;
                        pikachuAttack();
                    }
                        else {
                        confirm("You cannot use a potion.");
                        pokemonBattle();
                    }
                    }
                    else {
                        confirm("You ran out of POTIONS!");
                        pokemonBattle();
                    }
                    break;
                default:
                    confirm("Please select POKEBALL or POTION!");
                    pokemonBattle();
                    break;
            }
            break;
        case 'FLEE':
            var fleeChance = Math.random();
            if (fleeChance >= 0.33) {
                confirm("You have escaped!");
            }
            else {
                confirm("You cannot escape!");
                pikachuAttack();
            }
            break;
        case 'VIEW STATS':
            var statChoice = prompt("View BAG ITEMS, MOVES, MY HP, or OPPONENT HP?").toUpperCase();
            switch(statChoice) {
                case 'BAG ITEMS':
                    confirm("POKEBALLS: " + pokeballCount + "\nPOTIONS: " + potionCount);
                    pokemonBattle();
                    break;
                case 'MOVES':
                    confirm("TACKLE - Damage: 10    Accuracy: 75% \nQUICK ATTACK - Damage: 5   Accuracy: 90% \nEMBER - Damage: 10  Accuracy: 75% \nFLAMETHROWER - Damage: 20   Accuracy: 50%");
                    pokemonBattle();
                    break;
                case 'MY HP':
                    confirm(myDamageLeft);
                    pokemonBattle();
                    break;
                case 'OPPONENT HP':
                    confirm(damageLeft);
                    pokemonBattle();
                    break;
                default:
                    confirm("That is not an option. Please select MOVES, MY HP, or OPPONENT HP.")
                    pokemonBattle();
                    break;
            }
            break;
        default:
            confirm("That is not an option! Please select ATTACK, BAG, FLEE, or VIEW STATS!");
            pokemonBattle();
            break;
    }
};

var pikachuAttack = function() {
    var pikachuMove = Math.random();
    if (pikachuMove <= 0.25) {
        confirm("Pikachu uses TACKLE!");
        var pikachuTackleChance = Math.random();
        if (pikachuTackleChance > 0.25) {
            pikachuAttackDamage(10);
        }
        else {
            confirm("Pikachu missed!");
            pokemonBattle();
        }
    }
    else if (0.25 < pikachuMove <= 0.5) {
        confirm("Pikachu uses QUICK ATTACK!");
        var pikachuQuickAttackChance = Math.random();
        if (pikachuQuickAttackChance > 0.1) {
            pikachuAttackDamage(5);
        }
        else {
            confirm("Pikachu missed!");
            pokemonBattle();
        }
    }
    else if (0.5 < pikachuMove <= 0.75) {
        confirm("Pikachu uses THUNDERBOLT!");
        var pikachuThunderboltChance = Math.random();
        if (pikachuThunderboltChance > 0.25) {
            pikachuAttackDamage(10);
        }
        else {
            confirm("Pikachu missed!");
            pokemonBattle();
        }
    }
    else {
        confirm("Pikachu uses VOLT TACKLE!");
        var pikachuVoltTackleChance = Math.random();
        if (pikachuVoltTackleChance > 0.5) {
            pikachuAttackDamage(20);
        }
        else {
            confirm("Pikachu missed!");
            pokemonBattle();
        }
    }
};

pokemonBattle();
