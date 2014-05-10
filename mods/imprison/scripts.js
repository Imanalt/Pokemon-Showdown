exports.BattleScripts = {
	init: function() {
		var imprison_ability = function(pokemon) {
			var foeactive = pokemon.side.foe.active;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				this.debug('imprison onUpdate activate');

				pokemon.addVolatile('imprisonability');
				//if (pokemon.addVolatile('imprisonability')) {
				//	this.add('-start', foeactive[i], 'move: Imprison');
				//}
				
			}
			
		};
		
		var prev_onUpdate = {};
		for (var i in this.data.Abilities) {
			if (this.data.Abilities[i].onUpdate) {
				prev_onUpdate[i] = this.data.Abilities[i].onUpdate;
				this.data.Abilities[i].onUpdate = function (pokemon) {
					console.log(pokemon.ability);
					prev_onUpdate[pokemon.ability].apply(this, [pokemon]);
					imprison_ability.apply(this, [pokemon]);
				}
			}
			else {
				this.data.Abilities[i].onUpdate = imprison_ability;
			}
		}
	}
};
