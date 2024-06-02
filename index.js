const pokemonList = [
  "Bulbasaur", "Ivysaur", "Venusaur",
  "Charmander", "Charmeleon", "Charizard",
  "Squirtle", "Wartortle", "Blastoise",
  "Caterpie", "Metapod", "Butterfree",
  "Weedle", "Kakuna", "Beedrill",
  "Pidgey", "Pidgeotto", "Pidgeot",
  "Rattata", "Raticate",
  "Spearow", "Fearow",
  "Ekans", "Arbok",
  "Pikachu", "Raichu",
  "Sandshrew", "Sandslash",
  "Nidoran♀", "Nidorina", "Nidoqueen",
  "Nidoran♂", "Nidorino", "Nidoking",
  "Clefairy", "Clefable",
  "Vulpix", "Ninetales",
  "Jigglypuff", "Wigglytuff",
  "Zubat", "Golbat",
  "Oddish", "Gloom", "Vileplume",
  "Paras", "Parasect",
  "Venonat", "Venomoth",
  "Diglett", "Dugtrio",
  "Meowth", "Persian",
  "Psyduck", "Golduck",
  "Mankey", "Primeape",
  "Growlithe", "Arcanine",
  "Poliwag", "Poliwhirl", "Poliwrath",
  "Abra", "Kadabra", "Alakazam",
  "Machop", "Machoke", "Machamp",
  "Bellsprout", "Weepinbell", "Victreebel",
  "Tentacool", "Tentacruel",
  "Geodude", "Graveler", "Golem",
  "Ponyta", "Rapidash",
  "Slowpoke", "Slowbro",
  "Magnemite", "Magneton",
  "Farfetchd",
  "Doduo", "Dodrio",
  "Seel", "Dewgong",
  "Grimer", "Muk",
  "Shellder", "Cloyster",
  "Gastly", "Haunter", "Gengar",
  "Onix",
  "Drowzee", "Hypno",
  "Krabby", "Kingler",
  "Voltorb", "Electrode",
  "Exeggcute", "Exeggutor",
  "Cubone", "Marowak",
  "Hitmonlee", "Hitmonchan",
  "Lickitung",
  "Koffing", "Weezing",
  "Rhyhorn", "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea", "Seadra",
  "Goldeen", "Seaking",
  "Staryu", "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp", "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee", "Vaporeon", "Jolteon", "Flareon",
  "Porygon",
  "Omanyte", "Omastar",
  "Kabuto", "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini", "Dragonair", "Dragonite",
  "Mewtwo",
  "Mew",
  "Chikorita", "Bayleef", "Meganium",
  "Cyndaquil", "Quilava", "Typhlosion",
  "Totodile", "Croconaw", "Feraligatr",
  "Sentret", "Furret",
  "Hoothoot", "Noctowl",
  "Ledyba", "Ledian",
  "Spinarak", "Ariados",
  "Crobat",
  "Chinchou", "Lanturn",
  "Pichu",
  "Cleffa",
  "Igglybuff",
  "Togepi", "Togetic",
  "Natu", "Xatu",
  "Mareep", "Flaaffy", "Ampharos",
  "Bellossom",
  "Marill", "Azumarill",
  "Sudowoodo",
  "Politoed",
  "Hoppip", "Skiploom", "Jumpluff",
  "Aipom",
  "Sunkern", "Sunflora",
  "Yanma",
  "Wooper", "Quagsire",
  "Espeon", "Umbreon",
  "Murkrow",
  "Slowking",
  "Misdreavus",
  "Unown",
  "Wobbuffet",
  "Girafarig",
  "Pineco", "Forretress",
  "Dunsparce",
  "Gligar",
  "Steelix",
  "Snubbull", "Granbull",
  "Qwilfish",
  "Scizor",
  "Shuckle",
  "Heracross",
  "Sneasel",
  "Teddiursa", "Ursaring",
  "Slugma", "Magcargo",
  "Swinub", "Piloswine",
  "Corsola",
  "Remoraid", "Octillery",
  "Delibird",
  "Mantine",
  "Skarmory",
  "Houndour", "Houndoom",
  "Kingdra",
  "Phanpy", "Donphan",
  "Porygon2",
  "Stantler",
  "Smeargle",
  "Tyrogue", "Hitmontop",
  "Smoochum",
  "Elekid",
  "Magby",
  "Miltank",
  "Blissey",
  "Raikou",
  "Entei",
  "Suicune",
  "Larvitar", "Pupitar", "Tyranitar",
  "Lugia",
  "Ho-Oh",
  "Celebi",
  "Treecko", "Grovyle", "Sceptile",
  "Torchic", "Combusken", "Blaziken",
  "Mudkip", "Marshtomp", "Swampert",
  "Poochyena", "Mightyena",
  "Zigzagoon", "Linoone",
  "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox",
  "Lotad", "Lombre", "Ludicolo",
  "Seedot", "Nuzleaf", "Shiftry",
  "Taillow", "Swellow",
  "Wingull", "Pelipper",
  "Ralts", "Kirlia", "Gardevoir",
  "Surskit", "Masquerain",
  "Shroomish", "Breloom",
  "Slakoth", "Vigoroth", "Slaking",
  "Nincada", "Ninjask", "Shedinja",
  "Whismur", "Loudred", "Exploud",
  "Makuhita", "Hariyama",
  "Azurill",
  "Nosepass",
  "Skitty", "Delcatty",
  "Sableye",
  "Mawile",
  "Aron", "Lairon", "Aggron",
  "Meditite", "Medicham",
  "Electrike", "Manectric",
  "Plusle", "Minun",
  "Volbeat", "Illumise",
  "Roselia",
  "Gulpin", "Swalot",
  "Carvanha", "Sharpedo",
  "Wailmer", "Wailord",
  "Numel", "Camerupt",
  "Torkoal",
  "Spoink", "Grumpig",
  "Spinda",
  "Trapinch", "Vibrava", "Flygon",
  "Cacnea", "Cacturne",
  "Swablu", "Altaria",
  "Zangoose",
  "Seviper",
  "Lunatone",
  "Solrock",
  "Barboach", "Whiscash",
  "Corphish", "Crawdaunt",
  "Baltoy", "Claydol",
  "Lileep", "Cradily",
  "Anorith", "Armaldo",
  "Feebas", "Milotic",
  "Castform",
  "Kecleon",
  "Shuppet", "Banette",
  "Duskull", "Dusclops",
  "Tropius",
  "Chimecho",
  "Absol",
  "Wynaut",
  "Snorunt", "Glalie",
  "Spheal", "Sealeo", "Walrein",
  "Clamperl", "Huntail", "Gorebyss",
  "Relicanth",
  "Luvdisc",
  "Bagon", "Shelgon", "Salamence",
  "Beldum", "Metang", "Metagross",
  "Regirock", "Regice", "Registeel",
  "Latias", "Latios",
  "Kyogre",
  "Groudon",
  "Rayquaza",
  "Jirachi",
  "Deoxys",
  "Turtwig", "Grotle", "Torterra",
  "Chimchar", "Monferno", "Infernape",
  "Piplup", "Prinplup", "Empoleon",
  "Starly", "Staravia", "Staraptor",
  "Bidoof", "Bibarel",
  "Kricketot", "Kricketune",
  "Shinx", "Luxio", "Luxray",
  "Budew", "Roserade",
  "Cranidos", "Rampardos",
  "Shieldon", "Bastiodon",
  "Burmy", "Wormadam", "Mothim",
  "Combee", "Vespiquen",
  "Pachirisu",
  "Buizel", "Floatzel",
  "Cherubi", "Cherrim",
  "Shellos", "Gastrodon",
  "Ambipom",
  "Drifloon", "Drifblim",
  "Buneary", "Lopunny",
  "Mismagius",
  "Honchkrow",
  "Glameow", "Purugly",
  "Chingling",
  "Stunky", "Skuntank",
  "Bronzor", "Bronzong",
  "Bonsly",
  "Mime Jr.",
  "Happiny",
  "Chatot",
  "Spiritomb",
  "Gible", "Gabite", "Garchomp",
  "Munchlax",
  "Riolu", "Lucario",
  "Hippopotas", "Hippowdon",
  "Skorupi", "Drapion",
  "Croagunk", "Toxicroak",
  "Carnivine",
  "Finneon", "Lumineon",
  "Mantyke",
  "Snover", "Abomasnow",
  "Weavile",
  "Magnezone",
  "Lickilicky",
  "Rhyperior",
  "Tangrowth",
  "Electivire",
  "Magmortar",
  "Togekiss",
  "Yanmega",
  "Leafeon", "Glaceon",
  "Gliscor",
  "Mamoswine",
  "Porygon-Z",
  "Gallade",
  "Probopass",
  "Dusknoir",
  "Froslass",
  "Rotom",
  "Uxie", "Mesprit", "Azelf",
  "Dialga", "Palkia",
  "Heatran",
  "Regigigas",
  "Giratina",
  "Cresselia",
  "Phione", "Manaphy",
  "Darkrai",
  "Shaymin",
  "Arceus",
  "Victini",
  "Snivy", "Servine", "Serperior",
  "Tepig", "Pignite", "Emboar",
  "Oshawott", "Dewott", "Samurott",
  "Patrat", "Watchog",
  "Lillipup", "Herdier", "Stoutland",
  "Purrloin", "Liepard",
  "Pansage", "Simisage",
  "Pansear", "Simisear",
  "Panpour", "Simipour",
  "Munna", "Musharna",
  "Pidove", "Tranquill", "Unfezant",
  "Blitzle", "Zebstrika",
  "Roggenrola", "Boldore", "Gigalith",
  "Woobat", "Swoobat",
  "Drilbur", "Excadrill",
  "Audino",
  "Timburr", "Gurdurr", "Conkeldurr",
  "Tympole", "Palpitoad", "Seismitoad",
  "Throh",
  "Sawk",
  "Sewaddle", "Swadloon", "Leavanny",
  "Venipede", "Whirlipede", "Scolipede",
  "Cottonee", "Whimsicott",
  "Petilil", "Lilligant",
  "Basculin",
  "Sandile", "Krokorok", "Krookodile",
  "Darumaka", "Darmanitan",
  "Maractus",
  "Dwebble", "Crustle",
  "Scraggy", "Scrafty",
  "Sigilyph",
  "Yamask", "Cofagrigus",
  "Tirtouga", "Carracosta",
  "Archen", "Archeops",
  "Trubbish", "Garbodor",
  "Zorua", "Zoroark",
  "Minccino", "Cinccino",
  "Gothita", "Gothorita", "Gothitelle",
  "Solosis", "Duosion", "Reuniclus",
  "Ducklett", "Swanna",
  "Vanillite", "Vanillish", "Vanilluxe",
  "Deerling", "Sawsbuck",
  "Emolga",
  "Karrablast", "Escavalier",
  "Foongus", "Amoonguss",
  "Frillish", "Jellicent",
  "Alomomola",
  "Joltik", "Galvantula",
  "Ferroseed", "Ferrothorn",
  "Klink", "Klang", "Klinklang",
  "Tynamo", "Eelektrik", "Eelektross",
  "Elgyem", "Beheeyem",
  "Litwick", "Lampent", "Chandelure",
  "Axew", "Fraxure", "Haxorus",
  "Cubchoo", "Beartic",
  "Cryogonal",
  "Shelmet", "Accelgor",
  "Stunfisk",
  "Mienfoo", "Mienshao",
  "Druddigon",
  "Golett", "Golurk",
  "Pawniard", "Bisharp",
  "Bouffalant",
  "Rufflet", "Braviary",
  "Vullaby", "Mandibuzz",
  "Heatmor",
  "Durant",
  "Deino", "Zweilous", "Hydreigon",
  "Larvesta", "Volcarona",
  "Cobalion",
  "Terrakion",
  "Virizion",
  "Tornadus-Therian","Tornadus-Incarnate", "Thundurus-Therian","Thundurus-Incarnate", "Landorus-Therian","Landorus-Incarnate",
  "Reshiram",
  "Zekrom",
  "Kyurem",
  "Keldeo",
  "Meloetta",
  "Genesect",
  "Chespin", "Quilladin", "Chesnaught",
  "Fennekin", "Braixen", "Delphox",
  "Froakie", "Frogadier", "Greninja",
  "Bunnelby", "Diggersby",
  "Fletchling", "Fletchinder", "Talonflame",
  "Scatterbug", "Spewpa", "Vivillon",
  "Litleo", "Pyroar",
  "Flabébé", "Floette", "Florges",
  "Skiddo", "Gogoat",
  "Pancham", "Pangoro",
  "Furfrou",
  "Espurr", "Meowstic",
  "Honedge", "Doublade", "Aegislash",
  "Spritzee", "Aromatisse",
  "Swirlix", "Slurpuff",
  "Inkay", "Malamar",
  "Binacle", "Barbaracle",
  "Skrelp", "Dragalge",
  "Clauncher", "Clawitzer",
  "Helioptile", "Heliolisk",
  "Tyrunt", "Tyrantrum",
  "Amaura", "Aurorus",
  "Sylveon",
  "Hawlucha",
  "Dedenne",
  "Carbink",
  "Goomy", "Sliggoo", "Goodra",
  "Klefki",
  "Phantump", "Trevenant",
  "Pumpkaboo", "Gourgeist-Average",
  "Bergmite", "Avalugg",
  "Noibat", "Noivern",
  "Xerneas",
  "Yveltal",
  "Zygarde",
  "Diancie",
  "Hoopa",
  "Volcanion",
  "Rowlet", "Dartrix", "Decidueye",
  "Litten", "Torracat", "Incineroar",
  "Popplio", "Brionne", "Primarina",
  "Pikipek", "Trumbeak", "Toucannon",
  "Yungoos", "Gumshoos",
  "Grubbin", "Charjabug", "Vikavolt",
  "Crabrawler", "Crabominable",
  "Oricorio",
  "Cutiefly", "Ribombee",
  "Rockruff", "Lycanroc-midday","Lycanroc-midnight","Lycanroc-dusk",
  "Wishiwashi",
  "Mareanie", "Toxapex",
  "Mudbray", "Mudsdale",
  "Dewpider", "Araquanid",
  "Fomantis", "Lurantis",
  "Morelull", "Shiinotic",
  "Salandit", "Salazzle",
  "Stufful", "Bewear",
  "Bounsweet", "Steenee", "Tsareena",
  "Comfey",
  "Oranguru",
  "Passimian",
  "Wimpod", "Golisopod",
  "Sandygast", "Palossand",
  "Pyukumuku",
  "type-null", "Silvally",
  "Minior",
  "Komala",
  "Turtonator",
  "Togedemaru",
  "Mimikyu",
  "Bruxish",
  "Drampa",
  "Dhelmise",
  "Jangmo-o", "Hakamo-o", "Kommo-o",
  "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini",
  "Cosmog", "Cosmoem", "Solgaleo", "Lunala",
  "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree",
  "Celesteela", "Kartana", "Guzzlord",
  "Necrozma",
  "Magearna",
  "Marshadow",
  "Poipole", "Naganadel",
  "Stakataka",
  "Blacephalon",
  "Zeraora",
  "Grookey", "Thwackey", "Rillaboom",
  "Scorbunny", "Raboot", "Cinderace",
  "Sobble", "Drizzile", "Inteleon",
  "Skwovet", "Greedent",
  "Rookidee", "Corvisquire", "Corviknight",
  "Blipbug", "Dottler", "Orbeetle",
  "Nickit", "Thievul",
  "Gossifleur", "Eldegoss",
  "Wooloo", "Dubwool",
  "Chewtle", "Drednaw",
  "Yamper", "Boltund",
  "Rolycoly", "Carkol", "Coalossal",
  "Applin", "Flapple", "Appletun",
  "Silicobra", "Sandaconda",
  "Cramorant",
  "Arrokuda", "Barraskewda",
  "Toxel", "Toxtricity",
  "Sizzlipede", "Centiskorch",
  "Clobbopus", "Grapploct",
  "Sinistea", "Polteageist",
  "Hatenna", "Hattrem", "Hatterene",
  "Impidimp", "Morgrem", "Grimmsnarl",
  "Obstagoon",
  "Perrserker",
  "Cursola",
  "Sirfetchd",
  "Mr-Rime",
  "Runerigus",
  "Milcery", "Alcremie",
  "Falinks",
  "Pincurchin",
  "Snom", "Frosmoth",
  "Stonjourner",
  "Eiscue",
  "Indeedee-female","Indeedee-male",
  "Morpeko",
  "Cufant", "Copperajah",
  "Dracozolt", "Arctozolt", "Dracovish", "Arctovish",
  "Duraludon",
  "Dreepy", "Drakloak", "Dragapult",
  "Zacian", "Zamazenta",
  "Eternatus",
  "Kubfu", "Urshifu-Rapid-Strike", "Urshifu-Single-Strike",
  "Zarude",
  "Regieleki", "Regidrago",
  "Glastrier", "Spectrier",
  "Calyrex","Calyrex-Ice", "Calyrex-Shadow",
  "Rattata-Alola",
  "Raticate-Alola",
  "Raichu-Alola",
  "Sandshrew-Alola",
  "Sandslash-Alola",
  "Vulpix-Alola",
  "Ninetales-Alola",
  "Diglett-Alola",
  "Dugtrio-Alola",
  "Meowth-Alola",
  "Persian-Alola",
  "Geodude-Alola",
  "Graveler-Alola",
  "Golem-Alola",
  "Grimer-Alola",
  "Muk-Alola",
  "Exeggutor-Alola",
  "Marowak-Alola",
  "Meowth-galar",
  "Ponyta-galar",
  "Rapidash-galar",
  "Slowpoke-galar",
  "Slowbro-galar",
  "Farfetchd-galar",
  "Weezing-galar",
  "Mr. Mime-galar",
  "Articuno-galar",
  "Zapdos-galar",
  "Moltres-galar",
  "Slowking-galar",
  "Corsola-galar",
  "Zigzagoon-galar",
  "Linoone-galar",
  "Darumaka-galar",
  "Darmanitan-galar",
  "Yamask-galar",
  "Stunfisk-galar",  "Tauros-paldea-combat-breed", "Tauros-paldea-blaze-breed", "Tauros-paldea-aqua-breed",
  "Wooper-paldea", "Clodsire",
  "Ursaluna-bloodmoon",
  "Sprigatito", "Floragato", "Meowscarada",
  "Fuecoco", "Crocalor", "Skeledirge",
  "Quaxly", "Quaxwell", "Quaquaval",
  "Lechonk", "Oinkologne","Oinkologne-female",
  "Tarountula", "Spidops",
  "Nymble","Lokix",
  "Pawmi", "Pawmo","Pawmot",
  "Tandemaus","Maushold",
  "Fidough","Dachsbun",
  "Smoliv","Dolliv","Arboliva",
  "Squawkabilly",
  "Nacli","Naclstack","Garganacl",
  "Charcadet","Armarouge","Ceruledge",
  "Tadbulb","Bellibolt",
  "Wattrel","Kilowattrel",
  "Maschiff","Mabosstiff",
  "Shroodle","Grafaiai",
  "Bramblin","Brambleghast",
  "Toedscool","Toedscruel",
  "Klawf",
  "Capsakid","Scovillain",
  "Rellor","Rabsca",
  "Flittle","Espathra",
  "Tinkatink","Tinkatuff","Tinkaton",
  "Wiglett","Wugtrio",
  "Bombirdier",
  "Finizen","Palafin",
  "Varoom","Revavroom",
  "Cyclizar",
  "Orthworm",
  "Glimmet","Glimmora",
  "Greavard","Houndstone",
  "Flamigo",
  "Cetoddle","Cetitan",
  "Veluza",
  "Dondozo",
  "Tatsugiri",
  "Annihilape",
  "Farigiraf",
  "Dudunsparce",
  "Kingambit",
  "Great-tusk",
  "Scream-tail",
  "Brute-Bonnet",
  "Flutter-Mane",
  "Slither-Wing",
  "Sandy-Shocks",
  "Iron-Treads",
  "Iron-Bundle",
  "Iron-Hands",
  "Iron-Jugulis",
  "Iron-Moth",
  "Iron-Thorns",
  "Frigibax","Arctibax","Baxcalibur",
  "Gimmighoul","Gholdengo",
  "Wo-Chien",
  "Chien-Pao",
  "Ting-Lu",
  "Chi-Yu",
  "Roaring-Moon",
  "Iron-Valiant",
  "Koraidon",
  "Miraidon",
  "Walking-Wake",
  "Iron-Leaves",
  "Dipplin",
  "Poltchageist","Sinistcha",
  "Okidogi",
  "Munkidori",
  "Fezandipiti",
  "Ogerpon","Ogerpon-Wellsrping-Mask","Ogerpon-Hearthflame-Mask","Ogerpon-Cornerstone-Mask",
  "Archaludon",
  "Hydrapple",
  "Gouging-Fire",
  "Raging-Bolt",
  "Iron-Boulder",
  "Iron-Crown",
  "Terapagos",
  "Pecharunt",
  "Growlithe-Hisui",
  "Arcanine-Hisui",
  "Voltorb-Hisui",
  "Electrode-Hisui",
  "Typhlosion-Hisui",
  "Qwilfish-Hisui",
  "Sneasel-Hisui",
  "Samurott-Hisui",
  "Lilligant-Hisui",
  "Zorua-Hisui",
  "Zoroark-Hisui",
  "Braviary-Hisui",
  "Sliggoo-Hisui",
  "Goodra-Hisui",
  "Avalugg-Hisui",
  "Decidueye-Hisui",
  "Basculegion-Hisui",
  "Sneasler-Hisui",
  "Overqwil-Hisui",
  "Ursaluna",
  "Enamorus-Therian", "Enamorus-Incarnate"
];

