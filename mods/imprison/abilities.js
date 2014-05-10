exports.BattleAbilities = {
	"imprisonability": {
		desc: "ok",
		shortDesc: "uhhhhhhhhhhhh",
		effect: {
			noCopy: false,
			onStart: function(target) {
				this.add('-start', target, 'move: Imprison');
			},
			onFoeModifyPokemon: function(pokemon) {
				var foeMoves = this.effectData.target.moveset;
				for (var f=0; f<foeMoves.length; f++) {
					pokemon.disabledMoves[foeMoves[f].id] = true;
				}
			},
			onFoeBeforeMove: function(attacker, defender, move) {
				if (attacker.disabledMoves[move.id]) {
					this.add('cant', attacker, 'move: Imprison', move);
					return false;
				}
			}
		},
		id: "imprisonability",
		name: "you shouldn't be seeing this",
		rating: 4,
		num: 1645
	}
};
