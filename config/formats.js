// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// Amethyst Metas
	///////////////////////////////////////////////////////////////////
	{
		name: "Clash of Tiers",
		section: "Amethyst Metas",

		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers', 'Tier Clash Clause'],
		banlist: []
	},
	{
		name: "Sketchmons",
		section: "Amethyst Metas",

		mod: 'sketchmons',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "Mixed Tier",
		section: "Amethyst Metas",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Mixed Tier Clause'],
		banlist: ['Gengarite', 'Soul Dew']
	},
	{
		name: "Monotype Tier Shift",
		section: "Amethyst Metas",

		mod: "tiershift",
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview', 'Same Type Clause'],
		banlist: ['Uber', 'Gengarite', 'Soul Dew']
	},
	{
		name: "Kill The Mailman",
		section: "Amethyst Metas",

		mod: 'mailman',
		onFaint: function(pokemon) {
			if (pokemon.side.pokemon[0].item === 'mail') {
				var name = pokemon.side.name;
				var winner = '';
				var message = 'the mailman of '+name+' fainted.';
				if (pokemon.side.id === 'p1') {
					if (this.p2.pokemon[0].item === 'mail') {
						winner = 'p2';
						message = 'The mailman of '+this.p1.name+' was KOed by the mailman of '+this.p2.name+'.';
					} else {
						winner = 'p1';
					}
				} else {
					if (this.p1.pokemon[0].item === 'mail') {
						winner = 'p1';
						message = 'The mailman of '+this.p2.name+' was KOed by the mailman of '+this.p1.name+'.';
					} else {
						winner = 'p2';
					}
				}
				this.add('message', message);
				pokemon.battle.win(winner);
			}
			if (pokemon.side.pokemonLeft === 1) {
				var loser = '';
				this.debug('1 poke left');
				for (var i = 0; i < pokemon.side.team.length; i ++) {
					if (pokemon.side.pokemon[i].fainted === true) continue;
					if (pokemon.side.pokemon[i].item === 'Mail') {
						loser = pokemon.side.id;
						this.debug('checking for item');
					}
				}
				if (loser === 'p1') {
					this.add('message', 'Since '+this.p2.name+' managed to KO all of '+this.p1.name+'\'s Pokemon except for their mailman, '+this.p2.name+' has won the battle!');
					pokemon.battle.win('p2');
				} else {
					this.add('message', 'Since '+this.p1.name+' managed to KO all of '+this.p2.name+'\'s Pokemon except for their mailman, '+this.p1.name+' has won the battle!');
					pokemon.battle.win('p1');
				}
			}
		},
		ruleset: ['Pokemon', 'Standard Pokebank', 'Evasion Abilities Clause', 'Team Preview', 'Mailman Clause'],
		banlist: ['Uber', 'Soul Dew', 'Frisk', 'Explosion', 'Self-Destruct', 'Final Gambit', 'Arena Trap', 'Shedinja', 'Perish Song']
	},
	// XY Singles
	///////////////////////////////////////////////////////////////////
	{
		name: "Random Battle",
		section: "XY Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "XY Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Random Battle']
	},
	{
		name: "OU",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "Ubers",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: []
	},

	{
		name: "UU (beta)",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Heracronite', 'Medichamite', 'Gardevoirite', 'OU', 'BL', 'Drizzle', 'Drought']
	},
	{
		name: "RU (beta)",
 		section: "XY Singles",

 		ruleset: ['Pokemon','Standard Pokebank','Team Preview','Sleep Clause Mod','Species Clause','OHKO Clause','Moody Clause','Evasion Moves Clause'],
 		banlist: ['Uber','Soul Dew','Gengarite','Kangaskhanite','Heracronite','OU','BL','Drizzle','Drought','Bisharp','Blastoise','Latias','Gardevoir','Darmainta','Florges','Heracross','Chandelure',
 		  'Medicham','Slowbro','Keldeo,','Metagross','Scolipede','Aggron','Diggersby','Crawdaunt','Hydreigon','Haxorus','Crobat','Arcanine','Nidoking','Empoleon','Deoxys-Defense','Mew','Staraptor','Umbreon',
 		  'Celebi','Zapdos','Manectric','Victini','Mienshao','Absol','Noiveron','Porygon2','Swampert','Chansey','Roserade','Weavile','Rotom-Heat','Ambipom','Jellicent','Cofagrigus','Tornadus-Therian','Kingdra',
 		  'Magnezone','Hawlucha','Ditto','Aerodactyl','Machamp','Hippowdon','Deoxys-Speed','Jolteon','Shuckle','Thundurus-Therian','Hitmontop','Whimsicott','Chesnaught','Exploud','Cobalion','Vaporeon','Kyurem-Black']
 	},
	{
		name: "LC",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel', 'Yanma', 'Tangela', 'Swirlix', 'Gligar']
	},
	{
		name: "OU Monotype",
		section: "XY Singles",

		ruleset: ['OU', 'Same Type Clause']
	},
	{
		name: "LC UU",
		section: "XY Singles",

		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel',
			'Abra',
			'Aipom',
			'Bronzor',
			'Bunnelby',
			'Carvanha',
			'Chinchou',
			'Clamperl',
			'Croagunk',
			'Drilbur',
			'Dwebble',
			'Elekid',
			'Ferroseed',
			'Fletchling',
			'Froakie',
			'Gastly',
			'Gligar',
			'Growlithe',
			'Honedge',
			'Inkay',
			'Larvesta',
			'Magnemite',
			'Meditite',
			'Mienfoo',
			'Misdreavus',
			'Munchlax',
			'Murkrow',
			'Pawniard',
			'Ponyta',
			'Porygon',
			'Scraggy',
			'Shellder',
			'Slowpoke',
			'Sneasel',
			'Snover',
			'Spritzee',
			'Staryu',
			'Surskit',
			'Swirlix',
			'Tangela',
			'Timburr',
			'Tirtouga',
			'Torchic',
			'Tyrunt',
			'Vullaby',
			'Vulpix',
			'Yanma']
	},
	{
		name: "XY Battle Spot Singles",
		section: "XY Singles",

		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function(team, format) {
			if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
		}
	},
	{
		name: "Custom Game",
		section: "XY Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////


	{
		name: "Random Doubles Battle",
		section: "XY Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Smogon Doubles (suspect test)",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'
		]
	},
	{
		name: "Smogon Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'
		]
	},
	{
		name: "Smogon Doubles Ubers",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: ['Dark Void']
	},
	{
		name: "Smogon Doubles UU",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal',
			'Aegislash',
			'Alakazam',
			'Amoonguss',
			'Azumarill',
			'Breloom',
			'Chandelure',
			'Charizard',
			'Clefable',
			'Cloyster',
			'Conkeldurr',
			'Cresselia',
			'Dragonite',
			'Excadrill',
			'Ferrothorn',
			'Garchomp',
			'Gardevoir',
			'Gastrodon',
			'Genesect',
			'Gengar',
			'Gliscor',
			'Goodra',
			'Greninja',
			'Gyarados',
			'Heatran',
			'Hitmontop',
			'Infernape',
			'Jolteon',
			'Kangaskhan',
			'Klefki',
			'Landorus-Therian',
			'Lucario',
			'Mamoswine',
			'Manectric',
			'Mawile',
			'Meowstic',
			'Metagross',
			'Ninetales',
			'Politoed',
			'Reuniclus',
			'Rotom-Wash',
			'Rhyperior',
			'Sableye',
			'Scizor',
			'Scrafty',
			'Sylveon',
			'Talonflame',
			'Terrakion',
			'Thundurus',
			'Togekiss',
			'Trevenant',
			'Tyranitar',
			'Venusaur',
			'Volcarona',
			'Whimsicott']
	},
	{
		name: "XY Battle Spot Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		validateTeam: function(team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "VGC 2014",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function(team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "Doubles Challenge Cup",
		section: 'XY Doubles',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		ruleset: ['Team Preview']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "Alphabet Cup",
		section: "OM of the Month",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Soul Dew', 'Gengarite', 'Kangaskhanite', 'Mewtwonite X', 'Mewtwonite Y', 'Swoobat',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying',
			'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken', 'Blaziken-Mega', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre',
			'Kyurem-White', 'Lugia', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
		],
		validateTeam: function(team, format) {
			var letters = {};
			var letter = '';
			for (var i = 0; i < team.length; i++) {
				letter = Tools.getTemplate(team[i]).species.slice(0,1).toUpperCase();
				if (letter in letters) return ['Your team cannot have more that one Pokémon starting with the letter "' + letter + '".'];
				letters[letter] = 1;
			}
		}
	},
	{
		name: "OU Theorymon",
		section: "OM of the Month",

		mod: 'theorymon',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "CAP",
		section: "Other Metagames",

		ruleset: ['CAP Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause', 'HP Percentage Mod'],
		banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power', 'Parental Bond']
	},
	{
		name: "Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "Sky Battles",
		section: "Other Metagames",

		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
				return [set.species+" is not a Flying type and does not have the ability Levitate."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: [
			// Banned items
			'Soul Dew', 'Iron Ball', 'Pinsirite', 'Gengarite',
			// Banned moves
			'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure',
			'Flying Press', 'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heavy Slam',
			'Ingrain', "Land's Wrath", 'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller',
			'Seismic Toss', 'Slam', 'Smack Down', 'Spikes', 'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport',
			// Banned Pokémon
			// Illegal Flying-types
			'Pidgey', 'Spearow', "Farfetch'd", 'Doduo', 'Dodrio', 'Hoothoot', 'Natu', 'Murkrow', 'Delibird', 'Taillow', 'Starly', 'Chatot',
			'Shaymin-Sky', 'Pidove', 'Archen', 'Ducklett', 'Rufflet', 'Vullaby', 'Fletchling', 'Hawlucha',
			// Illegal Levitators
			'Gastly', 'Gengar',
			// Illegal Megas
			'Pinsir-Mega', 'Gengar-Mega',
			// Illegal Ubers
			'Arceus-Flying', 'Giratina', 'Giratina-Origin', 'Ho-Oh', 'Lugia', 'Rayquaza', 'Yveltal'
		]
	},
	{
		name: "Inverse Battle",
		section: "Other Metagames",

		mod: 'inverse',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: [
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Darkrai',
			'Deoxys-Attack',
			'Deoxys',
			'Gengarite',
			'Giratina', 'Giratina-Origin',
			'Groudon',
			'Ho-Oh',
			'Kangaskhanite',
			'Kyogre',
			'Kyurem-Black',
			'Lugia',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Palkia',
			'Rayquaza',
			'Reshiram',
			'Shaymin-Sky',
			'Soul Dew',
			'Kyurem-White',
			'Xerneas',
			'Yveltal',
			'Zekrom'
		]
	},
	{
		name: "1v1",
		section: 'Other Metagames',

		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Unreleased', 'Illegal', 'Focus Sash', 'Kangaskhanite', 'Soul Dew',
			'Destiny Bond', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Memento', 'Perish Song', 'Selfdestruct',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
		]
	},
	{
		name: "OU Monotype",
		section: "Other Metagames",

		ruleset: ['OU', 'Same Type Clause']
	},
	{
		name: "Middle Cup",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Illegal', 'Eviolite'],
		maxLevel: 50,
		defaultLevel: 50,
		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (!template.evos || template.evos.length === 0 || !template.prevo) {
				return [set.species + " is not the middle Pokémon in an evolution chain."];
			}
		}
	},
	{
		name: "STABmons",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Ability Exchange",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Slaking', 'Regigigas']
	},
	{
		name: "Averagemons",
		section: "Other Metagames",

		searchShow: false,
		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Soul Dew', 'Thick Club', 'Deepseatooth', 'Deepseascale', 'Light Ball', 'Mawilite', 'Medichamite', 'Eviolite', 'Shedinja', 'Smeargle', 'Huge Power', 'Pure Power']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Illegal', 'Unreleased'],
		mimicGlitch: true
	},
	{
		name: "[Gen 5] PU",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['NU'],
		banlist: ["Charizard", "Wartortle", "Kadabra", "Golem", "Haunter", "Exeggutor", "Weezing", "Kangaskhan", "Pinsir", "Lapras", "Ampharos", "Misdreavus", "Piloswine", "Miltank", "Ludicolo", "Swellow", "Gardevoir", "Ninjask", "Torkoal", "Cacturne", "Altaria", "Armaldo", "Gorebyss", "Regirock", "Regice", "Bastiodon", "Floatzel", "Drifblim", "Skuntank", "Lickilicky", "Probopass", "Rotom-Fan", "Samurott", "Musharna", "Gurdurr", "Sawk", "Carracosta", "Garbodor", "Sawsbuck", "Alomomola", "Golurk", "Braviary", "Electabuzz", "Electrode", "Liepard", "Tangela", "Eelektross", "Ditto", "Seismitoad", "Zangoose", "Roselia", "Serperior", "Metang", "Tauros", "Cradily", "Primeape", "Scolipede", "Jynx", "Basculin", "Gigalith", "Camerupt", "Golbat"]
	},
	{
		name: "[Gen 5] Budgetmons",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['OU'],
		banlist: [],
		validateTeam: function(team, format) {
			var bst = 0;
			for (var i=0; i<team.length; i++) {
				var template = this.getTemplate(team[i].species);
				Object.values(template.baseStats, function(value) {
					bst += value;
				});
			}
			if (bst > 2300) return ['The combined BST of your team is greater than 2300.'];
		}
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	// {
	// 	name: "[Gen 5] CAP Cawmodore Playtest",
	// 	section: "BW2 Singles",

	// 	mod: 'gen5',
	// 	ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
	// 	banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', "Tomohawk", "Necturna", "Mollux", "Aurumoth", "Malaconda", "Syclant", "Revenankh", "Pyroak", "Fidgit", "Stratagem", "Arghonaut", "Kitsunoh", "Cyclohm", "Colossoil", "Krilowatt", "Voodoom"]
	// },
	{
		name: "[Gen 5] OU",
		section: "BW2 Singles",
		column: 2,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
	},
	{
		name: "[Gen 5] RU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU','BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		validateSet: function(set) {
			if (!set.level || set.level >= 50) set.forcedLevel = 50;
			return [];
		},
		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Smogon Doubles",
		section: 'BW2 Doubles',
		column: 2,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	}

];