const pokemonListGen9 = [
  "Tauros-paldea-combat-breed", "Tauros-paldea-blaze-breed", "Tauros-paldea-aqua-breed",
  "Wooper-paldea", "Clodsire",
  "Ursaluna-bloodmoon",
  "Sprigatito", "Floragato", "Meowscarada",
  "Fuecoco", "Crocalor", "Skeledirge",
  "Quaxly", "Quaxwell", "Quaquaval",
  "Lechonk", "Oinkologne","Oinkologne-female",
  "Tarountula", "Spidops",
  "Nymble","Lokix",
  "Pawmi", "Pawmo","Pawmot",
  "Tandemaus","Maushold",
  "Fidough","Dachsbun",
  "Smoliv","Dolliv","Arboliva",
  "Squawkabilly",
  "Nacli","Naclstack","Garganacl",
  "Charcadet","Armarouge","Ceruledge",
  "Tadbulb","Bellibolt",
  "Wattrel","Kilowattrel",
  "Maschiff","Mabosstiff",
  "Shroodle","Grafaiai",
  "Bramblin","Brambleghast",
  "Toedscool","Toedscruel",
  "Klawf",
  "Capsakid","Scovillain",
  "Rellor","Rabsca",
  "Flittle","Espathra",
  "Tinkatink","Tinkatuff","Tinkaton",
  "Wiglett","Wugtrio",
  "Bombirdier",
  "Finizen","Palafin",
  "Varoom","Revavroom",
  "Cyclizar",
  "Orthworm",
  "Glimmet","Glimmora",
  "Greavard","Houndstone",
  "Flamigo",
  "Cetoddle","Cetitan",
  "Veluza",
  "Dondozo",
  "Tatsugiri",
  "Annihilape",
  "Farigiraf",
  "Dudunsparce",
  "Kingambit",
  "Great-tusk",
  "Scream-tail",
  "Brute-Bonnet",
  "Flutter-Mane",
  "Slither-Wing",
  "Sandy-Shocks",
  "Iron-Treads",
  "Iron-Bundle",
  "Iron-Hands",
  "Iron-Jugulis",
  "Iron-Moth",
  "Iron-Thorns",
  "Frigibax","Arctibax","Baxcalibur",
  "Gimmighoul","Gholdengo",
  "Wo-Chien",
  "Chien-Pao",
  "Ting-Lu",
  "Chi-Yu",
  "Roaring-Moon",
  "Iron-Valiant",
  "Koraidon",
  "Miraidon",
  "Walking-Wake",
  "Iron-Leaves",
  "Dipplin",
  "Poltchageist","Sinistcha",
  "Okidogi",
  "Munkidori",
  "Fezandipiti",
  "Ogerpon","Ogerpon-Wellsrping-Mask","Ogerpon-Hearthflame-Mask","Ogerpon-Cornerstone-Mask",
  "Archaludon",
  "Hydrapple",
  "Gouging-Fire",
  "Raging-Bolt",
  "Iron-Boulder",
  "Iron-Crown",
  "Terapagos",
  "Pecharunt",
];
const pokemonListHisui = [

  "Growlithe-Hisui",
  "Arcanine-Hisui",
  "Voltorb-Hisui",
  "Electrode-Hisui",
  "Typhlosion-Hisui",
  "Qwilfish-Hisui",
  "Sneasel-Hisui",
  "Samurott-Hisui",
  "Lilligant-Hisui",
  "Zorua-Hisui",
  "Zoroark-Hisui",
  "Braviary-Hisui",
  "Sliggoo-Hisui",
  "Goodra-Hisui",
  "Avalugg-Hisui",
  "Decidueye-Hisui",
  "Basculegion-Hisui",
  "Sneasler-Hisui",
  "Overqwil-Hisui",
  "Ursaluna",
  "Enamorus-Therian", "Enamorus-Incarnate",
];


import { ChatOpenAI } from "@langchain/openai"; // Import the ChatOpenAI class
import { ChatPromptTemplate } from "@langchain/core/prompts"; // Import the ChatPromptTemplate class
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import express, { response } from "express";
import fetch from "node-fetch";
import { type } from "os";
import cors from "cors";
import { body,query, validationResult } from "express-validator";
import favicon from "serve-favicon";
import dotenv from "dotenv";



dotenv.config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const __dirname = dirname(fileURLToPath(import.meta.url));

// console.log(path.join(__dirname,'/public/images/pokemon_images/pikachu_logo.svg'));

const app = express();
const port = 3000;
// Serve static files from the "public" directory
app.use(express.static('public'))

const chatModel = new ChatOpenAI({
  apiKey: OPENAI_API_KEY,
});



// Base URL for the PokéAPI
const baseUrl = 'https://pokeapi.co/api/v2';

// Pokemon input name scrubbing
function scrubPokemonName(pokemon) {
  return pokemon.toLowerCase().trim().replaceAll(' ', '-');
}

app.get('/', (req, res) => {
    res.render('index.ejs')
    });

function checkPokemonGeneration(pokemonName){
  return new Promise((resolve, reject) => {
    if (pokemonListHisui.map(item => item.toLocaleLowerCase()).includes(pokemonName)){
      let responsToGen = { content: "No, Ash has never encountered an Hisui pokemon on his adventures. This Pokémon comes from the Hisui region which is an ancient version of the Sinnoh Region. Although this Pokémon is still around in game, it is not part of the main series."};
      resolve(responsToGen)
    }
    else if (pokemonListGen9.map(item => item.toLocaleLowerCase()).includes(pokemonName)){
      let responseToGen = { content: "No, Ash has never encountered a Gen 9 Pokémon on his adventures. Ash's last battle was in Galar (Gen 8) agains't Leon, the champion of the Galar region. Gen 9 Pokémon were not part of the main series yet."};
      resolve(responseToGen)
    }
    else if(pokemonList.map(item => item.toLocaleLowerCase()).includes(pokemonName)){
      const pokemon = pokemonName;
      const pokemonQuestion = ChatPromptTemplate.fromMessages([
        ["system", "You are a Pokémon Expert who is answering fans questions. Sound enthusiastic and start your answer with 'Yes' or 'No' and provide an explanation."],
        ["user", `Has Ash Ketchum battled agaisn't (not alongside) ${pokemon}? and with which Pokémon?`], // Fixing a typo
      ]);
  
      const chain = pokemonQuestion.pipe(chatModel);
  
      chain
        .invoke()
        .then((response) => {
          let responsToGen = response;
          console.log(response.content); // Debugging step
          resolve(responsToGen)
          // next(); // Continue to the next middleware
        })
        .catch((error) => {
          console.error("Error:", error);
          let responsToGen = { content: "Error:100, could not fetch the data " };
          resolve(responsToGen)
          // next(); // Ensure next() is called even in error cases
        });

    }
    else{
      let responseToGen = { content: "Could not find the pokemon you were looking for. Please make sure you are using the correct name and try again."};
      resolve(responseToGen)
    }
  })
}

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

app.get('/suggest', query('q').notEmpty().escape().isLength({max:20}), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const filteredNames = ['Too long to be a Pokémon name']
    res.json(filteredNames);
  }
  else {
  const searchTerm = req.query.q;
  const filteredNames = pokemonList.filter(name => name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  res.json(filteredNames);
  }
});


// In house middleware
function checkIfPokemon(req, res, next) {
  const validationError = validationResult(req);
  console.log(validationError);
  if (!validationError.isEmpty()) {
    let pokemon = {
      isPokemon: false,
      pokemonData: {name: "Invalid Pokémon"},
      pokemonImage: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      error: true,
    }
    req.pokemon = pokemon;
    next();
  }
  else {
    // This function checks if the input is a valid Pokémon name, and returns an object with the Pokémon data
    console.log(req.body);
    const pokemon_request = req.body['pokemon'];
    console.log(pokemon_request);
    var pokemon = scrubPokemonName(pokemon_request);
    var pokemonEndpoint = `${baseUrl}/pokemon/${pokemon}`;

    var isPokemon = false;

    async function checkPokemon(pokemonEndpoint) {
      let isPokemon;
      let pokemonData;
      let pokemonImage;
      let error; //error is the valdiation error
    
      try {
        const response = await fetch(pokemonEndpoint);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        
        pokemonData = await response.json();
        isPokemon = true;
        pokemonImage = pokemonData.sprites.other['official-artwork'].front_default;
        error = false; 
        // console.log('Name:', pokemonData.name); // Pikachu
      } catch (error) {
        console.error('Fetch error:', error);
        isPokemon = false;
        pokemonData= {name: "Invalid Pokémon"};
        pokemonImage= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";
        error = true;
      }
    
      // console.log(isPokemon);
      return{isPokemon, pokemonData, pokemonImage,error};
      // return {isPokemon, pokemonData, ;
    }
    
    checkPokemon(pokemonEndpoint)
    .then((pokemonObject) => {
      req.pokemon = pokemonObject;
      next()
    })
    .catch((error) => {
      console.error('Error2:', error);
      next()
    });
  }
}

// Middleware
function askChatGPT(req, res, next) {
  //console.log(req.pokemon); // Debugging step

  // Validate if `req.pokemon` exists and is not null
  // if (req.pokemon && req.pokemon.isPokemon) {
  //   const pokemon = req.pokemon.pokemonData.name;
  //   const pokemonQuestion = ChatPromptTemplate.fromMessages([
  //     ["system", "You are a Pokémon Expert who is a fan of the series."],
  //     ["user", `Has Ash Ketchum battled agaisnt ${pokemon} at point in the series, and with which Pokémon?`], // Fixing a typo
  //   ]);

  //   const chain = pokemonQuestion.pipe(chatModel);

  //   chain
  //     .invoke()
  //     .then((response) => {
  //       req.chatResponse = response;
  //       console.log(response.content); // Debugging step
  //       next(); // Continue to the next middleware
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       req.chatResponse = { content: "Error, could not fetch the data" };
  //       next(); // Ensure next() is called even in error cases
  //     });
  // } else {
  //   console.error("req.pokemon is missing or invalid");
  //   req.chatResponse = { content: "Invalid request" }; // More descriptive error
  //   next(); // Continue to the next middleware
  // }
  if (req.pokemon.error){
    req.chatResponse = { content: "Could not find the pokemon you were looking for. Please make sure you are using the correct name and try again."};
    next();
  }
  else{
    checkPokemonGeneration(req.pokemon.pokemonData.name)
    .then((response) => {
      req.chatResponse = response;
      next();
    })
    .catch((error) => {
      console.error('Error:', error);
      req.chatResponse = { content: "Error, could not fetch the data" };
      next();
    }
    )
  }
}

app.get('/record', (req, res) => {
  res.render('record.ejs');
});

app.get('/master', (req, res) => {
  res.render('master.ejs');
});


app.get('/search', (req, res) => {
  res.redirect('/');
});


// app.post('/search', checkIfPokemon,askChatGPT,(req, res) => {
//   console.log({pokemonName: req.pokemon.pokemonData.name, isPokemon: req.pokemon.isPokemon, pokemonImage: req.pokemon.pokemonImage, chatResponse: req.chatResponse.content});
//   res.json({pokemonName: req.pokemon.pokemonData.name, isPokemon: req.pokemon.isPokemon, pokemonImage: req.pokemon.pokemonImage, chatResponse: req.chatResponse.content});
  
//   });
app.post('/search', 
  // Validation middleware
  body('pokemon').notEmpty().trim().escape().isLength({ max: 20 }),
  // Your custom middleware for checking if it's a Pokémon
  checkIfPokemon,
  // Your custom middleware for interacting with ChatGPT or similar
  askChatGPT,
  // Final route handler
  (req, res) => {
    // Check for validation errors first
    const errors = validationResult(req);

    // If no validation errors, process the request
    console.log({
      pokemonName: req.pokemon.pokemonData.name, 
      isPokemon: req.pokemon.isPokemon, 
      pokemonImage: req.pokemon.pokemonImage, 
      chatResponse: req.chatResponse.content
    });
    res.json({
      pokemonName: req.pokemon.pokemonData.name, 
      isPokemon: req.pokemon.isPokemon, 
      pokemonImage: req.pokemon.pokemonImage, 
      chatResponse: req.chatResponse.content
    });
  }
);

// app.get('/favicon.ico', (req, res) => {
//   console.log(__dirname, 'public/images/pokemon_images/pikachu_logo.svg');
//   res.sendFile(path.join(__dirname, 'public/images/pokemon_images/pikachu_logo.svg'));
// }
// );

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    });