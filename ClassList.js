var classListing = {
    'Duskblade': {
        'name': 'Duskblade',
        'spellMod': 'INT',
        'type': 'Basic',
        'class': 'Duskblade',
        'spellsType': 'Known',
        'spellCasterMult': 1,
        'proficiencies': [
            'Simple', 'Light', 'Medium', 'Heavy', 'Martial', 'Light Shield', 'Heavy Shield'
        ],
        'levels': {
            1: {
                BAB: [1],
                Fort: 2,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 3,
                    1: 2,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Arcane Attunement',
                        'Subtype': 'Duskblade',
                        'Page': 'PHB2-20',
                        'Description': "You can use the spell-like powers dancing lights, detect magic, flare, ghost sound, and read magic a combined total of times per day equal to 3 + your Int modifier. These spell-like powers do not count against your total of spells known or spells per day.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'spellLike',
                                name: 'Arcane Attunement',
                                desc: 'You can use the spell-like powers dancing lights, detect magic, flare, ghost sound, and read magic a combined total of times per day equal to 3 + your Int modifier. These spell-like powers do not count against your total of spells known or spells per day.',
                                limited: true,
                                limit: 3,
                                mod: 'INT'
                            }
                        ],
                        'actions': [],
                        'spells': [{
                            type: 'spellLike',
                            spells: ['Dancing Lights', 'Detect Magic', 'Flare', 'Ghost Sound', 'Read Magic'],
                            base: 3,
                            mod: 'INT'
                        }]
                    },
                    {
                        'id': 0,
                        'Name': 'Armored Mage - Light',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Normally, armor of any type interferes with an arcane spellcaster's gestures, which can cause spells to fail if those spells have a somatic component. A duskblade's limited focus and specialized training, however, allows you to avoid arcane spell failure so long as you stick to light armor and light shields.This training does not extend to medium or heavy armors, nor to heavy shields. This ability does not apply to spells gained from a different spellcasting class.<br><br>At 4th level, you learn to use medium armor with no chance of arcane spell failure.<br><br>At 7th level, you learn to use a heavy shield with no chance of arcane spell failure.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [2],
                Fort: 3,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 4,
                    1: 3,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Combat Casting',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "At 2nd level, you gain Combat Casting as a bonus feat.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'feats': ['Combat Casting']
                    }
                ]
            },
            3: {
                BAB: [3],
                Fort: 3,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 5,
                    1: 4,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Arcane Channeling',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Beginning at 3rd level, you can use a standard action to cast any touch spell you know and deliver the spell through your weapon with a melee attack. Casting a spell in this manner does not provoke attacks of opportunity. The spell must have a casting time of 1 standard action or less. If the melee attack is successful, the attack deals damage normally; then the effect of the spell is resolved.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            4: {
                BAB: [4],
                Fort: 4,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 6,
                    1: 5,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Armored Mage - Medium',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Normally, armor of any type interferes with an arcane spellcaster's gestures, which can cause spells to fail if those spells have a somatic component. A duskblade's limited focus and specialized training, however, allows you to avoid arcane spell failure so long as you stick to light armor and light shields.This training does not extend to medium or heavy armors, nor to heavy shields. This ability does not apply to spells gained from a different spellcasting class.<br><br>At 4th level, you learn to use medium armor with no chance of arcane spell failure.<br><br>At 7th level, you learn to use a heavy shield with no chance of arcane spell failure.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            5: {
                BAB: [5],
                Fort: 4,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 6,
                    1: 5,
                    2: 2,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Quick Cast',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Beginning at 5th level, you can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less.<br><br>You can use this ability twice per day at 10th level, three times per day at 15th level, and four times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Quick Cast - 5th level',
                                group: 'Quick Cast',
                                desc: 'You can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less',
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Spell Slots',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Beginning at 5th level, you can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less.<br><br>You can use this ability twice per day at 10th level, three times per day at 15th level, and four times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Essence spells',
                                group: '',
                                desc: 'You can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less',
                                limited: true,
                                limit: 21,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            6: {
                BAB: [6, 1],
                Fort: 5,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 6,
                    1: 6,
                    2: 3,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Spell Power + 2',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Starting at 6th level, you can more easily overcome the spell resistance of any opponent you successfully injure with a melee attack. If you have injured an opponent with a melee attack, you gain a +2 bonus on your caster level check to overcome spell resistance for the remainder of the encounter. This bonus increases to +3 at 11th level, to +4 at 16th level, and to +5 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            7: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 6,
                    1: 6,
                    2: 5,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Armored Mage - Heavy Shield',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Normally, armor of any type interferes with an arcane spellcaster's gestures, which can cause spells to fail if those spells have a somatic component. A duskblade's limited focus and specialized training, however, allows you to avoid arcane spell failure so long as you stick to light armor and light shields.This training does not extend to medium or heavy armors, nor to heavy shields. This ability does not apply to spells gained from a different spellcasting class.<br><br>At 4th level, you learn to use medium armor with no chance of arcane spell failure.<br><br>At 7th level, you learn to use a heavy shield with no chance of arcane spell failure.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            8: {
                BAB: [8, 3],
                Fort: 6,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 6,
                    1: 7,
                    2: 6,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            9: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 6,
                    1: 7,
                    2: 6,
                    3: 2,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            10: {
                BAB: [10, 5],
                Fort: 7,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 8,
                    2: 7,
                    3: 3,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Quick Cast - 2/day',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Beginning at 5th level, you can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less.<br><br>You can use this ability twice per day at 10th level, three times per day at 15th level, and four times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Quick Cast - 10th level',
                                group: 'Quick Cast',
                                desc: 'You can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less',
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            11: {
                BAB: [11, 6, 1],
                Fort: 7,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 8,
                    2: 7,
                    3: 5,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Spell Power + 3',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Starting at 6th level, you can more easily overcome the spell resistance of any opponent you successfully injure with a melee attack. If you have injured an opponent with a melee attack, you gain a +2 bonus on your caster level check to overcome spell resistance for the remainder of the encounter. This bonus increases to +3 at 11th level, to +4 at 16th level, and to +5 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            12: {
                BAB: [12, 7, 2],
                Fort: 8,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 8,
                    2: 8,
                    3: 6,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [13, 8, 3],
                Fort: 8,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 9,
                    2: 8,
                    3: 6,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Arcane Channeling - Full Attack',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "At 13th level, you can cast any touch spell you know as part of a full attack action, and the spell affects each target you hit in melee combat that round. Doing so discharges the spell at the end of the round, in the case of a touch spell that would otherwise last longer than 1 round.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            14: {
                BAB: [14, 9, 4],
                Fort: 9,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 6,
                    1: 9,
                    2: 8,
                    3: 7,
                    4: 3,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [15, 10, 5],
                Fort: 9,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 6,
                    1: 9,
                    2: 8,
                    3: 7,
                    4: 5,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Quick Cast - 3/day',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Beginning at 5th level, you can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less.<br><br>You can use this ability twice per day at 10th level, three times per day at 15th level, and four times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Quick Cast - 15th level',
                                group: 'Quick Cast',
                                desc: 'You can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less',
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            16: {
                BAB: [16, 11, 6, 1],
                Fort: 10,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 9,
                    2: 9,
                    3: 8,
                    4: 6,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Spell Power + 4',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Starting at 6th level, you can more easily overcome the spell resistance of any opponent you successfully injure with a melee attack. If you have injured an opponent with a melee attack, you gain a +2 bonus on your caster level check to overcome spell resistance for the remainder of the encounter. This bonus increases to +3 at 11th level, to +4 at 16th level, and to +5 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            17: {
                BAB: [17, 12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 10,
                    2: 9,
                    3: 8,
                    4: 6,
                    5: 2,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            18: {
                BAB: [18, 13, 8, 3],
                Fort: 11,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 10,
                    2: 9,
                    3: 8,
                    4: 7,
                    5: 3,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Spell Power + 5',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Starting at 6th level, you can more easily overcome the spell resistance of any opponent you successfully injure with a melee attack. If you have injured an opponent with a melee attack, you gain a +2 bonus on your caster level check to overcome spell resistance for the remainder of the encounter. This bonus increases to +3 at 11th level, to +4 at 16th level, and to +5 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            19: {
                BAB: [19, 14, 9, 4],
                Fort: 11,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 10,
                    2: 10,
                    3: 9,
                    4: 7,
                    5: 5,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            20: {
                BAB: [20, 15, 10, 5],
                Fort: 12,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 6,
                    1: 10,
                    2: 10,
                    3: 10,
                    4: 8,
                    5: 6,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Quick Cast - 4/day',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Beginning at 5th level, you can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less.<br><br>You can use this ability twice per day at 10th level, three times per day at 15th level, and four times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Quick Cast - 20th level',
                                group: 'Quick Cast',
                                desc: 'You can cast one spell each day as a swift action, so long as the casting time of the spell is 1 standard action or less',
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
        },
        'skills': [
            'Climb', 'Concentration', 'Decipher Script', 'Jump', 'Ride', 'Sense Motive', 'Spellcraft', 'Swim', 'Craft', 'Knowledge'
        ]
    },

    'Chameleon': {
        'name': 'Chameleon',
        'type': 'Prestige',
        'class': 'Chameleon',
        'spellsType': 'Prepared',
        'spellMod': null,
        'proficiencies': ['Simple', 'Light', 'Medium', 'Heavy', 'Light Shield', 'Heavy Shield'],
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 0,
                Will: 0,
                spells: {
                    0: 4,
                    1: 2,
                    2: 0,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 0,
                Will: 0,
                spells: {
                    0: 4,
                    1: 3,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            3: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 1,
                spells: {
                    0: 4,
                    1: 3,
                    2: 2,
                    3: 0,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            4: {
                BAB: [3],
                Fort: 1,
                Ref: 1,
                Will: 1,
                spells: {
                    0: 4,
                    1: 4,
                    2: 3,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [3],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 4,
                    1: 4,
                    2: 3,
                    3: 2,
                    4: 0,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            }
        },
        'skills': [
            'Bluff', 'Concentration', 'Craft', 'Disguise', 'Profession', 'Sense Motive', 'Swim', 'Use Magic Device'
        ]
    },
    'Chaos Shaper': {
        'name': 'Chaos Shaper',
        'type': 'Prestige',
        'class': 'Duskblade',
        'spellMod': null,
        'proficiencies': [],
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 0,
                Will: 2,
                spells: '',
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Desert Insight',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "Your magic is more powerful in wastelands environments. When casting arcane spells in any sort of waste terrain, your caster level is considered to be one level higher than your actual caster level. Even in nonwaste environments, as long as you carry 15 or more pounds of sand as part of your equipment, you gain the benefit of this class feature.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }, {
                        'id': 0,
                        'Name': 'Dust Magic',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "As a member of this class, you gain knowledge of additional spells (see the list below). If you were a caster who previously prepared spells (such as a wizard), you can prepare these spells like any other spell to which you have access. If you are a spontaneous caster (such as a sorcerer), these spells are available to you like any other spell you know. You cannot cast a spell of higher level than the maximum spell level you can cast. These spells become options for you when you gain access to the appropriate spell level.<br><br><div><b>1st—</b>bear’s endurance, bull’s strength, cat’s grace, endure elements, parching touch†, speak with animals, summon desert ally I†.<br><b>2nd—</b>eagle’s splendor, fox’s cunning, heat metal, owl’s wisdom, resist energy, summon desert ally II†, summon swarm.<br><b>3rd—</b>control sand†, desiccate†, dispel magic, dominate animal, haboob†, slipsand†, summon desert ally III†, sunstroke†, tormenting thirst†, wind wall.<br><b>4th—</b>blast of sand†, summon desert ally IV†, wall of sand†, wither†.<br><b>5th—</b>choking sands†, flaywind burst†, flesh to salt†, summon desert ally V†, transmute sand to stone†, transmute stone to sand†.<br><b>6th—</b>awaken sand†, mummify†, sandstorm†, summon desert ally VI†.<br><b>7th—</b>mass flesh to salt†, summon desert ally VII†.<br><b>8th—</b>summon desert ally VIII†, whirlwind.<br><b>9th—</b>summon desert ally IX†.</div>",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }, {
                        'id': 0,
                        'Name': 'Chaos Shape',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "All Chaos shapers know how to magically sculpt the soil of the waste (generally desert sand, dust, or gravel) into mundane objects. You can create any solid object you can imagine, provided you have access to a sufficient quantity of the appropriate soil and you can successfully make a caster level check. The DC of the check is determined by the size and complexity of the item:<br><table class='featDescTable'><tbody><tr><th>Item Size</th><th>DC</th></tr><tr><td>1 cu. ft. or less</td><td>–5</td></tr><tr><td>1.1–2.0 cu. ft.</td><td>0</td></tr><tr><td>2.1–4.0 cu. ft.</td><td>5</td></tr><tr><td>4.1–8.0 cu. ft.</td><td>10</td></tr><tr><td>8.1–12.0 cu. ft.</td><td>15</td></tr><tr><td>12.1–16.0 cu. ft.</td><td>20</td></tr><tr><td>16.1–24.0 cu. ft.</td><td>25</td></tr><tr><td>24.1–30.0 cu. ft.</td><td>30</td></tr></tbody></table><br><br><table class='featDescTable'><tbody><tr><th>Item</th><th>Complexity Modifier</th></tr><tr><td>Fine details</td><td>+2</td></tr><tr><td>Functioning tool</td><td>+2</td></tr><tr><td>Functioning armor/weapon</td><td>+5</td></tr><tr><td>Multiple parts</td><td>+5</td></tr><tr><td>Masterwork version</td><td>+10</td></tr><tr><td>Moving parts</td><td>+10</td></tr></tbody></table><br><br>For example, Osrutek, a 6th-level wizard/8th-level sand shaper, decides to use his sand shape ability to create barding for his horse. The DM determines that the total volume of the barding is about 6 cubic feet, and so assigns his attempt a base DC of 10. Because barding is armor (+5), and consists of multiple parts (+5), the DM assigns an additional +10 modifier to the DC, bringing it up to 20. Osrutek’s caster level check bonus is +13, so he must roll a 7 or higher to complete the barding.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Chaos Shape',
                                group: 'Chaos Shape',
                                desc: "All Chaos shapers know how to magically sculpt the soil of the waste (generally desert sand, dust, or gravel) into mundane objects. You can create any solid object you can imagine, provided you have access to a sufficient quantity of the appropriate soil and you can successfully make a caster level check. The DC of the check is determined by the size and complexity of the item:<br><table class='featDescTable'><tbody><tr><th>Item Size</th><th>DC</th></tr><tr><td>1 cu. ft. or less</td><td>–5</td></tr><tr><td>1.1–2.0 cu. ft.</td><td>0</td></tr><tr><td>2.1–4.0 cu. ft.</td><td>5</td></tr><tr><td>4.1–8.0 cu. ft.</td><td>10</td></tr><tr><td>8.1–12.0 cu. ft.</td><td>15</td></tr><tr><td>12.1–16.0 cu. ft.</td><td>20</td></tr><tr><td>16.1–24.0 cu. ft.</td><td>25</td></tr><tr><td>24.1–30.0 cu. ft.</td><td>30</td></tr></tbody></table><br><br><table class='featDescTable'><tbody><tr><th>Item</th><th>Complexity Modifier</th></tr><tr><td>Fine details</td><td>+2</td></tr><tr><td>Functioning tool</td><td>+2</td></tr><tr><td>Functioning armor/weapon</td><td>+5</td></tr><tr><td>Multiple parts</td><td>+5</td></tr><tr><td>Masterwork version</td><td>+10</td></tr><tr><td>Moving parts</td><td>+10</td></tr></tbody></table><br><br>For example, Osrutek, a 6th-level wizard/8th-level sand shaper, decides to use his sand shape ability to create barding for his horse. The DM determines that the total volume of the barding is about 6 cubic feet, and so assigns his attempt a base DC of 10. Because barding is armor (+5), and consists of multiple parts (+5), the DM assigns an additional +10 modifier to the DC, bringing it up to 20. Osrutek’s caster level check bonus is +13, so he must roll a 7 or higher to complete the barding.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 0,
                Will: 3,
                spells: '+1',
                specialAbilities: [{
                    'id': 0,
                    'Name': 'Chaos Form',
                    'Subtype': '',
                    'Page': 'CM 50',
                    'Description': "At 2nd level and higher, you have the ability to transform your body into animated sand, along with all your gear, once per day for up to 1 minute + 1 round per sand shaper level. This ability works in all other respects like the spell of the same name (see page 119).",
                    'Benefit': "",
                    'Special': '',
                    'Normal': '',
                    'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                    'Effects': {},
                    'limits': [{
                        type: 'class',
                        name: 'Chaos Form',
                        group: 'Chaos Form',
                        desc: "At 2nd level and higher, you have the ability to transform your body into animated sand, along with all your gear, once per day for up to 1 minute + 1 round per sand shaper level. This ability works in all other respects like the spell of the same name (see page 119).",
                        limited: true,
                        limit: 1,
                        mod: false
                    }],
                    'actions': [],
                    'spells': []
                }]
            },
            3: {
                BAB: [1],
                Fort: 1,
                Ref: 1,
                Will: 3,
                spells: '+1',
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Chaos Stride',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "At 3rd level and higher, you can fly as by means of the overland flight spell once per day. You must begin and end your flight on a square of waste terrain; if your movement crosses a different type of terrain, your flight ends immediately, dropping you abruptly (albeit safely) to the ground.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [{
                            type: 'class',
                            name: 'Chaos Stride',
                            group: 'Chaos Stride',
                            desc: "At 3rd level and higher, you can fly as by means of the overland flight spell once per day. You must begin and end your flight on a square of waste terrain; if your movement crosses a different type of terrain, your flight ends immediately, dropping you abruptly (albeit safely) to the ground.",
                            limited: true,
                            limit: 1,
                            mod: false
                        }],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            4: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: '+1',
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Improved Sand Shape',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': `At 4th level, you learn to magically sculpt the soil of the waste generally desert sand, dust, or gravel) into animate objects. You can create one of the creatures described below, provided a sufficient quantity of the appropriate soil (3 cubic feet unless otherwise noted) is available and you can successfully make a caster level check; the DC is based on the specific creature. 
                                    Every creature you create has damage reduction 5—, but sand shaped creatures reduced to 0 hit points are destroyed.Each attempt to create a creature requires a number of minutes equal to the DC indicated for the creature. You can take 10 on this check. Created items persist for 1 minute + 1 round per sand shaper level.You can create and maintain a number of creatures and objects (when using sand shape and improved sand shape
                                    simultaneously) equal to your sand shaper level. If you create an additional creature or item, the creature or item that has been in existence the longest reverts to sand. Creatures you create using this ability otherwise persist for the duration of this use of the ability unless otherwise noted), regardless of their distance from you. Available creatures include the following.<br><br><ul></li><li>Desert Eagle (DC 20): With
                                    its superior vision and ability to range far ahead and above, the desert eagle is the perfect scout. It responds to your mental commands, and you can, as a full-round action, see things from the eagle's perspective (using the eagle's Spot modifier and point of view). It is in all other respects identical to a normal eagle (see page 272 of the Monster Manual).</li><li>Dust Jackal (DC 15): A dust jackal is a master of stealth
                                    and cunning; it can creep virtually undetected into hidden places and enemy encampments, and there either carry out attacks or retrieve small items. A dust jackal is otherwise the same as an ordinary jackal (see the small dog entry, page 271 of the Monster Manual).</li><li>Golden Camel (DC 15): A golden camel is the animal of choice for bearing burdens. It responds only to your mental commands. Otherwise, it is identical to
                                    an ordinary camel (see page 270 of the Monster Manual). Unlike other creature created with this ability, a golden camel persists for 10 minutes per sand shaper level. It appears equipped with a saddle, tack, and harness. Creating this sand-shaped creation requires 10 cubic feet of soil.</li><li>Mirage Hound (DC 15): A mirage hound is a faithful companion that fearlessly guards its creator at all times. It can be commanded
                                    to attack, but it does so only if it can remain within 20 feet of you. A mirage hound is otherwise the same as an ordinary small dog (see the small dog entry, page 271 of the Monster Manual).</li><li>Sand Scorpion (DC 20): A sand scorpion is identical to a Tiny monstrous scorpion (see page 287 of the Monster Manual). You can mentally command it, and it is most often used as a tool of assassination. Creating this sand-shaped
                                    creation requires only 1 cubic foot of soil.</li><li>Sun Steed (DC 15): A sun steed is a courageous mount that can be ridden into battle as though it were a light warhorse (see page 274 of the Monster Manual). It appears equipped with a saddle, tack, and harness. Creating this sand-shaped creation requires 10 cubic feet of soil.</li></ul>`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [{
                            type: 'class',
                            name: 'Chaos Stride',
                            group: 'Chaos Stride',
                            desc: `At 4th level, you learn to magically sculpt the soil of the waste generally desert sand, dust, or gravel) into animate objects. You can create one of the creatures described below, provided a sufficient quantity of the appropriate soil (3 cubic feet unless otherwise noted) is available and you can successfully make a caster level check; the DC is based on the specific creature. 
                                    Every creature you create has damage reduction 5—, but sand shaped creatures reduced to 0 hit points are destroyed.Each attempt to create a creature requires a number of minutes equal to the DC indicated for the creature. You can take 10 on this check. Created items persist for 1 minute + 1 round per sand shaper level.You can create and maintain a number of creatures and objects (when using sand shape and improved sand shape
                                    simultaneously) equal to your sand shaper level. If you create an additional creature or item, the creature or item that has been in existence the longest reverts to sand. Creatures you create using this ability otherwise persist for the duration of this use of the ability unless otherwise noted), regardless of their distance from you. Available creatures include the following.<br><br><ul></li><li>Desert Eagle (DC 20): With
                                    its superior vision and ability to range far ahead and above, the desert eagle is the perfect scout. It responds to your mental commands, and you can, as a full-round action, see things from the eagle's perspective (using the eagle's Spot modifier and point of view). It is in all other respects identical to a normal eagle (see page 272 of the Monster Manual).</li><li>Dust Jackal (DC 15): A dust jackal is a master of stealth
                                    and cunning; it can creep virtually undetected into hidden places and enemy encampments, and there either carry out attacks or retrieve small items. A dust jackal is otherwise the same as an ordinary jackal (see the small dog entry, page 271 of the Monster Manual).</li><li>Golden Camel (DC 15): A golden camel is the animal of choice for bearing burdens. It responds only to your mental commands. Otherwise, it is identical to
                                    an ordinary camel (see page 270 of the Monster Manual). Unlike other creature created with this ability, a golden camel persists for 10 minutes per sand shaper level. It appears equipped with a saddle, tack, and harness. Creating this sand-shaped creation requires 10 cubic feet of soil.</li><li>Mirage Hound (DC 15): A mirage hound is a faithful companion that fearlessly guards its creator at all times. It can be commanded
                                    to attack, but it does so only if it can remain within 20 feet of you. A mirage hound is otherwise the same as an ordinary small dog (see the small dog entry, page 271 of the Monster Manual).</li><li>Sand Scorpion (DC 20): A sand scorpion is identical to a Tiny monstrous scorpion (see page 287 of the Monster Manual). You can mentally command it, and it is most often used as a tool of assassination. Creating this sand-shaped
                                    creation requires only 1 cubic foot of soil.</li><li>Sun Steed (DC 15): A sun steed is a courageous mount that can be ridden into battle as though it were a light warhorse (see page 274 of the Monster Manual). It appears equipped with a saddle, tack, and harness. Creating this sand-shaped creation requires 10 cubic feet of soil.</li></ul>`,
                            limited: true,
                            limit: 1,
                            mod: false
                        }],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            5: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: '+1',
                specialAbilities: [{
                    'id': 0,
                    'Name': 'Improved Dust Magic',
                    'Subtype': '',
                    'Page': 'CM 50',
                    'Description': "At 5th level, your affinity with the waste increases, and your spells grow even more potent. Three times per day, when you cast an arcane spell in any sort of waste terrain, you can empower, enlarge, extend, silence, or still your spell, as the appropriate metamagic feats. These options have the same general effect as the metamagic feats of the same name, except that they do not use up higher-level spell slots, and even if you prepare spells, you can decide to alter them with this ability as you cast a spell.<br>None of these abilities stack with the benefits of the metamagic feats of the same name—for example, you cannot use improved dust magic to empower an empowered fireball. You can, however, maximize a spell already modified by a different metamagic feat.<br>Using this ability with a spontaneously cast spell increases the casting time as described on page 88 of the Player's Handbook.<br>You gain an additional use of this ability at 7th level and at 9th level. At 9th level and higher, uses of this ability count as uses of greater dust magic (see below).",
                    'Benefit': "",
                    'Special': '',
                    'Normal': '',
                    'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                    'Effects': {},
                    'limits': [{
                        type: 'class',
                        name: 'Improved Dust Magic',
                        group: 'Improved Dust Magic',
                        desc: "At 5th level, your affinity with the waste increases, and your spells grow even more potent. Three times per day, when you cast an arcane spell in any sort of waste terrain, you can empower, enlarge, extend, silence, or still your spell, as the appropriate metamagic feats. These options have the same general effect as the metamagic feats of the same name, except that they do not use up higher-level spell slots, and even if you prepare spells, you can decide to alter them with this ability as you cast a spell.<br>None of these abilities stack with the benefits of the metamagic feats of the same name—for example, you cannot use improved dust magic to empower an empowered fireball. You can, however, maximize a spell already modified by a different metamagic feat.<br>Using this ability with a spontaneously cast spell increases the casting time as described on page 88 of the Player's Handbook.<br>You gain an additional use of this ability at 7th level and at 9th level. At 9th level and higher, uses of this ability count as uses of greater dust magic (see below).",
                        limited: true,
                        limit: 3,
                        mod: false
                    }],
                    'actions': [],
                    'spells': []
                }]
            },
            6: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: '+1',
                specialAbilities: []
            },
            7: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: '+1',
                specialAbilities: []
            },
            8: {
                BAB: [4],
                Fort: 2,
                Ref: 2,
                Will: 6,
                spells: '+1',
                specialAbilities: []
            },
            9: {
                BAB: [4],
                Fort: 3,
                Ref: 3,
                Will: 6,
                spells: '+1',
                specialAbilities: []
            },
            10: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: '+1',
                specialAbilities: []
            }
        },
        'skills': [
            'Climb', 'Concentration', 'Craft', 'Diplomacy', 'Handle Animal', 'Heal', 'Intimidate', 'Jump', 'Knowledge -Nature', 'Listen', 'Profession', 'Ride', 'Search', 'Sense Motive', 'Spellcraft', 'Spot', 'Survival'
        ]
    },
    'Abjurant Champion': {
        'name': 'Abjurant Champion',
        'type': 'Prestige',
        'class': 'Duskblade',
        'spellMod': null,
        'proficiencies': [],
        'levels': {
            1: {
                BAB: [1],
                Fort: 0,
                Ref: 0,
                Will: 2,
                spells: '+1',
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Abjurant Armor',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "Anytime you cast an abjuration spell that grants you an armor bonus or shield bonus to AC, you can increase the value of the bonus by your abjurant champion class level. Abjuant champions rely on mage armor, shield, and similar spells instead of actual armor.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Extended Abjuration',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "You depend on your abjuration spells to protect you in combat. Double the duration of abjuration spells you cast, as if you had applied the Extend Spell feat to them (but without any change in level or casting time).",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [2],
                Fort: 0,
                Ref: 0,
                Will: 3,
                spells: '+1',
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Swift Abjuration - Level 0 and 1',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "Beginning at 2nd level, you can cast abjuration spells as a swift action, as if you had applied the Quicken Spell feat to them (but without any change in level). The maximum level of spell you can quicken in this way is equal to 1/2 your class level rounded up. ",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            3: {
                BAB: [3],
                Fort: 1,
                Ref: 1,
                Will: 3,
                spells: '+1',
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Swift Abjuration - Level 0, 1 and 2',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "Beginning at 2nd level, you can cast abjuration spells as a swift action, as if you had applied the Quicken Spell feat to them (but without any change in level). The maximum level of spell you can quicken in this way is equal to 1/2 your class level rounded up. ",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            4: {
                BAB: [4],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: '+1',
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Arcane Boost',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "Beginning at 4th level, you gain the ability to burn arcane energy to empower your martial abilities. As a swift action, you can spend one of your uncast spells or spell slots to grant yourself one of the following insight bonuses for one round. <br><br><ul><li>Bonus on attack rolls equal to the spell's level.</li><li>Bonus on weapon damage equal to twice the spell's level.</li><li>Bonus to AC equal to the spell's level.</li><li>Bonus on saving throws equal to the spell's level.</li><li>Risistance to acid, cold, electricity, fire, and sonic equal to 5x the spell's level.</li></ul>",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            5: {
                BAB: [5],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: '+1',
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Swift Abjuration - Level 0, 1, 2, and 3',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "Beginning at 2nd level, you can cast abjuration spells as a swift action, as if you had applied the Quicken Spell feat to them (but without any change in level). The maximum level of spell you can quicken in this way is equal to 1/2 your class level rounded up. ",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Martial Arcanist',
                        'Subtype': '',
                        'Page': 'CM 50',
                        'Description': "At 5th level, you master the art of combining your militant and mystical training. From this point on, your caster level in a chosen arcane spellcasting class is equal to your base attack bonus (unless it would otherwise be higher). For example, a 7th-level fighter/1st-level wizard/5th-level abjurant champion has a base attack bonus of +12 (and thus a caster level of 12th). You can apply this benefit to only one arcane class to which you have added spellcasting levels by your advancement as an abjurant champion.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            }
        },
        'skills': [
            'Climb', 'Concentration', 'Craft', 'Handle Animal', 'Intimidate', 'Jump', 'Knowledge - Arcana', 'Ride', 'Spellcraft', 'Swim'
        ]
    },
    'Wizard - Imbued Staff, Conjurer': {
        'name': 'Wizard',
        'spellMod': 'INT',
        'type': 'Basic',
        'proficiencies': [
            'Club', 'Dagger', 'Heavy Crossbow', 'Light Crossbow', 'Quarterstaff'
        ],
        'spellsType': 'Prepared',
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 3,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Scribe Scroll',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a wizard gains Scribe Scroll as a bonus feat.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'feats': ['Scribe Scroll']
                    },
                    {
                        'id': 0,
                        'Name': 'Bonus Languages',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A wizard may substitute Draconic for one of the bonus languages available to the character because of her race.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Wizard Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A wizard casts arcane spells which are drawn from the sorcerer/wizard spell list. A wizard must choose and prepare her spells ahead of time (see below).<br><br>To learn, prepare, or cast a spell, the wizard must have an Intelligence score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a wizard's spell is 10 + the spell level + the wizard's Intelligence modifier.<br><br>Like other spellcasters, a wizard can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: The Wizard. In addition, she receives bonus spells per day if she has a high Intelligence score.<br><br>Unlike a bard or sorcerer, a wizard may know any number of spells. She must choose and prepare her spells ahead of time by getting a good night's sleep and spending 1 hour studying her spellbook. While studying, the wizard decides which spells to prepare.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Spellbooks',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A wizard must study her spellbook each day to prepare her spells. She cannot prepare any spell not recorded in her spellbook, except for read magic, which all wizards can prepare from memory.<br><br>A wizard begins play with a spellbook containing all 0-level wizard spells (except those from her prohibited school or schools, if any; see School Specialization, below) plus three 1st-level spells of your choice. For each point of Intelligence bonus the wizard has, the spellbook holds one additional 1st-level spell of your choice. At each new wizard level, she gains two new spells of any spell level or levels that she can cast (based on her new wizard level) for her spellbook. At any time, a wizard can also add spells found in other wizards' spellbooks to her own.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'School Specialization - Conjuration',
                        'Subtype': 'Conjuration',
                        'Page': '',
                        'Description': "A school is one of eight groupings of spells, each defined by a common theme. If desired, a wizard may specialize in one school of magic (see below). Specialization allows a wizard to cast extra spells from her chosen school, but she then never learns to cast spells from some other schools. <br><br>A specialist wizard can prepare one additional spell of her specialty school per spell level each day. She also gains a +2 bonus on Spellcraft checks to learn the spells of her chosen school.<br><br>The wizard must choose whether to specialize and, if she does so, choose her specialty at 1st level. At this time, she must also give up two other schools of magic (unless she chooses to specialize in divination; see below), which become her prohibited schools. A wizard can never give up divination to fulfill this requirement. Spells of the prohibited school or schools are not available to the wizard, and she can't even cast such spells from scrolls or fire them from wands. She may not change either her specialization or her prohibited schools later.<br><br>The eight schools of arcane magic are abjuration, conjuration, divination, enchantment, evocation, illusion, necromancy, and transmutation. Spells that do not fall into any of these schools are called universal spells.<br><br><i>Conjuration:</i> Spells that bring creatures or materials to the caster. A conjuration specialist is called a conjurer.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Imbued Staff',
                        'Subtype': '',
                        'Page': '',
                        'Description': "As an optional rule, any sorcerer or wizard may opt to forego a normal familiar in order to imbue her traveling staff with that portion of her power. To do this, she selects a quarterstaff-length of wood that resonates with her mystical signature and personality. It cannot have been previously enchanted (although it may subsequently be) and must be of masterwork quality. It must be prepared using materials costing at least 500 gp, usually with a gem to serve as a mounted finial. The imbuing ritual takes 24 hours and ties a portion of the spellcaster's power into the staff, a separate piece of her soul that grows in power as she does. Upon its imbuing, the staff becomes magically linked to its creator and is treated as a magic item.<br><br><b>Hit Points:</b> The staff has 10 Hit Points and Hardness 5, both of which increase as the wizard or sorcerer gains levels, according to the Imbued Staff Advancement table.<br><br><b>Saving Throws:</b> The staff saves as its creator, even when unattended.<br><br>If an imbued staff is broken, its creator must attempt a DC 15 Fortitude saving throw or lose 500 experience points per wizard or sorcerer level. Success reduces the loss by half. However, a caster's experience point total can never be reduced below 0 as a result of the loss of her staff. A broken imbued staff cannot be replaced for a year and a day - the loss is too great.<br>If the character who imbued the staff dies, the staff loses all magical properties. Should the character return from the grave, it regains its imbued powers when it is first touched by the imbuing character.<table class='featDescTable' border='0' cellpadding='1' cellspacing='0'><tbody><tr><th style='width: 100px'>Master<br>Class Level</th><th style='width: 70px'>Hardness</th><th style='width: 70px'>Hit Points</th><th style='width: 200px'>Special</th></tr><tr><td>1st–2nd</td><td>5</td><td>15</td><td>Cantrips, deliver touch spells</td></tr><tr><td>3rd–4th</td><td>5</td><td>15</td><td>Enhanced weapon +1</td></tr><tr><td>5th–6th</td><td>5</td><td>15</td><td>Remote viewing</td></tr><tr><td>7th–8th</td><td>10</td><td>20</td><td>—</td></tr><tr><td>9th–10th</td><td>10</td><td>20</td><td>Vital Transfer</td></tr><tr><td>11th–12th</td><td>10</td><td>20</td><td>Enhanced weapon +2</td></tr><tr><td>13th–14th</td><td>15</td><td>25</td><td>Perfect location</td></tr><tr><td>15th–16th</td><td>15</td><td>25</td><td>Mighty weapon</td></tr><tr><td>17th–18th</td><td>15</td><td>25</td><td>Return</td></tr><tr><td>19th–20th</td><td>20</td><td>30</td><td>Enhanced weapon +3</td></tr></tbody></table>",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Cantrips',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Three times per day, as a standard action, the wielder of the staff can make it shed a flickering light as per the spell. Once activated, this light remains until the wielder dismisses it (a free action). In addition, the staff can hold a single cantrip available to the wielder, decided upon when it is first imbued. Once per day, as a standard action, the master can cast this cantrip from the staff. The caster level for these effects is equal to that of the master. The save DC for any cantrip cast by the staff is 10.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'spellLike',
                                name: 'Light',
                                desc: 'Three times per day, as a standard action, the wielder of the staff can make it shed a flickering light as per the spell. Once activated, this light remains until the wielder dismisses it (a free action). In addition, the staff can hold a single cantrip available to the wielder, decided upon when it is first imbued. Once per day, as a standard action, the master can cast this cantrip from the staff. The caster level for these effects is equal to that of the master. The save DC for any cantrip cast by the staff is 10.',
                                limited: true,
                                limit: 3,
                                mod: false
                            },
                            {
                                type: 'spellLike',
                                name: 'Message',
                                desc: 'Three times per day, as a standard action, the wielder of the staff can make it shed a flickering light as per the spell. Once activated, this light remains until the wielder dismisses it (a free action). In addition, the staff can hold a single cantrip available to the wielder, decided upon when it is first imbued. Once per day, as a standard action, the master can cast this cantrip from the staff. The caster level for these effects is equal to that of the master. The save DC for any cantrip cast by the staff is 10.',
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': [{
                            type: 'spellLike',
                            spells: ['Light', 'Message'],
                            base: 3,
                            mod: 'CHA'
                        }]
                    },
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Deliver Touch Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The master may deliver touch spells with the staff. When using the staff in this way, the wielder may attempt to deal the staffs damage by hitting the target's standard AC (as opposed to the target's touch AC). A successful critical hit with the staff does not double the spell's affect when delivered in this way.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            3: {
                BAB: [1],
                Fort: 1,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Enhanced Weapon + 1',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff gains the listed enhancement bonus to attack and damage when wielded by its master. This bonus applies to both ends of the staff. In the hands of any other it is merely an ordinary masterwork staff.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            4: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 4,
                    1: 3,
                    2: 2,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 4,
                    1: 3,
                    2: 2,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Lvl 5',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, she can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums.<br><br>These bonus feats are in addition to the feat that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing these feats.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }, {
                        'id': 0,
                        'Name': 'Remote Viewing',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff's master may concentrate and view the staff's surroundings as though looking through the finial. This effect is identical to that of clairvoyance except that it lasts for as long as the owner concentrates and has an infinite range so long as the staff is on the same plane. While in effect, the staff's finial glows faintly, illuminating the area around the staff like a candle.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            6: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 4,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            7: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {

                    0: 4,
                    1: 4,
                    2: 3,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            8: {
                BAB: [4],
                Fort: 2,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 4,
                    1: 4,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            9: {
                BAB: [4],
                Fort: 3,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 2,
                    5: 1,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Vital Transfer',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff's master may opt to forego her natural healing for the evening and mend her staff through mystical means. Each night's rest thus spent returns a number of hit points to the staff equal to the master's character level, up to the staff's maximum hit points. The Heal skill does not increase this amount.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            10: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Lvl 10',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, she can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums.<br><br>These bonus feats are in addition to the feat that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing these feats.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            11: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Enhanced Weapon + 2',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff gains the listed enhancement bonus to attack and damage when wielded by its master. This bonus applies to both ends of the staff. In the hands of any other it is merely an ordinary masterwork staff.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            12: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 3,
                    6: 2,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 2,
                    7: 1,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Perfect Location',
                        'Subtype': '',
                        'Page': '',
                        'Description': "By concentrating for a full round, the wizard knows the direction and distance to her staff, so long as it is on the same plane.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            14: {
                BAB: [7, 2],
                Fort: 4,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 3,
                    7: 2,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 2,
                    8: 1,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Lvl 15',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, she can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums.<br><br>These bonus feats are in addition to the feat that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing these feats.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }, {
                        'id': 0,
                        'Name': 'Imbued Staff - Mighty Weapon',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff gains the bane, defending, flaming, frost, merciful, shock, or thundering special weapon ability. This ability applies to both ends of the staff. Once chosen, the bonus cannot be changed and does not function in the hands of anyone other than the staff's master.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            16: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 3,
                    8: 2,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 2,
                    9: 1
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Return',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The master can summon the staff to her hand as a standard action, so long as it is on the same plane. When summoned in this way, the staff simply appears in its master's hand. Any effect targeting the staff or the master that prevents teleportation also blocks this ability.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            18: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 3,
                    9: 2
                },
                specialAbilities: []
            },
            19: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: 4,
                    8: 3,
                    9: 3
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Enhanced Weapon + 3',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff gains the listed enhancement bonus to attack and damage when wielded by its master. This bonus applies to both ends of the staff. In the hands of any other it is merely an ordinary masterwork staff.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            20: {
                BAB: [10, 5],
                Fort: 6,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: 4,
                    8: 4,
                    9: 4
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Lvl 20',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, she can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums.<br><br>These bonus feats are in addition to the feat that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing these feats.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
        },
        'skills': [
            'Bluff', 'Concentration', 'Craft', 'Decipher Script', 'Knowledge - Arcana', 'Profession', 'Spellcraft'
        ]
    },
    'Wizard': {
        'name': 'Wizard',
        'spellMod': 'INT',
        'type': 'Basic',
        'proficiencies': [
            'Club', 'Dagger', 'Heavy Crossbow', 'Light Crossbow', 'Quarterstaff'
        ],
        'spellsType': 'Prepared',
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 3,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Familiar',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A wizard can obtain a familiar. Doing so takes 24 hours and uses up magical materials that cost 100 gp. A familiar is a magical beast that resembles a small animal and is unusually tough and intelligent. The creature serves as a companion and servant.<br><br>The wizard chooses the kind of familiar he gets. As the wizard advances in level, his familiar also increases in power.<br><br>If the familiar dies or is dismissed by the wizard, the wizard must attempt a DC 15 Fortitude saving throw. Failure means he loses 200 experience points per wizard level; success reduces the loss to one-half that amount. However, a wizard's experience point total can never go below 0 as the result of a familiar's demise or dismissal. A slain or dismissed familiar cannot be replaced for a year and day. A slain familiar can be raised from the dead just as a character can be, and it does not lose a level or a Constitution point when this happy event occurs.<br><br>A character with more than one class that grants a familiar may have only one familiar at a time.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Scribe Scroll',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a wizard gains Scribe Scroll as a bonus feat.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Bonus Languages',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A wizard may substitute Draconic for one of the bonus languages available to the character because of her race.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Wizard Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A wizard casts arcane spells which are drawn from the sorcerer/wizard spell list. A wizard must choose and prepare her spells ahead of time (see below).<br><br>To learn, prepare, or cast a spell, the wizard must have an Intelligence score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a wizard's spell is 10 + the spell level + the wizard's Intelligence modifier.<br><br>Like other spellcasters, a wizard can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: The Wizard. In addition, she receives bonus spells per day if she has a high Intelligence score.<br><br>Unlike a bard or sorcerer, a wizard may know any number of spells. She must choose and prepare her spells ahead of time by getting a good night's sleep and spending 1 hour studying her spellbook. While studying, the wizard decides which spells to prepare.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Spellbooks',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A wizard must study her spellbook each day to prepare her spells. She cannot prepare any spell not recorded in her spellbook, except for read magic, which all wizards can prepare from memory.<br><br>A wizard begins play with a spellbook containing all 0-level wizard spells (except those from her prohibited school or schools, if any; see School Specialization, below) plus three 1st-level spells of your choice. For each point of Intelligence bonus the wizard has, the spellbook holds one additional 1st-level spell of your choice. At each new wizard level, she gains two new spells of any spell level or levels that she can cast (based on her new wizard level) for her spellbook. At any time, a wizard can also add spells found in other wizards' spellbooks to her own.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            3: {
                BAB: [1],
                Fort: 1,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            4: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 4,
                    1: 3,
                    2: 2,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 4,
                    1: 3,
                    2: 2,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Lvl 5',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, she can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums.<br><br>These bonus feats are in addition to the feat that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing these feats.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            6: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 4,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            7: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {

                    0: 4,
                    1: 4,
                    2: 3,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            8: {
                BAB: [4],
                Fort: 2,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 4,
                    1: 4,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            9: {
                BAB: [4],
                Fort: 3,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 2,
                    5: 1,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            10: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Lvl 10',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, she can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums.<br><br>These bonus feats are in addition to the feat that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing these feats.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            11: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            12: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 3,
                    6: 2,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 2,
                    7: 1,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            14: {
                BAB: [7, 2],
                Fort: 4,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 3,
                    7: 2,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 2,
                    8: 1,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Lvl 15',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, she can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums.<br><br>These bonus feats are in addition to the feat that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing these feats.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            16: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 3,
                    8: 2,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 2,
                    9: 1
                },
                specialAbilities: []
            },
            18: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 3,
                    9: 2
                },
                specialAbilities: []
            },
            19: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: 4,
                    8: 3,
                    9: 3
                },
                specialAbilities: []
            },
            20: {
                BAB: [10, 5],
                Fort: 6,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: 4,
                    8: 4,
                    9: 4
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Lvl 20',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th, 10th, 15th, and 20th level, a wizard gains a bonus feat. At each such opportunity, she can choose a metamagic feat, an item creation feat, or Spell Mastery. The wizard must still meet all prerequisites for a bonus feat, including caster level minimums.<br><br>These bonus feats are in addition to the feat that a character of any class gets from advancing levels. The wizard is not limited to the categories of item creation feats, metamagic feats, or Spell Mastery when choosing these feats.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
        },
        'skills': [
            'Bluff', 'Concentration', 'Craft', 'Decipher Script', 'Knowledge - Arcana', 'Profession', 'Spellcraft'
        ]
    },
    'Beguiler': {
        'name': 'Beguiler',
        'spellMod': 'INT',
        'type': 'Basic',
        'proficiencies': [
            'Simple', 'Hand Crossbow', 'Rapier', 'Shortbow', 'Short Sword', 'Light'
        ],
        'spellsType': 'Known',
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 5,
                    1: 3,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Armored Mage',
                        'Subtype': '',
                        'Page': 'PHB2-20',
                        'Description': "Normally, armor of any type interferes with an arcane spellcaster's gestures, which can cause spells to fail if those spells have a somatic component. A duskblade's limited focus and specialized training, however, allows you to avoid arcane spell failure so long as you stick to light armor and light shields.This training does not extend to medium or heavy armors, nor to heavy shields. This ability does not apply to spells gained from a different spellcasting class.<br><br>At 4th level, you learn to use medium armor with no chance of arcane spell failure.<br><br>At 7th level, you learn to use a heavy shield with no chance of arcane spell failure.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Trapfinding',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Beguilers can use the Search skill to locate traps when the task has a Difficulty Class higher than 20. Finding a nonmagical trap has a DC of at least 20, or higher if it is well hidden. Finding a magic trap has a DC of 25 + the level of the spell used to create it. Beguilers can use the Disable Device skill to disarm magic traps.A magic trap typically has a DC of 25 + the level of the spell used to create it.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 6,
                    1: 4,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Cloaked Casting (+1 DC)',
                        'Subtype': '',
                        'Page': '',
                        'Description': " Starting at 2nd level, a beguiler's spells become more effective when cast against an unwary foe. You gain a +1 bonus to the spell's save DC when you cast a spell that targets any foe who would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not).<br><br>At 8th level, you gain a +2 bonus on rolls made to overcome the spell resistance of any affected target.<br><br>At 14th level, the bonus to your spell's save DC increases to +2.<br><br>At 20th level, you become able to automatically overcome the spell resistance of any affected target.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Surprise Casting',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 2nd level, when you successfully use the Bluff skill to feint in combat, your target is denied its Dexterity bonus (if it has one) to AC for the next melee attack you make against it or the next spell you cast. You must remain in melee with the target, and the attack must be made or the spell cast on or before your next turn. The target is not considered flat-footed and therefore can make attacks of opportunity against you if you do not cast defensively.<br><br>At 6th level, you gain the ability to feint in combat as a move action instead of a standard action. If you have the Improved Feint feat, you can now feint in combat as a swift action.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            3: {
                BAB: [1],
                Fort: 1,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 6,
                    1: 5,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Advanced Learning (Lvl 3)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, you can add a new spell to your list, representing the result of personal study and experimentation. The spell must be a sorcerer/wizard spell of the enchantment or illusion school and of a level no higher than that of the highest-level spell you already know. Once a new spell is selected, it is forever added to your spell list and can be cast just like any other spell on your list.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            4: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 6,
                    1: 6,
                    2: 4,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 6,
                    1: 6,
                    2: 4,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Silent Spell',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, you gain Silent Spell as a bonus feat.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'feats': ['Silent Spell']
                    },
                ]
            },
            6: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 6,
                    1: 6,
                    2: 5,
                    3: 3,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            7: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 4,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Advanced Learning (Lvl 7)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, you can add a new spell to your list, representing the result of personal study and experimentation. The spell must be a sorcerer/wizard spell of the enchantment or illusion school and of a level no higher than that of the highest-level spell you already know. Once a new spell is selected, it is forever added to your spell list and can be cast just like any other spell on your list.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            8: {
                BAB: [4],
                Fort: 2,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 5,
                    4: 3,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Cloaked Casting (+2 to overcome SR)',
                        'Subtype': '',
                        'Page': '',
                        'Description': " Starting at 2nd level, a beguiler's spells become more effective when cast against an unwary foe. You gain a +1 bonus to the spell's save DC when you cast a spell that targets any foe who would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not).<br><br>At 8th level, you gain a +2 bonus on rolls made to overcome the spell resistance of any affected target.<br><br>At 14th level, the bonus to your spell's save DC increases to +2.<br><br>At 20th level, you become able to automatically overcome the spell resistance of any affected target.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            9: {
                BAB: [4],
                Fort: 3,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 4,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            10: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 5,
                    5: 3,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Still Spell',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 10th level, you gain Still Spell as a bonus feat.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'feats': ['Still Spell']
                    },
                ]
            },
            11: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 4,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Advanced Learning (Lvl 11)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, you can add a new spell to your list, representing the result of personal study and experimentation. The spell must be a sorcerer/wizard spell of the enchantment or illusion school and of a level no higher than that of the highest-level spell you already know. Once a new spell is selected, it is forever added to your spell list and can be cast just like any other spell on your list.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            12: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 5,
                    6: 3,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 4,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            14: {
                BAB: [7, 2],
                Fort: 4,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 5,
                    7: 3,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Cloaked Casting (+2 DC)',
                        'Subtype': '',
                        'Page': '',
                        'Description': " Starting at 2nd level, a beguiler's spells become more effective when cast against an unwary foe. You gain a +1 bonus to the spell's save DC when you cast a spell that targets any foe who would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not).<br><br>At 8th level, you gain a +2 bonus on rolls made to overcome the spell resistance of any affected target.<br><br>At 14th level, the bonus to your spell's save DC increases to +2.<br><br>At 20th level, you become able to automatically overcome the spell resistance of any affected target.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            15: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 4,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Advanced Learning (Lvl 15)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, you can add a new spell to your list, representing the result of personal study and experimentation. The spell must be a sorcerer/wizard spell of the enchantment or illusion school and of a level no higher than that of the highest-level spell you already know. Once a new spell is selected, it is forever added to your spell list and can be cast just like any other spell on your list.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            16: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 5,
                    8: 3,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 4,
                    9: null
                },
                specialAbilities: []
            },
            18: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 5,
                    9: 3
                },
                specialAbilities: []
            },
            19: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 6,
                    9: 4
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Advanced Learning (Lvl 19)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, you can add a new spell to your list, representing the result of personal study and experimentation. The spell must be a sorcerer/wizard spell of the enchantment or illusion school and of a level no higher than that of the highest-level spell you already know. Once a new spell is selected, it is forever added to your spell list and can be cast just like any other spell on your list.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            20: {
                BAB: [10, 5],
                Fort: 6,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 6,
                    9: 5
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Cloaked Casting (overcomes SR)',
                        'Subtype': '',
                        'Page': '',
                        'Description': " Starting at 2nd level, a beguiler's spells become more effective when cast against an unwary foe. You gain a +1 bonus to the spell's save DC when you cast a spell that targets any foe who would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not).<br><br>At 8th level, you gain a +2 bonus on rolls made to overcome the spell resistance of any affected target.<br><br>At 14th level, the bonus to your spell's save DC increases to +2.<br><br>At 20th level, you become able to automatically overcome the spell resistance of any affected target.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
        },
        'skills': [
            'Appraise', 'Balance', 'Bluff', 'Climb', 'Concentration', 'Decipher Script', 'Diplomacy', 'Disable Device', 'Disguise', 'Escape Artist', 'Forgery', 'Gather Information', 'Hide', 'Jump', 'Knowledge (arcana)', 'Knowledge (local)', 'Listen', 'Move Silently', 'Open Lock', 'Profession', 'Search', 'Sense Motive', 'Sleight of Hand', 'Speak Language', 'Spellcraft', 'Spot', 'Swim', 'Tumble', 'Use Magic Device'
        ]
    },
    'Druid': {
        'name': 'Druid',
        'spellMod': 'WIS',
        'type': 'Basic',
        'proficiencies': [
            'Club', 'Dagger', 'Dart', 'Quarterstaff', 'Scimitar', 'Sickle', 'Shortspear', 'Sling', 'Spear', 'Light', 'Medium', 'Light Shield', 'Heavy Shield'
        ],
        'spellsType': 'Prepared',
        'preparedAll': true,
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 2,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 3,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Animal Companion',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A druid may begin play with an animal companion selected from the following list: badger, camel, dire rat, dog, riding dog, eagle, hawk, horse (light or heavy), owl, pony, snake (Small or Medium viper), or wolf. If the campaign takes place wholly or partly in an aquatic environment, the following creatures are also available: crocodile, porpoise, Medium shark, and squid. This animal is a loyal companion that accompanies the druid on her adventures as appropriate for its kind.<br><br>A 1st-level druid's companion is completely typical for its kind except as noted below. As a druid advances in level, the animal's power increases as shown on the table. If a druid releases her companion from service, she may gain a new one by performing a ceremony requiring 24 uninterrupted hours of prayer. This ceremony can also replace an animal companion that has perished.<br><br>A druid of 4th level or higher may select from alternative lists of animals (see below). Should she select an animal companion from one of these alternative lists, the creature gains abilities as if the character's druid level were lower than it actually is. Subtract the value indicated in the appropriate list header from the character's druid level and compare the result with the druid level entry on the table to determine the animal companion's powers. (If this adjustment would reduce the druid's effective level to 0 or lower, she can't have that animal as a companion.)",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Nature Sense',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A druid gains a +2 bonus on Knowledge (nature) and Survival checks.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'Knowledge - Nature': 2, 'Survival': 2 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Wild Empathy',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A druid can improve the attitude of an animal. This ability functions just like a Diplomacy check made to improve the attitude of a person. The druid rolls 1d20 and adds her druid level and her Charisma modifier to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.<br><br>To use wild empathy, the druid and the animal must be able to study each other, which means that they must be within 30 feet of one another under normal conditions. Generally, influencing an animal in this way takes 1 minute but, as with influencing people, it might take more or less time.<br><br>A druid can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but she takes a -4 penalty on the check.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [1],
                Fort: 3,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Woodland Stride',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 2nd level, a druid may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at her normal speed and without taking damage or suffering any other impairment. However, thorns, briars, and overgrown areas that have been magically manipulated to impede motion still affect her.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            3: {
                BAB: [2],
                Fort: 3,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trackless Step',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 3rd level, a druid leaves no trail in natural surroundings and cannot be tracked. She may choose to leave a trail if so desired.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            4: {
                BAB: [3],
                Fort: 4,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 5,
                    1: 3,
                    2: 2,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': "Resist Nature's Lure",
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 4th level, a druid gains a +4 bonus on saving throws against the spell-like abilities of fey.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'saveMods': [
                            { 'bonus': 4, 'text': 'vs. Fey spll-lke abils.' }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            5: {
                BAB: [3],
                Fort: 4,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 5,
                    1: 3,
                    2: 2,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape 1/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Shape 1/day',
                                group: 'Wild Shape',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': [],
                        'wildShape': [
                            {
                                'Type': 'Animal',
                                'Size': 'S'
                            },
                            {
                                'Type': 'Animal',
                                'Size': 'M'
                            },
                        ]
                    },
                ]
            },
            6: {
                BAB: [4],
                Fort: 5,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 5,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape 2/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Shape 2/day',
                                group: 'Wild Shape',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            7: {
                BAB: [5],
                Fort: 5,
                Ref: 2,
                Will: 5,
                spells: {

                    0: 6,
                    1: 4,
                    2: 3,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape 3/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Shape 3/day',
                                group: 'Wild Shape',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            8: {
                BAB: [6, 1],
                Fort: 6,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 6,
                    1: 4,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape (Large)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'wildShape': [
                            {
                                'Type': 'Animal',
                                'Size': 'L'
                            },
                        ]
                    },
                ]
            },
            9: {
                BAB: [6, 1],
                Fort: 6,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 6,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 2,
                    5: 1,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Venom Immunity',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 9th level, a druid gains immunity to all poisons.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            10: {
                BAB: [7, 2],
                Fort: 7,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape 4/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Shape 4/day',
                                group: 'Wild Shape',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            11: {
                BAB: [8, 3],
                Fort: 7,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 5,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape (Tiny)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'wildShape': [
                            {
                                'Type': 'Animal',
                                'Size': 'T'
                            },
                        ]
                    },
                ]
            },
            12: {
                BAB: [9, 4],
                Fort: 8,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 5,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 3,
                    6: 2,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape (Plant)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'wildShape': [
                            {
                                'Type': 'Plant',
                                'Size': 'T'
                            },
                            {
                                'Type': 'Plant',
                                'Size': 'S'
                            },
                            {
                                'Type': 'Plant',
                                'Size': 'M'
                            },
                            {
                                'Type': 'Plant',
                                'Size': 'L'
                            },
                        ]
                    },
                ]
            },
            13: {
                BAB: [9, 4],
                Fort: 8,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 2,
                    7: 1,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'A Thousand Faces',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a druid gains the ability to change her appearance at will, as if using the disguise self spell, but only while in her normal form. This affects the druid's body but not her possessions. It is not an illusory effect, but a minor physical alteration of the druid's appearance, within the limits described for the spell.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'spellLike',
                                name: 'Disguise Self',
                                desc: "At 13th level, a druid gains the ability to change her appearance at will, as if using the disguise self spell, but only while in her normal form. This affects the druid's body but not her possessions.It is not an illusory effect, but a minor physical alteration of the druid's appearance, within the limits described for the spell.",
                                limited: false,
                                limit: null,
                                mod: null
                            }
                        ],
                        'actions': [],
                        'spells': [
                            {
                                type: 'spellLike',
                                spells: ['Disguise Self'],
                                base: 0,
                                mod: null
                            }
                        ]
                    },
                ]
            },
            14: {
                BAB: [10, 5],
                Fort: 9,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 3,
                    7: 2,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape 5/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Shape 5/day',
                                group: 'Wild Shape',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            15: {
                BAB: [11, 6, 1],
                Fort: 9,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 2,
                    8: 1,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Timeless Body',
                        'Subtype': '',
                        'Page': '',
                        'Description': "After attaining 15th level, a druid no longer takes ability score penalties for aging and cannot be magically aged. Any penalties she may have already incurred, however, remain in place. Bonuses still accrue, and the druid still dies of old age when her time is up.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Wild Shape (Huge)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'wildShape': [
                            {
                                'Type': 'Animal',
                                'Size': 'H'
                            },
                            {
                                'Type': 'Plant',
                                'Size': 'H'
                            }
                        ]
                    },
                ]
            },
            16: {
                BAB: [12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 3,
                    8: 2,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape Elemental 1/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Elemental Shape 1/day',
                                group: 'Wild Shape (Elemental)',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': [],
                        'wildShape': [
                            {
                                'Type': 'Elemental',
                                'Size': 'S'
                            },
                            {
                                'Type': 'Elemental',
                                'Size': 'M'
                            },
                            {
                                'Type': 'Elemental',
                                'Size': 'L'
                            },
                        ]
                    },
                ]
            },
            17: {
                BAB: [12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 2,
                    9: 1
                },
                specialAbilities: []
            },
            18: {
                BAB: [13, 8, 3],
                Fort: 11,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 3,
                    9: 2
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape 6/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Shape 6/day',
                                group: 'Wild Shape',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Wild Shape Elemental 2/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Elemental Shape 2/day',
                                group: 'Wild Shape (Elemental)',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            19: {
                BAB: [14, 9, 4],
                Fort: 11,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 5,
                    6: 4,
                    7: 4,
                    8: 3,
                    9: 3
                },
                specialAbilities: []
            },
            20: {
                BAB: [15, 10, 5],
                Fort: 12,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 5,
                    6: 4,
                    7: 4,
                    8: 4,
                    9: 4
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wild Shape Elemental 3/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wild Elemental Shape 3/day',
                                group: 'Wild Shape (Elemental)',
                                desc: "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Wild Shape (Huge Elemental)',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a druid gains the ability to turn herself into any Small or Medium animal and back again once per day. Her options for new forms include all creatures with the animal type. This ability functions like the alternate form special ability, except as noted here. The effect lasts for 1 hour per druid level, or until she changes back. Changing form (to animal or back) is a standard action and doesn't provoke an attack of opportunity. Each time you use wild shape, you regain hit points as if you had rested for a night.<br><br>Any gear worn or carried by the druid melds into the new form and becomes nonfunctional. When the druid reverts to her true form, any objects previously melded into the new form reappear in the same location on her body that they previously occupied and are once again functional. Any new items worn in the assumed form fall off and land at the druid's feet.<br><br>The form chosen must be that of an animal the druid is familiar with.<br><br>A druid loses her ability to speak while in animal form because she is limited to the sounds that a normal, untrained animal can make, but she can communicate normally with other animals of the same general grouping as her new form. (The normal sound a wild parrot makes is a squawk, so changing to this form does not permit speech.)<br><br>A druid can use this ability more times per day at 6th, 7th, 10th, 14th, and 18th level, as noted on Table: The Druid. In addition, she gains the ability to take the shape of a Large animal at 8th level, a Tiny animal at 11th level, and a Huge animal at 15th level. The new form's Hit Dice can't exceed the character's druid level.<br><br>At 12th level, a druid becomes able to use wild shape to change into a plant creature with the same size restrictions as for animal forms. (A druid can't use this ability to take the form of a plant that isn't a creature.)<br><br>At 16th level, a druid becomes able to use wild shape to change into a Small, Medium, or Large elemental (air, earth, fire, or water) once per day. These elemental forms are in addition to her normal wild shape usage. In addition to the normal effects of wild shape, the druid gains all the elemental's extraordinary, supernatural, and spell-like abilities. She also gains the elemental's feats for as long as she maintains the wild shape, but she retains her own creature type.<br><br>At 18th level, a druid becomes able to assume elemental form twice per day, and at 20th level she can do so three times per day. At 20th level, a druid may use this wild shape ability to change into a Huge elemental.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': '',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'wildShape': [
                            {
                                'Type': 'Elemental',
                                'Size': 'H'
                            }
                        ]
                    },
                ]
            },
        },
        'skills': [
            'Concentration', 'Craft', 'Diplomacy', 'Handle Animal', 'Heal', 'Knowledge - Nature', 'Listen', 'Profession', 'Ride', 'Spellcraft', 'Spot', 'Survival', 'Swim'
        ]
    },
    'Cloistered Cleric': {
        'name': 'Cloistered Cleric',
        'spellMod': 'WIS',
        'type': 'Basic',
        'proficiencies': [
            'Simple', 'Light', 'Medium', 'Heavy', 'Light Shield', 'Heavy Shield'
        ],
        'spellsType': 'Prepared',
        'preparedAll': true,
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 2,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 3,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Turn or rebuke undead',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Any cleric, regardless of alignment, has the power to affect undead creatures by channeling the power of his faith through his holy (or unholy) symbol (see Turn or Rebuke Undead).<br><br>A good cleric (or a neutral cleric who worships a good deity) can turn or destroy undead creatures. An evil cleric (or a neutral cleric who worships an evil deity) instead rebukes or commands such creatures. A neutral cleric of a neutral deity must choose whether his turning ability functions as that of a good cleric or an evil cleric. Once this choice is made, it cannot be reversed. This decision also determines whether the cleric can cast spontaneous cure or inflict spells.<br><br>A cleric may attempt to turn undead a number of times per day equal to 3 + his Charisma modifier. A cleric with 5 or more ranks in Knowledge (religion) gets a +2 bonus on turning checks against undead.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Turn or rebuke undead',
                                desc: 'Any cleric, regardless of alignment, has the power to affect undead creatures by channeling the power of his faith through his holy (or unholy) symbol (see Turn or Rebuke Undead).',
                                limited: true,
                                limit: 3,
                                mod: 'CHA'
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': `A cleric casts divine spells, which are drawn from the cleric spell list. However, his alignment may restrict him from casting certain spells opposed to his moral or ethical beliefs; see Chaotic, Evil, Good, and Lawful Spells, below. A cleric must choose and prepare his spells in advance (see below).
                                    <br><br>To prepare or cast a spell, a cleric must have a Wisdom score equal to at least 10 + the spell level.The Difficulty Class for a saving throw against a cleric's spell is 10 + the spell level + the cleric's Wisdom modifier.
                                    <br><br>Like other spellcasters, a cleric can cast only a certain number of spells of each spell level per day.His base daily spell allotment is given on Table: The Cleric.In addition, he receives bonus spells per day if he has a high Wisdom score.A cleric also gets one domain spell of each spell level he can cast, starting at 1st level.When a cleric prepares a spell in a domain spell slot, it must come from one of his two domains(see Deities, Domains, and Domain Spells, below).
                                    <br><br>Clerics meditate or pray for their spells.Each cleric must choose a time at which he must spend 1 hour each day in quiet contemplation or supplication to regain his daily allotment of spells.Time spent resting has no effect on whether a cleric can prepare spells.A cleric may prepare and cast any spell on the cleric spell list, provided that he can cast spells of that level, but he must choose which spells to prepare during his daily meditation.
                                    <br><br><b>Deity, Domains, and Domain Spells:</b>A cleric's deity influences his alignment, what magic he can perform, his values, and how others see him. A cleric chooses two domains from among those belonging to his deity. A cleric can select an alignment domain (Chaos, Evil, Good, or Law) only if his alignment matches that domain.
                                    <br><br>If a cleric is not devoted to a particular deity, he still selects two domains to represent his spiritual inclinations and abilities. The restriction on alignment domains still applies.
                                    <br><br>Each domain gives the cleric access to a domain spell at each spell level he can cast, from 1st on up, as well as a granted power. The cleric gets the granted powers of both the domains selected. With access to two domain spells at a given spell level, a cleric prepares one or the other each day in his domain spell slot. If a domain spell is not on the cleric spell list, a cleric can prepare it only in his domain spell slot.
                                    <br><br><b>Spontaneous Casting:</b> A good cleric (or a neutral cleric of a good deity) can channel stored spell energy into healing spells that the cleric did not prepare ahead of time. The cleric can "lose" any prepared spell that is not a domain spell in order to cast any cure spell of the same spell level or lower (a cure spell is any spell with "cure" in its name).Roleplaying Games
                                    <br><br>An evil cleric (or a neutral cleric of an evil deity), can't convert prepared spells to cure spells but can convert them to inflict spells (an inflict spell is one with "inflict" in its name).
                                    <br><br>A cleric who is neither good nor evil and whose deity is neither good nor evil can convert spells to either cure spells or inflict spells (player's choice). Once the player makes this choice, it cannot be reversed. This choice also determines whether the cleric turns or commands undead (see below).
                                    <br><br><b>Chaotic, Evil, Good, and Lawful Spells:<b/> A cleric can't cast spells of an alignment opposed to his own or his deity's (if he has one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [1],
                Fort: 3,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            3: {
                BAB: [1],
                Fort: 3,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            4: {
                BAB: [2],
                Fort: 4,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 5,
                    1: 3,
                    2: 2,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [2],
                Fort: 4,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 5,
                    1: 3,
                    2: 2,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            6: {
                BAB: [3],
                Fort: 5,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 5,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            7: {
                BAB: [3],
                Fort: 5,
                Ref: 2,
                Will: 5,
                spells: {

                    0: 6,
                    1: 4,
                    2: 3,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            8: {
                BAB: [4],
                Fort: 6,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 6,
                    1: 4,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            9: {
                BAB: [4],
                Fort: 6,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 6,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 2,
                    5: 1,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            10: {
                BAB: [5],
                Fort: 7,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            11: {
                BAB: [5],
                Fort: 7,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 5,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            12: {
                BAB: [6, 1],
                Fort: 8,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 5,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 3,
                    6: 2,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [6, 1],
                Fort: 8,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 2,
                    7: 1,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            14: {
                BAB: [7, 2],
                Fort: 9,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 3,
                    7: 2,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [7, 2],
                Fort: 9,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 2,
                    8: 1,
                    9: null
                },
                specialAbilities: []
            },
            16: {
                BAB: [8, 3],
                Fort: 10,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 3,
                    8: 2,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [8, 3],
                Fort: 10,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 2,
                    9: 1
                },
                specialAbilities: []
            },
            18: {
                BAB: [9, 4],
                Fort: 11,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 3,
                    9: 2
                },
                specialAbilities: []
            },
            19: {
                BAB: [9, 4],
                Fort: 11,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 5,
                    6: 4,
                    7: 4,
                    8: 3,
                    9: 3
                },
                specialAbilities: []
            },
            20: {
                BAB: [10, 5],
                Fort: 12,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 5,
                    6: 4,
                    7: 4,
                    8: 4,
                    9: 4
                },
                specialAbilities: []
            },
        },
        'skills': [
            'Concentration', 'Craft', 'Decipher Script', 'Diplomacy', 'Heal', 'Knowledge', 'Knowledge- Arcana', 'Knowledge - Religion', 'Knowledge - The Planes', 'Profession', 'Spellcraft'
        ]
    },
    'Cleric': {
        'name': 'Cleric',
        'spellMod': 'WIS',
        'type': 'Basic',
        'proficiencies': [
            'Simple', 'Light', 'Medium', 'Heavy', 'Light Shield', 'Heavy Shield'
        ],
        'spellsType': 'Prepared',
        'preparedAll': true,
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 2,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 3,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Turn or rebuke undead',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Any cleric, regardless of alignment, has the power to affect undead creatures by channeling the power of his faith through his holy (or unholy) symbol (see Turn or Rebuke Undead).<br><br>A good cleric (or a neutral cleric who worships a good deity) can turn or destroy undead creatures. An evil cleric (or a neutral cleric who worships an evil deity) instead rebukes or commands such creatures. A neutral cleric of a neutral deity must choose whether his turning ability functions as that of a good cleric or an evil cleric. Once this choice is made, it cannot be reversed. This decision also determines whether the cleric can cast spontaneous cure or inflict spells.<br><br>A cleric may attempt to turn undead a number of times per day equal to 3 + his Charisma modifier. A cleric with 5 or more ranks in Knowledge (religion) gets a +2 bonus on turning checks against undead.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Turn or rebuke undead',
                                desc: 'Any cleric, regardless of alignment, has the power to affect undead creatures by channeling the power of his faith through his holy (or unholy) symbol (see Turn or Rebuke Undead).',
                                limited: true,
                                limit: 3,
                                mod: 'CHA'
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': `A cleric casts divine spells, which are drawn from the cleric spell list. However, his alignment may restrict him from casting certain spells opposed to his moral or ethical beliefs; see Chaotic, Evil, Good, and Lawful Spells, below. A cleric must choose and prepare his spells in advance (see below).
                                    <br><br>To prepare or cast a spell, a cleric must have a Wisdom score equal to at least 10 + the spell level.The Difficulty Class for a saving throw against a cleric's spell is 10 + the spell level + the cleric's Wisdom modifier.
                                    <br><br>Like other spellcasters, a cleric can cast only a certain number of spells of each spell level per day.His base daily spell allotment is given on Table: The Cleric.In addition, he receives bonus spells per day if he has a high Wisdom score.A cleric also gets one domain spell of each spell level he can cast, starting at 1st level.When a cleric prepares a spell in a domain spell slot, it must come from one of his two domains(see Deities, Domains, and Domain Spells, below).
                                    <br><br>Clerics meditate or pray for their spells.Each cleric must choose a time at which he must spend 1 hour each day in quiet contemplation or supplication to regain his daily allotment of spells.Time spent resting has no effect on whether a cleric can prepare spells.A cleric may prepare and cast any spell on the cleric spell list, provided that he can cast spells of that level, but he must choose which spells to prepare during his daily meditation.
                                    <br><br><b>Deity, Domains, and Domain Spells:</b>A cleric's deity influences his alignment, what magic he can perform, his values, and how others see him. A cleric chooses two domains from among those belonging to his deity. A cleric can select an alignment domain (Chaos, Evil, Good, or Law) only if his alignment matches that domain.
                                    <br><br>If a cleric is not devoted to a particular deity, he still selects two domains to represent his spiritual inclinations and abilities. The restriction on alignment domains still applies.
                                    <br><br>Each domain gives the cleric access to a domain spell at each spell level he can cast, from 1st on up, as well as a granted power. The cleric gets the granted powers of both the domains selected. With access to two domain spells at a given spell level, a cleric prepares one or the other each day in his domain spell slot. If a domain spell is not on the cleric spell list, a cleric can prepare it only in his domain spell slot.
                                    <br><br><b>Spontaneous Casting:</b> A good cleric (or a neutral cleric of a good deity) can channel stored spell energy into healing spells that the cleric did not prepare ahead of time. The cleric can "lose" any prepared spell that is not a domain spell in order to cast any cure spell of the same spell level or lower (a cure spell is any spell with "cure" in its name).Roleplaying Games
                                    <br><br>An evil cleric (or a neutral cleric of an evil deity), can't convert prepared spells to cure spells but can convert them to inflict spells (an inflict spell is one with "inflict" in its name).
                                    <br><br>A cleric who is neither good nor evil and whose deity is neither good nor evil can convert spells to either cure spells or inflict spells (player's choice). Once the player makes this choice, it cannot be reversed. This choice also determines whether the cleric turns or commands undead (see below).
                                    <br><br><b>Chaotic, Evil, Good, and Lawful Spells:<b/> A cleric can't cast spells of an alignment opposed to his own or his deity's (if he has one). Spells associated with particular alignments are indicated by the chaos, evil, good, and law descriptors in their spell descriptions.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [1],
                Fort: 3,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            3: {
                BAB: [2],
                Fort: 3,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 4,
                    1: 2,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            4: {
                BAB: [3],
                Fort: 4,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 5,
                    1: 3,
                    2: 2,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [3],
                Fort: 4,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 5,
                    1: 3,
                    2: 2,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            6: {
                BAB: [4],
                Fort: 5,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 5,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            7: {
                BAB: [5],
                Fort: 5,
                Ref: 2,
                Will: 5,
                spells: {

                    0: 6,
                    1: 4,
                    2: 3,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            8: {
                BAB: [6, 1],
                Fort: 6,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 6,
                    1: 4,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            9: {
                BAB: [6, 1],
                Fort: 6,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 6,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 2,
                    5: 1,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            10: {
                BAB: [7, 2],
                Fort: 7,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            11: {
                BAB: [8, 3],
                Fort: 7,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 5,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 2,
                    6: 1,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            12: {
                BAB: [9, 4],
                Fort: 8,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 5,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 3,
                    6: 2,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [9, 4],
                Fort: 8,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 2,
                    7: 1,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            14: {
                BAB: [10, 5],
                Fort: 9,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 3,
                    7: 2,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [11, 6, 1],
                Fort: 9,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 2,
                    8: 1,
                    9: null
                },
                specialAbilities: []
            },
            16: {
                BAB: [12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: 3,
                    8: 2,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 2,
                    9: 1
                },
                specialAbilities: []
            },
            18: {
                BAB: [13, 8, 3],
                Fort: 11,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 4,
                    6: 4,
                    7: 3,
                    8: 3,
                    9: 2
                },
                specialAbilities: []
            },
            19: {
                BAB: [14, 9, 4],
                Fort: 11,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 5,
                    6: 4,
                    7: 4,
                    8: 3,
                    9: 3
                },
                specialAbilities: []
            },
            20: {
                BAB: [15, 10, 5],
                Fort: 12,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 6,
                    1: 5,
                    2: 5,
                    3: 5,
                    4: 5,
                    5: 5,
                    6: 4,
                    7: 4,
                    8: 4,
                    9: 4
                },
                specialAbilities: []
            },
        },
        'skills': [
            'Concentration', 'Craft', 'Diplomacy', 'Heal', 'Knowledge - Arcana', 'Knowledge - Religion', 'Knowledge - The Planes', 'Profession', 'Spellcraft'
        ]
    },
    'Bard': {
        'name': 'Bard',
        'spellMod': 'CHA',
        'type': 'Basic',
        'proficiencies': [
            'Simple', 'Light', 'Longsword', 'Rapier', 'Sap', 'Short Sword', 'Shortbow', 'Whip', 'Light Shield', 'Heavy Shield'
        ],
        'spellsType': 'Known',
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 2,
                Will: 2,
                spells: {
                    0: 2,
                    1: null,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Knowledge',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A bard may make a special bardic knowledge check with a bonus equal to his bard level + his Intelligence modifier to see whether he knows some relevant information about local notable people, legendary items, or noteworthy places. (If the bard has 5 or more ranks in Knowledge (history), he gains a +2 bonus on this check.)<br><br>A successful bardic knowledge check will not reveal the powers of a magic item but may give a hint as to its general function. A bard may not take 10 or take 20 on this check; this sort of knowledge is essentially random.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Countersong, Fascinate, Inspire Courage +1',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks
                                    in the Perform skill to qualify; if a bard does not have the required number of ranks in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.<br><br>Starting a bardic music effect is' + ' a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands).
                                    Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the
                                    bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more
                                    ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's
                                    Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new
                                    Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing. The effect lasts for as long as the ally hears the bard sing and for 5
                                    rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to
                                    see the ally.<br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break
                                    the bard's concentration on the fascinate effect, nor does it allow a second saving throw against the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or
                                    poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution
                                    modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and
                                    music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge
                                    bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Bardic Music',
                                desc: `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks
                                    in the Perform skill to qualify; if a bard does not have the required number of ranks in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.<br><br>Starting a bardic music effect is' + ' a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands).
                                    Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the
                                    bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more
                                    ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's
                                    Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new
                                    Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing. The effect lasts for as long as the ally hears the bard sing and for 5
                                    rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to
                                    see the ally.<br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break
                                    the bard's concentration on the fascinate effect, nor does it allow a second saving throw against the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or
                                    poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution
                                    modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and
                                    music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge
                                    bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                                limited: true,
                                limit: 0,
                                mod: false,
                                number: false,
                                level: 'Bard',
                                levelMult: 1
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 3,
                Will: 3,
                spells: {
                    0: 3,
                    1: 0,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            3: {
                BAB: [2],
                Fort: 1,
                Ref: 3,
                Will: 3,
                spells: {
                    0: 3,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Inspire Competence',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; 
                                    if a bard does not have the required number of ranks in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.<br><br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has
                                    a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the
                                    Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to
                                    be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw
                                    fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an
                                    enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter,
                                    this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.<br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates,
                                    up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha
                                    modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire
                                    greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard
                                    of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the
                                    character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number
                                    of creatures that he has already fascinated (see above). Mass suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            4: {
                BAB: [3],
                Fort: 1,
                Ref: 4,
                Will: 4,
                spells: {
                    0: 3,
                    1: 2,
                    2: 0,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [3],
                Fort: 1,
                Ref: 4,
                Will: 4,
                spells: {
                    0: 3,
                    1: 3,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            6: {
                BAB: [4],
                Fort: 2,
                Ref: 5,
                Will: 5,
                spells: {
                    0: 3,
                    1: 3,
                    2: 2,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Suggestion',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; if a bard does not have 
                                    the required number of ranks in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.<br><br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use
                                    bardic music. If he fails, the attempt still counts against his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within
                                    range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to
                                    pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the
                                    bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform
                                    skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i>
                                    A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.<br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level
                                    or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.
                                    <br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s),
                                    the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute
                                    of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC.
                                    The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            7: {
                BAB: [5],
                Fort: 2,
                Ref: 5,
                Will: 5,
                spells: {
                    0: 3,
                    1: 3,
                    2: 2,
                    3: 0,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            8: {
                BAB: [6, 1],
                Fort: 2,
                Ref: 6,
                Will: 6,
                spells: {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Inspire Courage +2',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; if a bard does not have the required number of ranks 
                                    in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.< br > <br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against
                                    his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent
                                    magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability
                                    from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen
                                    and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing.
                                    The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.
                                    <br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against
                                    the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can
                                    target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a
                                    mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the
                                    character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass
                                    suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            9: {
                BAB: [6, 1],
                Fort: 3,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Inspire Greatness',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; if a bard does not have the required number of ranks 
                                    in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.< br > <br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against
                                    his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent
                                    magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability
                                    from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen
                                    and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing.
                                    The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.
                                    <br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against
                                    the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can
                                    target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a
                                    mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the
                                    character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass
                                    suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            10: {
                BAB: [7, 2],
                Fort: 3,
                Ref: 7,
                Will: 7,
                spells: {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 2,
                    4: 0,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            11: {
                BAB: [8, 3],
                Fort: 3,
                Ref: 7,
                Will: 7,
                spells: {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            12: {
                BAB: [9, 4],
                Fort: 4,
                Ref: 8,
                Will: 8,
                spells: {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Song of Freedom',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; if a bard does not have the required number of ranks 
                                    in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.< br > <br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against
                                    his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent
                                    magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability
                                    from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen
                                    and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing.
                                    The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.
                                    <br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against
                                    the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can
                                    target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a
                                    mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the
                                    character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass
                                    suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            13: {
                BAB: [9, 4],
                Fort: 4,
                Ref: 8,
                Will: 8,
                spells: {
                    0: 3,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: 0,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            14: {
                BAB: [10, 5],
                Fort: 4,
                Ref: 9,
                Will: 9,
                spells: {
                    0: 4,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 3,
                    5: 1,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Inspire Courage +3',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; if a bard does not have the required number of ranks 
                                    in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.< br > <br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against
                                    his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent
                                    magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability
                                    from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen
                                    and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing.
                                    The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.
                                    <br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against
                                    the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can
                                    target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a
                                    mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the
                                    character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass
                                    suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            15: {
                BAB: [11, 6, 1],
                Fort: 5,
                Ref: 9,
                Will: 9,
                spells: {
                    0: 4,
                    1: 4,
                    2: 3,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Inspire Heroics',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; if a bard does not have the required number of ranks 
                                    in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.< br > <br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against
                                    his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent
                                    magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability
                                    from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen
                                    and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing.
                                    The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.
                                    <br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against
                                    the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can
                                    target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a
                                    mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the
                                    character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass
                                    suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            16: {
                BAB: [12, 7, 2],
                Fort: 5,
                Ref: 10,
                Will: 10,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 3,
                    4: 3,
                    5: 2,
                    6: 0,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [12, 7, 2],
                Fort: 5,
                Ref: 10,
                Will: 10,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 3,
                    5: 3,
                    6: 1,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            18: {
                BAB: [13, 8, 3],
                Fort: 6,
                Ref: 11,
                Will: 11,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 3,
                    6: 2,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Mass Suggestion',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; if a bard does not have the required number of ranks 
                                    in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.< br > <br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against
                                    his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent
                                    magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability
                                    from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen
                                    and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing.
                                    The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.
                                    <br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against
                                    the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can
                                    target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a
                                    mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the
                                    character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass
                                    suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            19: {
                BAB: [14, 9, 4],
                Fort: 6,
                Ref: 11,
                Will: 11,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 3,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            20: {
                BAB: [15, 10, 5],
                Fort: 6,
                Ref: 12,
                Will: 12,
                spells: {
                    0: 4,
                    1: 4,
                    2: 4,
                    3: 4,
                    4: 4,
                    5: 4,
                    6: 4,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bardic Music - Inspire Courage +4',
                        'Subtype': '',
                        'Page': '',
                        'Description': `Once per day per bard level, a bard can use his song or poetics to produce magical effects on those around him (usually including himself, if desired). While these abilities fall under the category of bardic music and the descriptions discuss singing or playing instruments, they can all be activated by reciting poetry, chanting, singing lyrical songs, singing melodies, whistling, playing an instrument, or playing an instrument in combination with some spoken performance. Each ability requires both a minimum bard level and a minimum number of ranks in the Perform skill to qualify; if a bard does not have the required number of ranks 
                                    in at least one Perform skill, he does not gain the bardic music ability until he acquires the needed ranks.< br > <br>Starting a bardic music effect is a standard action. Some bardic music abilities require concentration, which means the bard must take a standard action each round to maintain the ability. Even while using bardic music that doesn't require concentration, a bard cannot cast spells, activate magic items by spell completion (such as scrolls), or activate magic items by magic word (such as wands). Just as for casting a spell with a verbal component, a deaf bard has a 20% chance to fail when attempting to use bardic music. If he fails, the attempt still counts against
                                    his daily limit.<br><br><i>Countersong (Su):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to counter magical effects that depend on sound (but not spells that simply have verbal components). Each round of the countersong, he makes a Perform check. Any creature within 30 feet of the bard (including the bard himself) that is affected by a sonic or language-dependent magical attack may use the bard's Perform check result in place of its saving throw if, after the saving throw is rolled, the Perform check result proves to be higher. If a creature within range of the countersong is already under the effect of a noninstantaneous sonic or language-dependent
                                    magical attack, it gains another saving throw against the effect each round it hears the countersong, but it must use the bard's Perform check result for the save. Countersong has no effect against effects that don't allow saves. The bard may keep up the countersong for 10 rounds.<br><br><i>Fascinate (Sp):</i> A bard with 3 or more ranks in a Perform skill can use his music or poetics to cause one or more creatures to become fascinated with him. Each creature to be fascinated must be within 90 feet, able to see and hear the bard, and able to pay attention to him. The bard must also be able to see the creature. The distraction of a nearby combat or other dangers prevents the ability
                                    from working. For every three levels a bard attains beyond 1st, he can target one additional creature with a single use of this ability.<br>To use the ability, a bard makes a Perform check. His check result is the DC for each affected creature's Will save against the effect. If a creature's saving throw succeeds, the bard cannot attempt to fascinate that creature again for 24 hours. If its saving throw fails, the creature sits quietly and listens to the song, taking no other actions, for as long as the bard continues to play and concentrate (up to a maximum of 1 round per bard level). While fascinated, a target takes a –4 penalty on skill checks made as reactions, such as Listen
                                    and Spot checks. Any potential threat requires the bard to make another Perform check and allows the creature a new saving throw against a DC equal to the new Perform check result.<br><i>Any obvious threat, such as someone drawing a weapon, casting a spell, or aiming a ranged weapon at the target, automatically breaks the effect. Fascinate is an enchantment (compulsion), mind-affecting ability.<br><br><i>Inspire Courage (Su):</i> A bard with 3 or more ranks in a Perform skill can use song or poetics to inspire courage in his allies (including himselfs), bolstering them against fear and improving their combat abilities. To be affected, an ally must be able to hear the bard sing.
                                    The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. An affected ally receives a +1 morale bonus on saving throws against charm and fear effects and a +1 morale bonus on attack and weapon damage rolls. At 8th level, and every six bard levels thereafter, this bonus increases by 1 (+2 at 8th, +3 at 14th, and +4 at 20th). Inspire courage is a mind-affecting ability.<br><br><i>Inspire Competence (Su):</i> A bard of 3rd level or higher with 6 or more ranks in a Perform skill can use his music or poetics to help an ally succeed at a task. The ally must be within 30 feet and able to see and hear the bard. The bard must also be able to see the ally.
                                    <br><i>The ally gets a +2 competence bonus on skill checks with a particular skill as long as he or she continues to hear the bard's music. Certain uses of this ability are infeasible. The effect lasts as long as the bard concentrates, up to a maximum of 2 minutes. A bard can't inspire competence in himself. Inspire competence is a mind-affecting ability.<br><br><i>Suggestion (Sp):</i> A bard of 6th level or higher with 9 or more ranks in a Perform skill can make a suggestion (as the spell) to a creature that he has already fascinated (see above). Using this ability does not break the bard's concentration on the fascinate effect, nor does it allow a second saving throw against
                                    the fascinate effect.<br><i>Making a suggestion doesn't count against a bard's daily limit on bardic music performances. A Will saving throw (DC 10 + 1/2 bard's level + bard's Cha modifier) negates the effect. This ability affects only a single creature (but see mass suggestion, below). Suggestion is an enchantment (compulsion), mind-affecting, language dependent ability.<br><br><i>Inspire Greatness (Su):</i> A bard of 9th level or higher with 12 or more ranks in a Perform skill can use music or poetics to inspire greatness in himself or a single willing ally within 30 feet, granting him or her extra fighting capability. For every three levels a bard attains beyond 9th, he can
                                    target one additional ally with a single use of this ability (two at 12th level, three at 15th, four at 18th). To inspire greatness, a bard must sing and an ally must hear him sing. The effect lasts for as long as the ally hears the bard sing and for 5 rounds thereafter. A creature inspired with greatness gains 2 bonus Hit Dice (d10s), the commensurate number of temporary hit points (apply the target's Constitution modifier, if any, to these bonus Hit Dice), a +2 competence bonus on attack rolls, and a +1 competence bonus on Fortitude saves. The bonus Hit Dice count as regular Hit Dice for determining the effect of spells that are Hit Dice dependant. Inspire greatness is a
                                    mind-affecting ability.<br><br><i>Song of Freedom (Sp):</i> A bard of 12th level or higher with 15 or more ranks in a Perform skill can use music or poetics to create an effect equivalent to the break enchantment spell (caster level equals the character's bard level). Using this ability requires 1 minute of uninterrupted concentration and music, and it functions on a single target within 30 feet. A bard can't use song of freedom on himself.<br><br><i>Inspire Heroics (Su):</i> A bard of 15th level or higher with 18 or more ranks in a Perform skill can use music or poetics to inspire tremendous heroism in himself or a single willing ally within 30 feet. For every three bard levels the
                                    character attains beyond 15th, he can inspire heroics in one additional creature. To inspire heroics, a bard must sing and an ally must hear the bard sing for a full round. A creature so inspired gains a +4 morale bonus on saving throws and a +4 dodge bonus to AC. The effect lasts for as long as the ally hears the bard sing and for up to 5 rounds thereafter. Inspire heroics is a mind-affecting ability.<br><br><i>Mass Suggestion (Sp):</i> This ability functions like suggestion, above, except that a bard of 18th level or higher with 21 or more ranks in a Perform skill can make the suggestion simultaneously to any number of creatures that he has already fascinated (see above). Mass
                                    suggestion is an enchantment (compulsion), mind-affecting, language-dependent ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
        },
        'skills': [
            'Appraise', 'Balance', 'Bluff', 'Climb', 'Concentration', 'Craft', 'Decipher Script', 'Diplomacy', 'Disguise', 'Escape Artist', 'Gather Information', 'Hide', 'Jump', 'Knowledge', 'Listen', 'Move Silently', 'Perform', 'Profession', 'Search', 'Sense Motive', 'Sleight of Hand', 'Speak Language', 'Spellcraft', 'Swim', 'Tumble', 'Use Magic Device'
        ]
    },
    'Barbarian': {
        'name': 'Barbarian',
        'spellMod': null,
        'type': 'Basic',
        'class': 'Barbarian',
        'spellsType': null,
        'spellCasterMult': null,
        'proficiencies': [
            'Simple', 'Light', 'Medium', 'Light Shield', 'Heavy Shield', 'Martial'
        ],
        'levels': {
            1: {
                BAB: [1],
                Fort: 2,
                Ref: 0,
                Will: 0,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Fast Movement',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A barbarian’s land speed is faster than the norm for his race by +10 feet. This benefit applies only when he is wearing no armor, light armor, or medium armor and not carrying a heavy load. Apply this bonus before modifying the barbarian’s speed because of any load carried or armor worn.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { speed: 10 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Illiteracy',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Barbarians are the only characters who do not automatically know how to read and write. A barbarian may spend 2 skill points to gain the ability to read and write all languages he is able to speak.<br><br>A barbarian who gains a level in any other class automatically gains literacy. Any other character who gains a barbarian level does not lose the literacy he or she already had.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Rage 1/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A barbarian can fly into a rage a certain number of times per day. In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian’s hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.) While raging, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration, nor can he cast spells or activate magic items that require a command word, a spell trigger (such as a wand), or spell completion (such as a scroll) to function. He can use any feat he has except Combat Expertise, item creation feats, and metamagic feats. A fit of rage lasts for a number of rounds equal to 3 + the character’s (newly improved) Constitution modifier. A barbarian may prematurely end his rage. At the end of the rage, the barbarian loses the rage modifiers and restrictions and becomes fatigued (-2 penalty to Strength, -2 penalty to Dexterity, can’t charge or run) for the duration of the current encounter (unless he is a 17th-level barbarian, at which point this limitation no longer applies).<br><br>A barbarian can fly into a rage only once per encounter. At 1st level he can use his rage ability once per day. At 4th level and every four levels thereafter, he can use it one additional time per day (to a maximum of six times per day at 20th level). Entering a rage takes no time itself, but a barbarian can do it only during his action, not in response to someone else’s action.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Rage 1/day',
                                group: 'Rage',
                                desc: " In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian's hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.)",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [2],
                Fort: 3,
                Ref: 0,
                Will: 0,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Uncanny Dodge',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 2nd level, a barbarian retains his Dexterity bonus to AC (if any) even if he is caught flat-footed or struck by an invisible attacker. However, he still loses his Dexterity bonus to AC if immobilized. If a barbarian already has uncanny dodge from a different class, he automatically gains improved uncanny dodge (see below) instead.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            3: {
                BAB: [3],
                Fort: 3,
                Ref: 1,
                Will: 1,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +1',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            4: {
                BAB: [4],
                Fort: 4,
                Ref: 1,
                Will: 1,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Rage 2/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A barbarian can fly into a rage a certain number of times per day. In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian’s hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.) While raging, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration, nor can he cast spells or activate magic items that require a command word, a spell trigger (such as a wand), or spell completion (such as a scroll) to function. He can use any feat he has except Combat Expertise, item creation feats, and metamagic feats. A fit of rage lasts for a number of rounds equal to 3 + the character’s (newly improved) Constitution modifier. A barbarian may prematurely end his rage. At the end of the rage, the barbarian loses the rage modifiers and restrictions and becomes fatigued (-2 penalty to Strength, -2 penalty to Dexterity, can’t charge or run) for the duration of the current encounter (unless he is a 17th-level barbarian, at which point this limitation no longer applies).<br><br>A barbarian can fly into a rage only once per encounter. At 1st level he can use his rage ability once per day. At 4th level and every four levels thereafter, he can use it one additional time per day (to a maximum of six times per day at 20th level). Entering a rage takes no time itself, but a barbarian can do it only during his action, not in response to someone else’s action.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Rage 2/day',
                                group: 'Rage',
                                desc: " In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian's hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.)",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            5: {
                BAB: [5],
                Fort: 4,
                Ref: 1,
                Will: 1,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Improved Uncanny Dodge',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level and higher, a barbarian can no longer be flanked. This defense denies a rogue the ability to sneak attack the barbarian by flanking him, unless the attacker has at least four more rogue levels than the target has barbarian levels. If a character already has uncanny dodge (see above) from a second class, the character automatically gains improved uncanny dodge instead, and the levels from the classes that grant uncanny dodge stack to determine the minimum level a rogue must be to flank the character.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            6: {
                BAB: [6, 1],
                Fort: 5,
                Ref: 2,
                Will: 2,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +2',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            7: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 2,
                Will: 2,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Damage Reduction -1',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 7th level, a barbarian gains Damage Reduction. Subtract 1 from the damage the barbarian takes each time he is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { allDmgRed: 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            8: {
                BAB: [8, 3],
                Fort: 6,
                Ref: 2,
                Will: 2,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Rage 3/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A barbarian can fly into a rage a certain number of times per day. In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian’s hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.) While raging, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration, nor can he cast spells or activate magic items that require a command word, a spell trigger (such as a wand), or spell completion (such as a scroll) to function. He can use any feat he has except Combat Expertise, item creation feats, and metamagic feats. A fit of rage lasts for a number of rounds equal to 3 + the character’s (newly improved) Constitution modifier. A barbarian may prematurely end his rage. At the end of the rage, the barbarian loses the rage modifiers and restrictions and becomes fatigued (-2 penalty to Strength, -2 penalty to Dexterity, can’t charge or run) for the duration of the current encounter (unless he is a 17th-level barbarian, at which point this limitation no longer applies).<br><br>A barbarian can fly into a rage only once per encounter. At 1st level he can use his rage ability once per day. At 4th level and every four levels thereafter, he can use it one additional time per day (to a maximum of six times per day at 20th level). Entering a rage takes no time itself, but a barbarian can do it only during his action, not in response to someone else’s action.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Rage 3/day',
                                group: 'Rage',
                                desc: " In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian's hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.)",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            9: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 3,
                Will: 3,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +3',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            10: {
                BAB: [10, 5],
                Fort: 7,
                Ref: 3,
                Will: 3,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Damage Reduction -2',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 7th level, a barbarian gains Damage Reduction. Subtract 1 from the damage the barbarian takes each time he is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { allDmgRed: 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            11: {
                BAB: [11, 6, 1],
                Fort: 7,
                Ref: 3,
                Will: 3,
                spells: null,
                specialAbilities: []
            },
            12: {
                BAB: [12, 7, 2],
                Fort: 8,
                Ref: 4,
                Will: 4,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +4',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Rage 4/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A barbarian can fly into a rage a certain number of times per day. In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian’s hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.) While raging, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration, nor can he cast spells or activate magic items that require a command word, a spell trigger (such as a wand), or spell completion (such as a scroll) to function. He can use any feat he has except Combat Expertise, item creation feats, and metamagic feats. A fit of rage lasts for a number of rounds equal to 3 + the character’s (newly improved) Constitution modifier. A barbarian may prematurely end his rage. At the end of the rage, the barbarian loses the rage modifiers and restrictions and becomes fatigued (-2 penalty to Strength, -2 penalty to Dexterity, can’t charge or run) for the duration of the current encounter (unless he is a 17th-level barbarian, at which point this limitation no longer applies).<br><br>A barbarian can fly into a rage only once per encounter. At 1st level he can use his rage ability once per day. At 4th level and every four levels thereafter, he can use it one additional time per day (to a maximum of six times per day at 20th level). Entering a rage takes no time itself, but a barbarian can do it only during his action, not in response to someone else’s action.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Rage 4/day',
                                group: 'Rage',
                                desc: " In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian's hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.)",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            13: {
                BAB: [13, 8, 3],
                Fort: 8,
                Ref: 4,
                Will: 4,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Damage Reduction -3',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 7th level, a barbarian gains Damage Reduction. Subtract 1 from the damage the barbarian takes each time he is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { allDmgRed: 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            14: {
                BAB: [14, 9, 4],
                Fort: 9,
                Ref: 4,
                Will: 4,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Indomitable Will',
                        'Subtype': '',
                        'Page': '',
                        'Description': "While in a rage, a barbarian of 14th level or higher gains a +4 bonus on Will saves to resist enchantment spells. This bonus stacks with all other modifiers, including the morale bonus on Will saves he also receives during his rage.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            15: {
                BAB: [15, 10, 5],
                Fort: 9,
                Ref: 5,
                Will: 5,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +5',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            16: {
                BAB: [16, 11, 6, 1],
                Fort: 10,
                Ref: 5,
                Will: 5,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Rage 5/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A barbarian can fly into a rage a certain number of times per day. In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian’s hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.) While raging, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration, nor can he cast spells or activate magic items that require a command word, a spell trigger (such as a wand), or spell completion (such as a scroll) to function. He can use any feat he has except Combat Expertise, item creation feats, and metamagic feats. A fit of rage lasts for a number of rounds equal to 3 + the character’s (newly improved) Constitution modifier. A barbarian may prematurely end his rage. At the end of the rage, the barbarian loses the rage modifiers and restrictions and becomes fatigued (-2 penalty to Strength, -2 penalty to Dexterity, can’t charge or run) for the duration of the current encounter (unless he is a 17th-level barbarian, at which point this limitation no longer applies).<br><br>A barbarian can fly into a rage only once per encounter. At 1st level he can use his rage ability once per day. At 4th level and every four levels thereafter, he can use it one additional time per day (to a maximum of six times per day at 20th level). Entering a rage takes no time itself, but a barbarian can do it only during his action, not in response to someone else’s action.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Rage 5/day',
                                group: 'Rage',
                                desc: " In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian's hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.)",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Damage Reduction -4',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 7th level, a barbarian gains Damage Reduction. Subtract 1 from the damage the barbarian takes each time he is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { allDmgRed: 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            17: {
                BAB: [17, 12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 5,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Tireless Rage',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 17th level and higher, a barbarian no longer becomes fatigued at the end of his rage.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            18: {
                BAB: [18, 13, 8, 3],
                Fort: 11,
                Ref: 6,
                Will: 6,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 3rd level, a barbarian gains a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise by +1 every three barbarian levels thereafter (6th, 9th, 12th, 15th, and 18th level). Trap sense bonuses gained from multiple classes stack.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            19: {
                BAB: [19, 14, 9, 4],
                Fort: 11,
                Ref: 6,
                Will: 6,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Damage Reduction -5',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 7th level, a barbarian gains Damage Reduction. Subtract 1 from the damage the barbarian takes each time he is dealt damage from a weapon or a natural attack. At 10th level, and every three barbarian levels thereafter (13th, 16th, and 19th level), this damage reduction rises by 1 point. Damage reduction can reduce damage to 0 but not below 0",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { allDmgRed: 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            20: {
                BAB: [20, 15, 10, 5],
                Fort: 12,
                Ref: 6,
                Will: 6,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Rage 6/day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A barbarian can fly into a rage a certain number of times per day. In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian’s hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.) While raging, a barbarian cannot use any Charisma-, Dexterity-, or Intelligence-based skills (except for Balance, Escape Artist, Intimidate, and Ride), the Concentration skill, or any abilities that require patience or concentration, nor can he cast spells or activate magic items that require a command word, a spell trigger (such as a wand), or spell completion (such as a scroll) to function. He can use any feat he has except Combat Expertise, item creation feats, and metamagic feats. A fit of rage lasts for a number of rounds equal to 3 + the character’s (newly improved) Constitution modifier. A barbarian may prematurely end his rage. At the end of the rage, the barbarian loses the rage modifiers and restrictions and becomes fatigued (-2 penalty to Strength, -2 penalty to Dexterity, can’t charge or run) for the duration of the current encounter (unless he is a 17th-level barbarian, at which point this limitation no longer applies).<br><br>A barbarian can fly into a rage only once per encounter. At 1st level he can use his rage ability once per day. At 4th level and every four levels thereafter, he can use it one additional time per day (to a maximum of six times per day at 20th level). Entering a rage takes no time itself, but a barbarian can do it only during his action, not in response to someone else’s action.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Rage 6/day',
                                group: 'Rage',
                                desc: " In a rage, a barbarian temporarily gains a +4 bonus to Strength, a +4 bonus to Constitution, and a +2 morale bonus on Will saves, but he takes a -2 penalty to Armor Class. The increase in Constitution increases the barbarian's hit points by 2 points per level, but these hit points go away at the end of the rage when his Constitution score drops back to normal. (These extra hit points are not lost first the way temporary hit points are.)",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Mighty Rage',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 20th level, a barbarian's bonuses to Strength and Constitution during his rage each increase to +8, and his morale bonus on Will saves increases to +4. The penalty to AC remains at –2.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
        },
        'skills': [
            'Climb', 'Craft', 'Handle Animal', 'Itimidate', 'Jump', 'Listen', 'Ride', 'Survival', 'Swim'
        ]
    },
    'Monk': {
        'name': 'Monk',
        'spellMod': null,
        'type': 'Basic',
        'class': 'Monk',
        'spellsType': null,
        'spellCasterMult': null,
        'proficiencies': [
            'Club', 'Heavy Crossbow', 'Light Crossbow', 'Dagger', 'Handaxe', 'Javelin', 'Kama', 'Nunchaku', 'Quarterstaff', 'Sai', 'Shuriken', 'Siangham', 'Sling', 'Unarmed'
        ],
        'levels': {
            1: {
                BAB: [0],
                Fort: 2,
                Ref: 2,
                Will: 2,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'AC Bonus',
                        'Subtype': '',
                        'Page': '',
                        'Description': "When unarmored and unencumbered, the monk adds her Wisdom bonus (if any) to her AC. In addition, a monk gains a +1 bonus to AC at 5th level. This bonus increases by 1 for every five monk levels thereafter (+2 at 10th, +3 at 15th, and +4 at 20th level). These bonuses to AC apply even against touch attacks or when the monk is flat-footed. She loses these bonuses when she is immobilized or helpless, when she wears any armor, when she carries a shield, or when she carries a medium or heavy load.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Flurry of Blows',
                        'Subtype': '',
                        'Page': '',
                        'Description': "When unarmored, a monk may strike with a flurry of blows at the expense of accuracy. When doing so, she may make one extra attack in a round at her highest base attack bonus, but this attack takes a -2 penalty, as does each other attack made that round. The resulting modified base attack bonuses are shown in the Flurry of Blows Attack Bonus column on Table: The Monk. This penalty applies for 1 round, so it also affects attacks of opportunity the monk might make before her next action. When a monk reaches 5th level, the penalty lessens to -1, and at 9th level it disappears. A monk must use a full attack action to strike with a flurry of blows. When using flurry of blows, a monk may attack only with unarmed strikes or with special monk weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham). She may attack with unarmed strikes and special monk weapons interchangeably as desired. When using weapons as part of a flurry of blows, a monk applies her Strength bonus (not Str bonus x 1-1/2 or x 1/2) to her damage rolls for all successful attacks, whether she wields a weapon in one or both hands. The monk can't use any weapon other than a special monk weapon as part of a flurry of blows.<br><br>In the case of the quarterstaff, each end counts as a separate weapon for the purpose of using the flurry of blows ability. Even though the quarterstaff requires two hands to use, a monk may still intersperse unarmed strikes with quarterstaff strikes, assuming that she has enough attacks in her flurry of blows routine to do so. When a monk reaches 11th level, her flurry of blows ability improves. In addition to the standard single extra attack she gets from flurry of blows, she gets a second extra attack at her full base attack bonus.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Unarmed Strike',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a monk gains Improved Unarmed Strike as a bonus feat. A monk's attacks may be with either fist interchangeably or even from elbows, knees, and feet. This means that a monk may even make unarmed strikes with her hands full. There is no such thing as an off-hand attack for a monk striking unarmed. A monk may thus apply her full Strength bonus on damage rolls for all her unarmed strikes.<br><br>Usually a monk's unarmed strikes deal lethal damage, but she can choose to deal nonlethal damage instead with no penalty on her attack roll. She has the same choice to deal lethal or nonlethal damage while grappling.<br><br>A monk's unarmed strike is treated both as a manufactured weapon and a natural weapon for the purpose of spells and effects that enhance or improve either manufactured weapons or natural weapons.<br><br>A monk also deals more damage with her unarmed strikes than a normal person would, as shown on Table: The Monk. The unarmed damage on Table: The Monk is for Medium monks. A Small monk deals less damage than the amount given there with her unarmed attacks, while a Large monk deals more damage; see Table: Small or Large Monk Unarmed Damage",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'feats': ['Improved Unarmed Strike']
                    },
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Improved Grapple or Stunning Fist',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a monk may select either Improved Grapple or Stunning Fist as a bonus feat. At 2nd level, she may select either Combat Reflexes or Deflect Arrows as a bonus feat. At 6th level, she may select either Improved Disarm or Improved Trip as a bonus feat. A monk need not have any of the prerequisites normally required for these feats to select them.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'feats': ['']
                    },
                ]
            },
            2: {
                BAB: [1],
                Fort: 3,
                Ref: 3,
                Will: 3,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Evasion',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 2nd level or higher if a monk makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage.Evasion can be used only if a monk is wearing light armor or no armor.A helpless monk does not gain the benefit of evasion.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            3: {
                BAB: [2],
                Fort: 3,
                Ref: 3,
                Will: 3,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Fast Movement',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, a monk gains an enhancement bonus to her speed, as shown on Table: The Monk.A monk in armor or carrying a medium or heavy load loses this extra speed.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Still Mind',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A monk of 3rd level or higher gains a +2 bonus on saving throws against spells and effects from the school of enchantment.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'saveMods': [
                            { 'bonus': 2, 'text': 'vs. Ench splls & effcts' }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            4: {
                BAB: [3],
                Fort: 4,
                Ref: 4,
                Will: 4,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Ki Strike - Magic',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level, a monk's unarmed attacks are empowered with ki. Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. Ki strike improves with the character's monk level. At 10th level, her unarmed attacks are also treated as lawful weapons for the purpose of dealing damage to creatures with damage reduction. At 16th level, her unarmed attacks are treated as adamantine weapons for the purpose of dealing damage to creatures with damage reduction and bypassing hardness.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Slow Fall - 20',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            5: {
                BAB: [3],
                Fort: 4,
                Ref: 4,
                Will: 4,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Purity of Body',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 5th level, a monk gains immunity to all diseases except for supernatural and magical diseases.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            6: {
                BAB: [4],
                Fort: 5,
                Ref: 5,
                Will: 5,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Bonus Feat - Improved Disarm or Improved Trip',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a monk may select either Improved Grapple or Stunning Fist as a bonus feat. At 2nd level, she may select either Combat Reflexes or Deflect Arrows as a bonus feat. At 6th level, she may select either Improved Disarm or Improved Trip as a bonus feat. A monk need not have any of the prerequisites normally required for these feats to select them.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Slow Fall - 30',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            7: {
                BAB: [5],
                Fort: 5,
                Ref: 5,
                Will: 5,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Wholeness of Body',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 7th level or higher, a monk can heal her own wounds. She can heal a number of hit points of damage equal to twice her current monk level each day, and she can spread this healing out among several uses.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Wholeness of Body',
                                desc: "At 7th level or higher, a monk can heal her own wounds. She can heal a number of hit points of damage equal to twice her current monk level each day, and she can spread this healing out among several uses.",
                                limited: true,
                                limit: 0,
                                mod: false,
                                number: true,
                                level: 'Monk',
                                levelMult: 2
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            8: {
                BAB: [6, 1],
                Fort: 6,
                Ref: 6,
                Will: 6,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Slow Fall - 40',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            9: {
                BAB: [6, 1],
                Fort: 6,
                Ref: 6,
                Will: 6,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Improved Evasion',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 9th level, a monk's evasion ability improves. She still takes no damage on a successful Reflex saving throw against attacks, but henceforth she takes only half damage on a failed save. A helpless monk does not gain the benefit of improved evasion.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            10: {
                BAB: [7, 2],
                Fort: 7,
                Ref: 7,
                Will: 7,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Slow Fall - 50',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Ki Strike - Lawful',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level, a monk's unarmed attacks are empowered with ki. Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. Ki strike improves with the character's monk level. At 10th level, her unarmed attacks are also treated as lawful weapons for the purpose of dealing damage to creatures with damage reduction. At 16th level, her unarmed attacks are treated as adamantine weapons for the purpose of dealing damage to creatures with damage reduction and bypassing hardness.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            11: {
                BAB: [8, 3],
                Fort: 7,
                Ref: 7,
                Will: 7,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Diamond Body',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 11th level, a monk gains immunity to poisons of all kinds.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Greater Flurry of Blows',
                        'Subtype': '',
                        'Page': '',
                        'Description': "When unarmored, a monk may strike with a flurry of blows at the expense of accuracy. When doing so, she may make one extra attack in a round at her highest base attack bonus, but this attack takes a -2 penalty, as does each other attack made that round. The resulting modified base attack bonuses are shown in the Flurry of Blows Attack Bonus column on Table: The Monk. This penalty applies for 1 round, so it also affects attacks of opportunity the monk might make before her next action. When a monk reaches 5th level, the penalty lessens to -1, and at 9th level it disappears. A monk must use a full attack action to strike with a flurry of blows. When using flurry of blows, a monk may attack only with unarmed strikes or with special monk weapons (kama, nunchaku, quarterstaff, sai, shuriken, and siangham). She may attack with unarmed strikes and special monk weapons interchangeably as desired. When using weapons as part of a flurry of blows, a monk applies her Strength bonus (not Str bonus x 1-1/2 or x 1/2) to her damage rolls for all successful attacks, whether she wields a weapon in one or both hands. The monk can't use any weapon other than a special monk weapon as part of a flurry of blows.<br><br>In the case of the quarterstaff, each end counts as a separate weapon for the purpose of using the flurry of blows ability. Even though the quarterstaff requires two hands to use, a monk may still intersperse unarmed strikes with quarterstaff strikes, assuming that she has enough attacks in her flurry of blows routine to do so. When a monk reaches 11th level, her flurry of blows ability improves. In addition to the standard single extra attack she gets from flurry of blows, she gets a second extra attack at her full base attack bonus.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            12: {
                BAB: [9, 4],
                Fort: 8,
                Ref: 8,
                Will: 8,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Slow Fall - 60',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Abundant Step',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 12th level or higher, a monk can slip magically between spaces, as if using the spell dimension door, once per day. Her caster level for this effect is one-half her monk level (rounded down).",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'spellLike',
                                name: 'Abundant Step',
                                desc: 'At 12th level or higher, a monk can slip magically between spaces, as if using the spell dimension door, once per day. Her caster level for this effect is one-half her monk level (rounded down).',
                                limited: true,
                                limit: 1,
                                mod: null
                            }
                        ],
                        'actions': [],
                        'spells': [
                            {
                                type: 'spellLike',
                                spells: ['Dimension Door'],
                                base: 1,
                                mod: null
                            }
                        ]
                    },
                ]
            },
            13: {
                BAB: [9, 4],
                Fort: 8,
                Ref: 8,
                Will: 8,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Diamond Soul',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a monk gains spell resistance equal to her current monk level + 10. In order to affect the monk with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the monk's spell resistance.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'spellResistance': 23 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            14: {
                BAB: [10, 5],
                Fort: 9,
                Ref: 9,
                Will: 9,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Slow Fall - 70',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Diamond Soul - 14',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a monk gains spell resistance equal to her current monk level + 10. In order to affect the monk with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the monk's spell resistance.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'spellResistance': 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            15: {
                BAB: [11, 6, 1],
                Fort: 9,
                Ref: 9,
                Will: 9,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Quivering Palm',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 15th level, a monk can set up vibrations within the body of another creature that can thereafter be fatal if the monk so desires.She can use this quivering palm attack once a week, and she must announce her intent before making her attack roll.Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be affected.Otherwise, if the monk strikes successfully and the target takes damage from the blow, the quivering palm attack succeeds.Thereafter the monk can try to slay the victim at any later time, as long as the attempt is made within a number of days equal to her monk level.To make such an attempt, the monk merely wills the target to die(a free action), and unless the target makes a Fortitude saving throw(DC 10 + 1 / 2 the monk's level + the monk's Wis modifier), it dies.If the saving throw is successful, the target is no longer in danger from that particular quivering palm attack, but it may still be affected by another one at a later time.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Quivering Palm',
                                desc: "Starting at 15th level, a monk can set up vibrations within the body of another creature that can thereafter be fatal if the monk so desires.She can use this quivering palm attack once a week, and she must announce her intent before making her attack roll.Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be affected.Otherwise, if the monk strikes successfully and the target takes damage from the blow, the quivering palm attack succeeds.Thereafter the monk can try to slay the victim at any later time, as long as the attempt is made within a number of days equal to her monk level.To make such an attempt, the monk merely wills the target to die(a free action), and unless the target makes a Fortitude saving throw(DC 10 + 1 / 2 the monk's level + the monk's Wis modifier), it dies.If the saving throw is successful, the target is no longer in danger from that particular quivering palm attack, but it may still be affected by another one at a later time.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Diamond Soul - 15',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a monk gains spell resistance equal to her current monk level + 10. In order to affect the monk with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the monk's spell resistance.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'spellResistance': 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            16: {
                BAB: [12, 7, 2],
                Fort: 10,
                Ref: 10,
                Will: 10,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Slow Fall - 80',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Ki Strike - Adamantine',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level, a monk's unarmed attacks are empowered with ki. Her unarmed attacks are treated as magic weapons for the purpose of dealing damage to creatures with damage reduction. Ki strike improves with the character's monk level. At 10th level, her unarmed attacks are also treated as lawful weapons for the purpose of dealing damage to creatures with damage reduction. At 16th level, her unarmed attacks are treated as adamantine weapons for the purpose of dealing damage to creatures with damage reduction and bypassing hardness.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Diamond Soul - 16',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a monk gains spell resistance equal to her current monk level + 10. In order to affect the monk with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the monk's spell resistance.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'spellResistance': 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            17: {
                BAB: [12, 7, 2],
                Fort: 10,
                Ref: 10,
                Will: 10,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Timeless Body',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Upon attaining 17th level, a monk no longer takes penalties to her ability scores for aging and cannot be magically aged. Any such penalties that she has already taken, however, remain in place. Bonuses still accrue, and the monk still dies of old age when her time is up.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Tongue of the Sun and Moon',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A monk of 17th level or higher can speak with any living creature.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Diamond Soul - 17',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a monk gains spell resistance equal to her current monk level + 10. In order to affect the monk with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the monk's spell resistance.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'spellResistance': 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            18: {
                BAB: [13, 8, 3],
                Fort: 11,
                Ref: 11,
                Will: 11,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Slow Fall - 90',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Diamond Soul - 18',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a monk gains spell resistance equal to her current monk level + 10. In order to affect the monk with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the monk's spell resistance.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'spellResistance': 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            19: {
                BAB: [14, 9, 4],
                Fort: 11,
                Ref: 11,
                Will: 11,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Empty Body',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 19th level, a monk gains the ability to assume an ethereal state for 1 round per monk level per day, as though using the spell etherealness. She may go ethereal on a number of different occasions during any single day, as long as the total number of rounds spent in an ethereal state does not exceed her monk level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'spellLike',
                                name: 'Empty Body',
                                desc: "At 19th level, a monk gains the ability to assume an ethereal state for 1 round per monk level per day, as though using the spell etherealness. She may go ethereal on a number of different occasions during any single day, as long as the total number of rounds spent in an ethereal state does not exceed her monk level.",
                                limited: true,
                                limit: 0,
                                mod: false,
                                number: true,
                                level: 'Monk',
                                levelMult: 1
                            }
                        ],
                        'actions': [],
                        'spells': [{
                            type: 'spellLike',
                            spells: ['Etherealness'],
                            base: 1,
                            mod: null
                        }]
                    },
                    {
                        'id': 0,
                        'Name': 'Diamond Soul - 19',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a monk gains spell resistance equal to her current monk level + 10. In order to affect the monk with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the monk's spell resistance.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'spellResistance': 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            20: {
                BAB: [15, 10, 5],
                Fort: 12,
                Ref: 12,
                Will: 12,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Slow Fall - Any',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level or higher, a monk within arm's reach of a wall can use it to slow her descent. When first using this ability, she takes damage as if the fall were 20 feet shorter than it actually is. The monk's ability to slow her fall (that is, to reduce the effective distance of the fall when next to a wall) improves with her monk level until at 20th level she can use a nearby wall to slow her descent and fall any distance without harm.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Perfect Self',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 20th level, a monk becomes a magical creature. She is forevermore treated as an outsider rather than as a humanoid (or whatever the monk's creature type was) for the purpose of spells and magical effects. Additionally, the monk gains damage reduction 10/magic, which allows her to ignore the first 10 points of damage from any attack made by a nonmagical weapon or by any natural attack made by a creature that doesn't have similar damage reduction. Unlike other outsiders, the monk can still be brought back from the dead as if she were a member of her previous creature type.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { magicDmgRed: -10 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Diamond Soul - 20',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 13th level, a monk gains spell resistance equal to her current monk level + 10. In order to affect the monk with a spell, a spellcaster must get a result on a caster level check (1d20 + caster level) that equals or exceeds the monk's spell resistance.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': { 'spellResistance': 1 },
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
        },
        'skills': [
            'Balance', 'Climb', 'Concentration', 'Craft', 'Diplomacy', 'Escape Artist', 'Hide', 'Jump', 'Knowledge - Arcana', 'Knowledge - Religion', 'Listen', 'Move Silently', 'Perform', 'Profession', 'Sense Motive', 'Spot', 'Swim', 'Tumble'
        ]
    },
    'Rogue': {
        'name': 'Rogue',
        'spellMod': null,
        'type': 'Basic',
        'class': 'Rogue',
        'spellsType': null,
        'spellCasterMult': null,
        'proficiencies': [
            'Simple', 'Hand Crossbow', 'Rapier', 'Sap', 'Shortbow', 'Short Sword'
        ],
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 2,
                Will: 0,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 1d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Trapfinding',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Rogues (and only rogues) can use the Search skill to locate traps when the task has a Difficulty Class higher than 20. Finding a nonmagical trap has a DC of at least 20, or higher if it is well hidden. Finding a magic trap has a DC of 25 + the level of the spell used to create it.<br><br>Rogues (and only rogues) can use the Disable Device skill to disarm magic traps. A magic trap generally has a DC of 25 + the level of the spell used to create it.<br><br>A rogue who beats a trap's DC by 10 or more with a Disable Device check can study a trap, figure out how it works, and bypass it (with her party) without disarming it.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 3,
                Will: 0,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Evasion',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            3: {
                BAB: [2],
                Fort: 1,
                Ref: 3,
                Will: 1,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +1',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 2d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            4: {
                BAB: [3],
                Fort: 1,
                Ref: 4,
                Will: 1,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Uncanny Dodge',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She retains her Dexterity bonus to AC (if any) even if she is caught flat-footed or struck by an invisible attacker. However, she still loses her Dexterity bonus to AC if immobilized.<br><br>If a rogue already has uncanny dodge from a different class she automatically gains improved uncanny dodge (see below) instead.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            5: {
                BAB: [3],
                Fort: 1,
                Ref: 4,
                Will: 1,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 3d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            6: {
                BAB: [4],
                Fort: 2,
                Ref: 5,
                Will: 2,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +2',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            7: {
                BAB: [5],
                Fort: 2,
                Ref: 5,
                Will: 2,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 4d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            8: {
                BAB: [6, 1],
                Fort: 2,
                Ref: 6,
                Will: 2,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Improved Uncanny Dodge',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A rogue of 8th level or higher can no longer be flanked. This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target does.<br><br>If a character already has uncanny dodge (see above) from a second class, the character automatically gains improved uncanny dodge instead, and the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            9: {
                BAB: [6, 1],
                Fort: 3,
                Ref: 6,
                Will: 3,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 5d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Trap Sense +3',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            10: {
                BAB: [7, 2],
                Fort: 3,
                Ref: 7,
                Will: 3,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Special Ability - Lvl 10',
                        'Subtype': '',
                        'Page': '',
                        'Description': `On attaining 10th level, and at every three levels thereafter (13th, 16th, and 19th), a rogue gains a special ability of her choice from among the following options.<br><br><i>Crippling Strike (Ex):</i> A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 
                                    points of Strength damage. Ability points lost to damage return on their own at the rate of 1 point per day for each damaged ability.<br><br><i>Defensive Roll (Ex):</i> The rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the
                                    rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll - if she is denied her Dexterity bonus to AC, she can't use this ability. Since this effect would
                                    not normally allow a character to make a Reflex save for half damage, the rogue's evasion ability does not apply to the defensive roll.<br><br><i>Improved Evasion (Ex):</i> This ability works like evasion, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks henceforth she henceforth takes only half damage on a failed save. A helpless rogue does not gain the benefit of
                                    improved evasion.<br><br><i>Opportunist (Ex):</i> Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as the rogue's attack of opportunity for that round. Even a rogue with the Combat Reflexes feat can't use the opportunist ability more than once per round.<br><br><i>Skill Mastery:</i> The rogue becomes
                                    so certain in the use of certain skills that she can use them reliably even under adverse conditions. Upon gaining this ability, she selects a number of skills equal to 3 + her Intelligence modifier. When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so. A rogue may gain this special ability multiple times, selecting additional
                                    skills for it to apply to each time.<br><br><i>Slippery Mind (Ex):</i> This ability represents the rogue's ability to wriggle free from magical effects that would otherwise control or compel her. If a rogue with slippery mind is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving
                                    throw.<br><br><i>Feat:</i> A rogue may gain a bonus feat in place of a special ability.`,
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            11: {
                BAB: [8, 3],
                Fort: 3,
                Ref: 7,
                Will: 3,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 6d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            12: {
                BAB: [9, 4],
                Fort: 4,
                Ref: 8,
                Will: 4,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +4',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            13: {
                BAB: [9, 4],
                Fort: 4,
                Ref: 8,
                Will: 4,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 7d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Special Ability - Lvl 13',
                        'Subtype': '',
                        'Page': '',
                        'Description': "On attaining 10th level, and at every three levels thereafter (13th, 16th, and 19th), a rogue gains a special ability of her choice from among the following options.<br><br><i>Crippling Strike (Ex):</i> A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of Strength damage. Ability points lost to damage return on their own at the rate of 1 point per day for each damaged ability.<br><br><i>Defensive Roll (Ex):</i> The rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll - if she is denied her Dexterity bonus to AC, she can't use this ability. Since this effect would not normally allow a character to make a Reflex save for half damage, the rogue's evasion ability does not apply to the defensive roll.<br><br><i>Improved Evasion (Ex):</i> This ability works like evasion, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks henceforth she henceforth takes only half damage on a failed save. A helpless rogue does not gain the benefit of improved evasion.<br><br><i>Opportunist (Ex):</i> Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as the rogue's attack of opportunity for that round. Even a rogue with the Combat Reflexes feat can't use the opportunist ability more than once per round.<br><br><i>Skill Mastery:</i> The rogue becomes so certain in the use of certain skills that she can use them reliably even under adverse conditions. Upon gaining this ability, she selects a number of skills equal to 3 + her Intelligence modifier. When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so. A rogue may gain this special ability multiple times, selecting additional skills for it to apply to each time.<br><br><i>Slippery Mind (Ex):</i> This ability represents the rogue's ability to wriggle free from magical effects that would otherwise control or compel her. If a rogue with slippery mind is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving throw.<br><br><i>Feat:</i> A rogue may gain a bonus feat in place of a special ability.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            14: {
                BAB: [10, 5],
                Fort: 4,
                Ref: 9,
                Will: 4,
                spells: null,
                specialAbilities: []
            },
            15: {
                BAB: [11, 6, 1],
                Fort: 5,
                Ref: 9,
                Will: 5,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 8d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Trap Sense +5',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            16: {
                BAB: [12, 7, 2],
                Fort: 5,
                Ref: 10,
                Will: 5,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Special Ability - Lvl 16',
                        'Subtype': '',
                        'Page': '',
                        'Description': "On attaining 10th level, and at every three levels thereafter (13th, 16th, and 19th), a rogue gains a special ability of her choice from among the following options.<br><br><i>Crippling Strike (Ex):</i> A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of Strength damage. Ability points lost to damage return on their own at the rate of 1 point per day for each damaged ability.<br><br><i>Defensive Roll (Ex):</i> The rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll - if she is denied her Dexterity bonus to AC, she can't use this ability. Since this effect would not normally allow a character to make a Reflex save for half damage, the rogue's evasion ability does not apply to the defensive roll.<br><br><i>Improved Evasion (Ex):</i> This ability works like evasion, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks henceforth she henceforth takes only half damage on a failed save. A helpless rogue does not gain the benefit of improved evasion.<br><br><i>Opportunist (Ex):</i> Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as the rogue's attack of opportunity for that round. Even a rogue with the Combat Reflexes feat can't use the opportunist ability more than once per round.<br><br><i>Skill Mastery:</i> The rogue becomes so certain in the use of certain skills that she can use them reliably even under adverse conditions. Upon gaining this ability, she selects a number of skills equal to 3 + her Intelligence modifier. When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so. A rogue may gain this special ability multiple times, selecting additional skills for it to apply to each time.<br><br><i>Slippery Mind (Ex):</i> This ability represents the rogue's ability to wriggle free from magical effects that would otherwise control or compel her. If a rogue with slippery mind is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving throw.<br><br><i>Feat:</i> A rogue may gain a bonus feat in place of a special ability.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            17: {
                BAB: [12, 7, 2],
                Fort: 5,
                Ref: 10,
                Will: 5,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 9d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            18: {
                BAB: [13, 8, 3],
                Fort: 6,
                Ref: 11,
                Will: 6,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Trap Sense +6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            19: {
                BAB: [14, 9, 4],
                Fort: 6,
                Ref: 11,
                Will: 6,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Sneak Attack - 10d6',
                        'Subtype': '',
                        'Page': '',
                        'Description': "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage any time her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and it increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied.<br><br>Ranged attacks can count as sneak attacks only if the target is within 30 feet.<br><br>With a sap (blackjack) or an unarmed strike, a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual -4 penalty.<br><br>A rogue can sneak attack only living creatures with discernible anatomies - undead, constructs, oozes, plants, and incorporeal creatures lack vital areas to attack. Any creature that is immune to critical hits is not vulnerable to sneak attacks. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment or striking the limbs of a creature whose vitals are beyond reach.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Special Ability - Lvl 19',
                        'Subtype': '',
                        'Page': '',
                        'Description': "On attaining 10th level, and at every three levels thereafter (13th, 16th, and 19th), a rogue gains a special ability of her choice from among the following options.<br><br><i>Crippling Strike (Ex):</i> A rogue with this ability can sneak attack opponents with such precision that her blows weaken and hamper them. An opponent damaged by one of her sneak attacks also takes 2 points of Strength damage. Ability points lost to damage return on their own at the rate of 1 point per day for each damaged ability.<br><br><i>Defensive Roll (Ex):</i> The rogue can roll with a potentially lethal blow to take less damage from it than she otherwise would. Once per day, when she would be reduced to 0 or fewer hit points by damage in combat (from a weapon or other blow, not a spell or special ability), the rogue can attempt to roll with the damage. To use this ability, the rogue must attempt a Reflex saving throw (DC = damage dealt). If the save succeeds, she takes only half damage from the blow; if it fails, she takes full damage. She must be aware of the attack and able to react to it in order to execute her defensive roll - if she is denied her Dexterity bonus to AC, she can't use this ability. Since this effect would not normally allow a character to make a Reflex save for half damage, the rogue's evasion ability does not apply to the defensive roll.<br><br><i>Improved Evasion (Ex):</i> This ability works like evasion, except that while the rogue still takes no damage on a successful Reflex saving throw against attacks henceforth she henceforth takes only half damage on a failed save. A helpless rogue does not gain the benefit of improved evasion.<br><br><i>Opportunist (Ex):</i> Once per round, the rogue can make an attack of opportunity against an opponent who has just been struck for damage in melee by another character. This attack counts as the rogue's attack of opportunity for that round. Even a rogue with the Combat Reflexes feat can't use the opportunist ability more than once per round.<br><br><i>Skill Mastery:</i> The rogue becomes so certain in the use of certain skills that she can use them reliably even under adverse conditions. Upon gaining this ability, she selects a number of skills equal to 3 + her Intelligence modifier. When making a skill check with one of these skills, she may take 10 even if stress and distractions would normally prevent her from doing so. A rogue may gain this special ability multiple times, selecting additional skills for it to apply to each time.<br><br><i>Slippery Mind (Ex):</i> This ability represents the rogue's ability to wriggle free from magical effects that would otherwise control or compel her. If a rogue with slippery mind is affected by an enchantment spell or effect and fails her saving throw, she can attempt it again 1 round later at the same DC. She gets only this one extra chance to succeed on her saving throw.<br><br><i>Feat:</i> A rogue may gain a bonus feat in place of a special ability.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            20: {
                BAB: [15, 10, 5],
                Fort: 6,
                Ref: 12,
                Will: 6,
                spells: null,
                specialAbilities: []
            },
        },
        'skills': [
            'Appraise', 'Balance', 'Bluff', 'Climb', 'Craft', 'Decipher Script', 'Diplomacy', 'Disable Device', 'Disguise', 'Escape Artist', 'Forgery', 'Gather Information', 'Hide', 'Intimidate', 'Jump', 'Knowledge', 'Listen', 'Move Silently', 'Open Lock', 'Perform', 'Profession', 'Search', 'Sense Motive', 'Sleight of Hand', 'Spot', 'Swim', 'Tumble', 'Use Magic Device', 'Use Rope'
        ]
    },
    'Ranger': {
        'name': 'Ranger',
        'spellMod': 'WIS',
        'type': 'Basic',
        'class': 'Ranger',
        'spellsType': 'Prepared',
        'spellCasterMult': .5,
        'proficiencies': [
            'Simple', 'Light', 'Martial', 'Light Shield', 'Heavy Shield'
        ],
        'levels': {
            1: {
                BAB: [1],
                Fort: 2,
                Ref: 0,
                Will: 0,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Favored Enemy',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a ranger may select a type of creature from among those given on Table: Ranger Favored Enemies. The ranger gains a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against creatures of this type. Likewise, he gets a +2 bonus on weapon damage rolls against such creatures.<br><br>At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy from those given on the table. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by 2.<br><br>If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table. If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Track',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A ranger gains Track as a bonus feat.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'feats': ['Track']
                    },
                    {
                        'id': 0,
                        'Name': 'Wild Empathy',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A ranger can improve the attitude of an animal. This ability functions just like a Diplomacy check to improve the attitude of a person. The ranger rolls 1d20 and adds his ranger level and his Charisma bonus to determine the wild empathy check result. The typical domestic animal has a starting attitude of indifferent, while wild animals are usually unfriendly.<br><br>To use wild empathy, the ranger and the animal must be able to study each other, which means that they must be within 30 feet of one another under normal visibility conditions. Generally, influencing an animal in this way takes 1 minute, but, as with influencing people, it might take more or less time.<br><br>The ranger can also use this ability to influence a magical beast with an Intelligence score of 1 or 2, but he takes a -4 penalty on the check..",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            2: {
                BAB: [2],
                Fort: 3,
                Ref: 0,
                Will: 0,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Combat Style',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 2nd level, a ranger must select one of two combat styles to pursue: archery or two-weapon combat. This choice affects the character's class features but does not restrict his selection of feats or special abilities in any way.<br><br>If the ranger selects archery, he is treated as having the Rapid Shot feat, even if he does not have the normal prerequisites for that feat.<br><br>If the ranger selects two-weapon combat, he is treated as having the Two-Weapon Fighting feat, even if he does not have the normal prerequisites for that feat.<br><br>The benefits of the ranger's chosen style apply only when he wears light or no armor. He loses all benefits of his combat style when wearing medium or heavy armor.<br><br>Endurance: A ranger gains Endurance as a bonus feat at 3rd level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            3: {
                BAB: [3],
                Fort: 3,
                Ref: 1,
                Will: 1,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Endurance',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A ranger gains Endurance as a bonus feat at 3rd level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': [],
                        'feats': ['Endurance']
                    },
                ]
            },
            4: {
                BAB: [4],
                Fort: 4,
                Ref: 1,
                Will: 1,
                spells: {
                    0: null,
                    1: 0,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Animal Companion',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 4th level, a ranger gains an animal companion selected from the following list: badger, camel, dire rat, dog, riding dog, eagle, hawk, horse (light or heavy), owl, pony, snake (Small or Medium viper), or wolf. If the campaign takes place wholly or partly in an aquatic environment, the following creatures may be added to the ranger's list of options: crocodile, porpoise, Medium shark, and squid. This animal is a loyal companion that accompanies the ranger on his adventures as appropriate for its kind.<br><br>This ability functions like the druid ability of the same name, except that the ranger's effective druid level is one-half his ranger level. A ranger may select from the alternative lists of animal companions just as a druid can, though again his effective druid level is half his ranger level. Like a druid, a ranger cannot select an alternative animal if the choice would reduce his effective druid level below 1st.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Ranger Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Beginning at 4th level, a ranger gains the ability to cast a small number of divine spells, which are drawn from the ranger spell list. A ranger must choose and prepare his spells in advance (see below).<br><br>To prepare or cast a spell, a ranger must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a ranger's spell is 10 + the spell level + the ranger's Wisdom modifier.<br><br>Like other spellcasters, a ranger can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: The Ranger. In addition, he receives bonus spells per day if he has a high Wisdom score. When Table: The Ranger indicates that the ranger gets 0 spells per day of a given spell level, he gains only the bonus spells he would be entitled to based on his Wisdom score for that spell level. The ranger does not have access to any domain spells or granted powers, as a cleric does.<br><br>A ranger prepares and casts spells the way a cleric does, though he cannot lose a prepared spell to cast a cure spell in its place. A ranger may prepare and cast any spell on the ranger spell list, provided that he can cast spells of that level, but he must choose which spells to prepare during his daily meditation.<br><br>Through 3rd level, a ranger has no caster level. At 4th level and higher, his caster level is one-half his ranger level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            5: {
                BAB: [5],
                Fort: 4,
                Ref: 1,
                Will: 1,
                spells: {
                    0: null,
                    1: 0,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': '2nd Favored Enemy',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a ranger may select a type of creature from among those given on Table: Ranger Favored Enemies. The ranger gains a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against creatures of this type. Likewise, he gets a +2 bonus on weapon damage rolls against such creatures.<br><br>At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy from those given on the table. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by 2.<br><br>If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table. If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            6: {
                BAB: [6, 1],
                Fort: 5,
                Ref: 2,
                Will: 2,
                spells: {
                    0: null,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Improved Combat Style',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 6th level, a ranger's aptitude in his chosen combat style (archery or two-weapon combat) improves. If he selected archery at 2nd level, he is treated as having the Manyshot feat, even if he does not have the normal prerequisites for that feat.<br><br>If the ranger selected two-weapon combat at 2nd level, he is treated as having the Improved Two-Weapon Fighting feat, even if he does not have the normal prerequisites for that feat.<br><br>As before, the benefits of the ranger's chosen style apply only when he wears light or no armor. He loses all benefits of his combat style when wearing medium or heavy armor.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            7: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 2,
                Will: 2,
                spells: {
                    0: null,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Woodland Stride',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Starting at 7th level, a ranger may move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrain) at his normal speed and without taking damage or suffering any other impairment. However, thorns, briars, and overgrown areas that are enchanted or magically manipulated to impede motion still affect him.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            8: {
                BAB: [8, 3],
                Fort: 6,
                Ref: 2,
                Will: 2,
                spells: {
                    0: null,
                    1: 1,
                    2: 0,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Swift Tracker',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Beginning at 8th level, a ranger can move at his normal speed while following tracks without taking the normal -5 penalty. He takes only a -10 penalty (instead of the normal -20) when moving at up to twice normal speed while tracking.Beginning at 8th level, a ranger can move at his normal speed while following tracks without taking the normal -5 penalty. He takes only a -10 penalty (instead of the normal -20) when moving at up to twice normal speed while tracking.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            9: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 3,
                Will: 3,
                spells: {
                    0: null,
                    1: 1,
                    2: 0,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Evasion',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 9th level, a ranger can avoid even magical and unusual attacks with great agility. If he makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, he instead takes no damage. Evasion can be used only if the ranger is wearing light armor or no armor. A helpless ranger does not gain the benefit of evasion.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            10: {
                BAB: [10, 5],
                Fort: 7,
                Ref: 3,
                Will: 3,
                spells: {
                    0: null,
                    1: 1,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': '3rd Favored Enemy',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a ranger may select a type of creature from among those given on Table: Ranger Favored Enemies. The ranger gains a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against creatures of this type. Likewise, he gets a +2 bonus on weapon damage rolls against such creatures.<br><br>At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy from those given on the table. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by 2.<br><br>If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table. If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            11: {
                BAB: [11, 6, 1],
                Fort: 7,
                Ref: 3,
                Will: 3,
                spells: {
                    0: null,
                    1: 1,
                    2: 1,
                    3: 0,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Combat Style Mastery',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 11th level, a ranger's aptitude in his chosen combat style (archery or two-weapon combat) improves again. If he selected archery at 2nd level, he is treated as having the Improved Precise Shot feat, even if he does not have the normal prerequisites for that feat.<br><br>If the ranger selected two-weapon combat at 2nd level, he is treated as having the Greater Two-Weapon Fighting feat, even if he does not have the normal prerequisites for that feat.<br><br>As before, the benefits of the ranger's chosen style apply only when he wears light or no armor. He loses all benefits of his combat style when wearing medium or heavy armor.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            12: {
                BAB: [12, 7, 2],
                Fort: 8,
                Ref: 4,
                Will: 4,
                spells: {
                    0: null,
                    1: 1,
                    2: 1,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [13, 8, 3],
                Fort: 8,
                Ref: 4,
                Will: 4,
                spells: {
                    0: null,
                    1: 1,
                    2: 1,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Camouflage',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A ranger of 13th level or higher can use the Hide skill in any sort of natural terrain, even if the terrain doesn't grant cover or concealment.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            14: {
                BAB: [14, 9, 4],
                Fort: 9,
                Ref: 4,
                Will: 4,
                spells: {
                    0: null,
                    1: 2,
                    2: 1,
                    3: 1,
                    4: 0,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [15, 10, 5],
                Fort: 9,
                Ref: 5,
                Will: 5,
                spells: {
                    0: null,
                    1: 2,
                    2: 1,
                    3: 1,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': '4th Favored Enemy',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a ranger may select a type of creature from among those given on Table: Ranger Favored Enemies. The ranger gains a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against creatures of this type. Likewise, he gets a +2 bonus on weapon damage rolls against such creatures.<br><br>At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy from those given on the table. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by 2.<br><br>If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table. If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            16: {
                BAB: [16, 11, 6, 1],
                Fort: 10,
                Ref: 5,
                Will: 5,
                spells: {
                    0: null,
                    1: 2,
                    2: 2,
                    3: 1,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [17, 12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 5,
                spells: {
                    0: null,
                    1: 2,
                    2: 2,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Hide in Plain Sight',
                        'Subtype': '',
                        'Page': '',
                        'Description': "While in any sort of natural terrain, a ranger of 17th level or higher can use the Hide skill even while being observed.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            18: {
                BAB: [18, 13, 8, 3],
                Fort: 11,
                Ref: 6,
                Will: 6,
                spells: {
                    0: null,
                    1: 3,
                    2: 2,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            19: {
                BAB: [19, 14, 9, 4],
                Fort: 11,
                Ref: 6,
                Will: 6,
                spells: {
                    0: null,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            20: {
                BAB: [20, 15, 10, 5],
                Fort: 12,
                Ref: 6,
                Will: 6,
                spells: {
                    0: null,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 3,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': '5th Favored Enemy',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 1st level, a ranger may select a type of creature from among those given on Table: Ranger Favored Enemies. The ranger gains a +2 bonus on Bluff, Listen, Sense Motive, Spot, and Survival checks when using these skills against creatures of this type. Likewise, he gets a +2 bonus on weapon damage rolls against such creatures.<br><br>At 5th level and every five levels thereafter (10th, 15th, and 20th level), the ranger may select an additional favored enemy from those given on the table. In addition, at each such interval, the bonus against any one favored enemy (including the one just selected, if so desired) increases by 2.<br><br>If the ranger chooses humanoids or outsiders as a favored enemy, he must also choose an associated subtype, as indicated on the table. If a specific creature falls into more than one category of favored enemy, the ranger's bonuses do not stack; he simply uses whichever bonus is higher.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
        },
        'skills': [
            'Climb', 'Concentration', 'Craft', 'Handle Animal', 'Heal', 'Hide', 'Jump', 'Knowledge - Dungeoneering', 'Knowledge - Geography', 'Knowledge - Nature', 'Listen', 'Move Silently', 'Profession', 'Ride', 'Search', 'Spot', 'Survival', 'Swim', 'Use Rope'
        ]
    },
    'Paladin': {
        'name': 'Paladin',
        'spellMod': 'CHA',
        'type': 'Basic',
        'class': 'Paladin',
        'spellsType': 'Prepared',
        'spellCasterMult': .5,
        'proficiencies': [
            'Simple', 'Light', 'Martial', 'Medium', 'Heavy', 'Light Shield', 'Heavy Shield'
        ],
        'levels': {
            1: {
                BAB: [1],
                Fort: 2,
                Ref: 0,
                Will: 0,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Aura of Good',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The power of a paladin's aura of good (see the detect good spell) is equal to her paladin level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Detect Evil',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At will, a paladin can use detect evil, as the spell.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'spellLike',
                                name: 'Detect Evil',
                                desc: "At will, a paladin can use detect evil, as the spell.",
                                limited: false,
                                limit: null,
                                mod: null
                            }
                        ],
                        'actions': [],
                        'spells': [
                            {
                                type: 'spellLike',
                                spells: ['Detect Evil'],
                                base: 0,
                                mod: null
                            }
                        ]
                    },
                    {
                        'id': 0,
                        'Name': 'Smite Evil 1/Day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Smite Evil 1/Day',
                                group: 'Smite Evil',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            2: {
                BAB: [2],
                Fort: 3,
                Ref: 0,
                Will: 0,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Divine Grace',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 2nd level, a paladin gains a bonus equal to her Charisma bonus (if any) on all saving throws.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Lay on Hands',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Beginning at 2nd level, a paladin with a Charisma score of 12 or higher can heal wounds (her own or those of others) by touch. Each day she can heal a total number of hit points of damage equal to her paladin level x her Charisma bonus. A paladin may choose to divide her healing among multiple recipients, and she doesn't have to use it all at once. Using lay on hands is a standard action.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Lay on Hands',
                                desc: "Beginning at 2nd level, a paladin with a Charisma score of 12 or higher can heal wounds (her own or those of others) by touch. Each day she can heal a total number of hit points of damage equal to her paladin level x her Charisma bonus. A paladin may choose to divide her healing among multiple recipients, and she doesn't have to use it all at once. Using lay on hands is a standard action.<br><br>Alternatively, a paladin can use any or all of this healing power to deal damage to undead creatures. Using lay on hands in this way requires a successful melee touch attack and doesn't provoke an attack of opportunity. The paladin decides how many of her daily allotment of points to use as damage after successfully touching an undead creature.",
                                limited: true,
                                limit: 0,
                                mod: false,
                                number: true,
                                level: 'Paladin',
                                levelMult: 'CHA'
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            3: {
                BAB: [3],
                Fort: 3,
                Ref: 1,
                Will: 1,
                spells: null,
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Aura of Courage',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Beginning at 3rd level, a paladin is immune to fear (magical or otherwise). Each ally within 10 feet of her gains a +4 morale bonus on saving throws against fear effects. This ability functions while the paladin is conscious, but not if she is unconscious or dead.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'saveMods': [
                            { 'bonus': 100, 'text': 'Immune to fear' }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Divine Health',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 3rd level, a paladin gains immunity to all diseases, including supernatural and magical diseases.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            4: {
                BAB: [4],
                Fort: 4,
                Ref: 1,
                Will: 1,
                spells: {
                    0: null,
                    1: 0,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Turn Undead',
                        'Subtype': '',
                        'Page': '',
                        'Description': "When a paladin reaches 4th level, she gains the supernatural ability to turn undead. She may use this ability a number of times per day equal to 3 + her Charisma modifier. She turns undead as a cleric of three levels lower would.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Turn or rebuke undead',
                                desc: 'When a paladin reaches 4th level, she gains the supernatural ability to turn undead. She may use this ability a number of times per day equal to 3 + her Charisma modifier. She turns undead as a cleric of three levels lower would.',
                                limited: true,
                                limit: 3,
                                mod: 'CHA'
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Paladin Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Beginning at 4th level, a paladin gains the ability to cast a small number of divine spells, which are drawn from the paladin spell list. A paladin must choose and prepare her spells in advance.<br><br>To prepare or cast a spell, a paladin must have a Wisdom score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a paladin's spell is 10 + the spell level + the paladin's Wisdom modifier.<br><br>Like other spellcasters, a paladin can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: The Paladin. In addition, she receives bonus spells per day if she has a high Wisdom score. When Table: The Paladin indicates that the paladin gets 0 spells per day of a given spell level, she gains only the bonus spells she would be entitled to based on her Wisdom score for that spell level The paladin does not have access to any domain spells or granted powers, as a cleric does.<br><br>A paladin prepares and casts spells the way a cleric does, though she cannot lose a prepared spell to spontaneously cast a cure spell in its place. A paladin may prepare and cast any spell on the paladin spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily meditation.<br><br>Through 3rd level, a paladin has no caster level. At 4th level and higher, her caster level is one-half her paladin level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            5: {
                BAB: [5],
                Fort: 4,
                Ref: 1,
                Will: 1,
                spells: {
                    0: null,
                    1: 0,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Special Mount',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Upon reaching 5th level, a paladin gains the service of an unusually intelligent, strong, and loyal steed to serve her in her crusade against evil (see below). This mount is usually a heavy warhorse (for a Medium paladin) or a warpony (for a Small paladin).<br><br>Once per day, as a full-round action, a paladin may magically call her mount from the celestial realms in which it resides. This ability is the equivalent of a spell of a level equal to one-third the paladin's class level. The mount immediately appears adjacent to the paladin and remains for 2 hours per paladin level; it may be dismissed at any time as a free action. The mount is the same creature each time it is summoned, though the paladin may release a particular mount from service.<br><br>Each time the mount is called, it appears in full health, regardless of any damage it may have taken previously. The mount also appears wearing or carrying any gear it had when it was last dismissed. Calling a mount is a conjuration (calling) effect.<br><br>Should the paladin's mount die, it immediately disappears, leaving behind any equipment it was carrying. The paladin may not summon another mount for thirty days or until she gains a paladin level, whichever comes first, even if the mount is somehow returned from the dead. During this thirty-day period, the paladin takes a -1 penalty on attack and weapon damage rolls.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Special Mount',
                                desc: "Upon reaching 5th level, a paladin gains the service of an unusually intelligent, strong, and loyal steed to serve her in her crusade against evil (see below). This mount is usually a heavy warhorse (for a Medium paladin) or a warpony (for a Small paladin).<br><br>Once per day, as a full-round action, a paladin may magically call her mount from the celestial realms in which it resides. This ability is the equivalent of a spell of a level equal to one-third the paladin's class level. The mount immediately appears adjacent to the paladin and remains for 2 hours per paladin level; it may be dismissed at any time as a free action. The mount is the same creature each time it is summoned, though the paladin may release a particular mount from service.<br><br>Each time the mount is called, it appears in full health, regardless of any damage it may have taken previously. The mount also appears wearing or carrying any gear it had when it was last dismissed. Calling a mount is a conjuration (calling) effect.<br><br>Should the paladin's mount die, it immediately disappears, leaving behind any equipment it was carrying. The paladin may not summon another mount for thirty days or until she gains a paladin level, whichever comes first, even if the mount is somehow returned from the dead. During this thirty-day period, the paladin takes a -1 penalty on attack and weapon damage rolls.",
                                limited: true,
                                limit: 1,
                                mod: null
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Smite Evil 2/Day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Smite Evil 2/Day',
                                group: 'Smite Evil',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            6: {
                BAB: [6, 1],
                Fort: 5,
                Ref: 2,
                Will: 2,
                spells: {
                    0: null,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Remove Disease 1/Week',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 6th level, a paladin can produce a remove disease effect, as the spell, once per week. She can use this ability one additional time per week for every three levels after 6th (twice per week at 9th, three times at 12th, and so forth).",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Remove Disease 1/Week',
                                group: 'Remove Disease/Week',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            7: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 2,
                Will: 2,
                spells: {
                    0: null,
                    1: 1,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            8: {
                BAB: [8, 3],
                Fort: 6,
                Ref: 2,
                Will: 2,
                spells: {
                    0: null,
                    1: 1,
                    2: 0,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            9: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 3,
                Will: 3,
                spells: {
                    0: null,
                    1: 1,
                    2: 0,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Remove Disease 2/Week',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 6th level, a paladin can produce a remove disease effect, as the spell, once per week. She can use this ability one additional time per week for every three levels after 6th (twice per week at 9th, three times at 12th, and so forth).",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Remove Disease 2/Week',
                                group: 'Remove Disease/Week',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            10: {
                BAB: [10, 5],
                Fort: 7,
                Ref: 3,
                Will: 3,
                spells: {
                    0: null,
                    1: 1,
                    2: 1,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Smite Evil 3/Day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Smite Evil 3/Day',
                                group: 'Smite Evil',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            11: {
                BAB: [11, 6, 1],
                Fort: 7,
                Ref: 3,
                Will: 3,
                spells: {
                    0: null,
                    1: 1,
                    2: 1,
                    3: 0,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            12: {
                BAB: [12, 7, 2],
                Fort: 8,
                Ref: 4,
                Will: 4,
                spells: {
                    0: null,
                    1: 1,
                    2: 1,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Remove Disease 3/Week',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 6th level, a paladin can produce a remove disease effect, as the spell, once per week. She can use this ability one additional time per week for every three levels after 6th (twice per week at 9th, three times at 12th, and so forth).",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Remove Disease 3/Week',
                                group: 'Remove Disease/Week',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            13: {
                BAB: [13, 8, 3],
                Fort: 8,
                Ref: 4,
                Will: 4,
                spells: {
                    0: null,
                    1: 1,
                    2: 1,
                    3: 1,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            14: {
                BAB: [14, 9, 4],
                Fort: 9,
                Ref: 4,
                Will: 4,
                spells: {
                    0: null,
                    1: 2,
                    2: 1,
                    3: 1,
                    4: 0,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [15, 10, 5],
                Fort: 9,
                Ref: 5,
                Will: 5,
                spells: {
                    0: null,
                    1: 2,
                    2: 1,
                    3: 1,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Remove Disease 4/Week',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 6th level, a paladin can produce a remove disease effect, as the spell, once per week. She can use this ability one additional time per week for every three levels after 6th (twice per week at 9th, three times at 12th, and so forth).",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Remove Disease 4/Week',
                                group: 'Remove Disease/Week',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Smite Evil 4/Day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Smite Evil 4/Day',
                                group: 'Smite Evil',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            16: {
                BAB: [16, 11, 6, 1],
                Fort: 10,
                Ref: 5,
                Will: 5,
                spells: {
                    0: null,
                    1: 2,
                    2: 2,
                    3: 1,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [17, 12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 5,
                spells: {
                    0: null,
                    1: 2,
                    2: 2,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            18: {
                BAB: [18, 13, 8, 3],
                Fort: 11,
                Ref: 6,
                Will: 6,
                spells: {
                    0: null,
                    1: 3,
                    2: 2,
                    3: 2,
                    4: 1,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Remove Disease 5/Week',
                        'Subtype': '',
                        'Page': '',
                        'Description': "At 6th level, a paladin can produce a remove disease effect, as the spell, once per week. She can use this ability one additional time per week for every three levels after 6th (twice per week at 9th, three times at 12th, and so forth).",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Remove Disease 5/Week',
                                group: 'Remove Disease/Week',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
            19: {
                BAB: [19, 14, 9, 4],
                Fort: 11,
                Ref: 6,
                Will: 6,
                spells: {
                    0: null,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 2,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            20: {
                BAB: [20, 15, 10, 5],
                Fort: 12,
                Ref: 6,
                Will: 6,
                spells: {
                    0: null,
                    1: 3,
                    2: 3,
                    3: 3,
                    4: 3,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Smite Evil 5/Day',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'class',
                                name: 'Smite Evil 5/Day',
                                group: 'Smite Evil',
                                desc: "Once per day, a paladin may attempt to smite evil with one normal melee attack. She adds her Charisma bonus (if any) to her attack roll and deals 1 extra point of damage per paladin level. If the paladin accidentally smites a creature that is not evil, the smite has no effect, but the ability is still used up for that day.<br><br>At 5th level, and at every five levels thereafter, the paladin may smite evil one additional time per day, as indicated on Table: The Paladin, to a maximum of five times per day at 20th level.",
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': []
                    },
                ]
            },
        },
        'skills': [
            'Concentration', 'Craft', 'Diplomacy', 'Handle Animal', 'Heal', 'Knowledge - Nobility and Royalty', 'Knowledge - Religion', 'Profession', 'Ride', 'Sense Motive'
        ]
    }, 'Sorcerer': {
        'name': 'Sorcerer',
        'spellMod': 'CHA',
        'type': 'Basic',
        'proficiencies': [
            'Simple'
        ],
        'spellsType': 'Known',
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 5,
                    1: 3,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Familiar',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A sorcerer can obtain a familiar. Doing so takes 24 hours and uses up magical materials that cost 100 gp. A familiar is a magical beast that resembles a small animal and is unusually tough and intelligent. The creature serves as a companion and servant.<br><br>The sorcerer chooses the kind of familiar he gets. As the sorcerer advances in level, his familiar also increases in power.<br><br>If the familiar dies or is dismissed by the sorcerer, the sorcerer must attempt a DC 15 Fortitude saving throw. Failure means he loses 200 experience points per sorcerer level; success reduces the loss to one-half that amount. However, a sorcerer's experience point total can never go below 0 as the result of a familiar's demise or dismissal. A slain or dismissed familiar cannot be replaced for a year and day. A slain familiar can be raised from the dead just as a character can be, and it does not lose a level or a Constitution point when this happy event occurs.<br><br>A character with more than one class that grants a familiar may have only one familiar at a time.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Scorcerer Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A sorcerer casts arcane spells which are drawn primarily from the sorcerer/wizard spell list. He can cast any spell he knows without preparing it ahead of time, the way a wizard or a cleric must (see below).<br><br>To learn or cast a spell, a sorcerer must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a sorcerer's spell is 10 + the spell level + the sorcerer's Charisma modifier.<br><br>Like other spellcasters, a sorcerer can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: The Sorcerer. In addition, he receives bonus spells per day if he has a high Charisma score.<br><br>A sorcerer's selection of spells is extremely limited. A sorcerer begins play knowing four 0-level spells and two 1st-level spells of your choice. At each new sorcerer level, he gains one or more new spells, as indicated on Table: Sorcerer Spells Known. (Unlike spells per day, the number of spells a sorcerer knows is not affected by his Charisma score; the numbers on Table: Sorcerer Spells Known are fixed.) These new spells can be common spells chosen from the sorcerer/wizard spell list, or they can be unusual spells that the sorcerer has gained some understanding of by study. The sorcerer can't use this method of spell acquisition to learn spells at a faster rate, however.<br><br>Upon reaching 4th level, and at every even-numbered sorcerer level after that (6th, 8th, and so on), a sorcerer can choose to learn a new spell in place of one he already knows. In effect, the sorcerer 'loses' the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least two levels lower than the highest-level sorcerer spell the sorcerer can cast. A sorcerer may swap only a single spell at any given level, and must choose whether or not to swap the spell at the same time that he gains new spells known for the level.<br><br>Unlike a wizard or a cleric, a sorcerer need not prepare his spells in advance. He can cast any spell he knows at any time, assuming he has not yet used up his spells per day for that spell level. He does not have to decide ahead of time which spells he'll cast.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 6,
                    1: 4,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            3: {
                BAB: [1],
                Fort: 1,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 6,
                    1: 5,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            4: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 6,
                    1: 6,
                    2: 3,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 6,
                    1: 6,
                    2: 4,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            6: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 6,
                    1: 6,
                    2: 5,
                    3: 3,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            7: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {

                    0: 6,
                    1: 6,
                    2: 6,
                    3: 4,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            8: {
                BAB: [4],
                Fort: 2,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 5,
                    4: 3,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            9: {
                BAB: [4],
                Fort: 3,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 4,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            10: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 5,
                    5: 3,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            11: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 4,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            12: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 5,
                    6: 3,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 4,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            14: {
                BAB: [7, 2],
                Fort: 4,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 5,
                    7: 3,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 4,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            16: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 5,
                    8: 3,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 4,
                    9: null
                },
                specialAbilities: []
            },
            18: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 5,
                    9: 3
                },
                specialAbilities: []
            },
            19: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 6,
                    9: 4
                },
                specialAbilities: []
            },
            20: {
                BAB: [10, 5],
                Fort: 6,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 6,
                    9: 6
                },
                specialAbilities: []
            },
        },
        'skills': [
            'Bluff', 'Concentration', 'Craft', 'Knowledge - Arcana', 'Profession', 'Spellcraft'
        ]
    },
    'Sorcerer - Imbued Staff': {
        'name': 'Sorcerer (Imbued Staff)',
        'spellMod': 'CHA',
        'type': 'Basic',
        'proficiencies': [
            'Simple'
        ],
        'spellsType': 'Known',
        'spellCasterMult': 1,
        'levels': {
            1: {
                BAB: [0],
                Fort: 0,
                Ref: 0,
                Will: 2,
                spells: {
                    0: 5,
                    1: 3,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff',
                        'Subtype': '',
                        'Page': '',
                        'Description': "As an optional rule, any sorcerer or wizard may opt to forego a normal familiar in order to imbue her traveling staff with that portion of her power. To do this, she selects a quarterstaff-length of wood that resonates with her mystical signature and personality. It cannot have been previously enchanted (although it may subsequently be) and must be of masterwork quality. It must be prepared using materials costing at least 500 gp, usually with a gem to serve as a mounted finial. The imbuing ritual takes 24 hours and ties a portion of the spellcaster's power into the staff, a separate piece of her soul that grows in power as she does. Upon its imbuing, the staff becomes magically linked to its creator and is treated as a magic item.<br><br><b>Hit Points:</b> The staff has 10 Hit Points and Hardness 5, both of which increase as the wizard or sorcerer gains levels, according to the Imbued Staff Advancement table.<br><br><b>Saving Throws:</b> The staff saves as its creator, even when unattended.<br><br>If an imbued staff is broken, its creator must attempt a DC 15 Fortitude saving throw or lose 500 experience points per wizard or sorcerer level. Success reduces the loss by half. However, a caster's experience point total can never be reduced below 0 as a result of the loss of her staff. A broken imbued staff cannot be replaced for a year and a day - the loss is too great.<br>If the character who imbued the staff dies, the staff loses all magical properties. Should the character return from the grave, it regains its imbued powers when it is first touched by the imbuing character.<table class='featDescTable' border='0' cellpadding='1' cellspacing='0'><tbody><tr><th style='width: 100px'>Master<br>Class Level</th><th style='width: 70px'>Hardness</th><th style='width: 70px'>Hit Points</th><th style='width: 200px'>Special</th></tr><tr><td>1st–2nd</td><td>5</td><td>15</td><td>Cantrips, deliver touch spells</td></tr><tr><td>3rd–4th</td><td>5</td><td>15</td><td>Enhanced weapon +1</td></tr><tr><td>5th–6th</td><td>5</td><td>15</td><td>Remote viewing</td></tr><tr><td>7th–8th</td><td>10</td><td>20</td><td>—</td></tr><tr><td>9th–10th</td><td>10</td><td>20</td><td>Vital Transfer</td></tr><tr><td>11th–12th</td><td>10</td><td>20</td><td>Enhanced weapon +2</td></tr><tr><td>13th–14th</td><td>15</td><td>25</td><td>Perfect location</td></tr><tr><td>15th–16th</td><td>15</td><td>25</td><td>Mighty weapon</td></tr><tr><td>17th–18th</td><td>15</td><td>25</td><td>Return</td></tr><tr><td>19th–20th</td><td>20</td><td>30</td><td>Enhanced weapon +3</td></tr></tbody></table>",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Cantrips',
                        'Subtype': '',
                        'Page': '',
                        'Description': "Three times per day, as a standard action, the wielder of the staff can make it shed a flickering light as per the spell. Once activated, this light remains until the wielder dismisses it (a free action). In addition, the staff can hold a single cantrip available to the wielder, decided upon when it is first imbued. Once per day, as a standard action, the master can cast this cantrip from the staff. The caster level for these effects is equal to that of the master. The save DC for any cantrip cast by the staff is 10.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [
                            {
                                type: 'spellLike',
                                name: 'Light',
                                desc: 'Three times per day, as a standard action, the wielder of the staff can make it shed a flickering light as per the spell. Once activated, this light remains until the wielder dismisses it (a free action). In addition, the staff can hold a single cantrip available to the wielder, decided upon when it is first imbued. Once per day, as a standard action, the master can cast this cantrip from the staff. The caster level for these effects is equal to that of the master. The save DC for any cantrip cast by the staff is 10.',
                                limited: true,
                                limit: 3,
                                mod: false
                            },
                            {
                                type: 'spellLike',
                                name: 'Mending',
                                desc: 'Three times per day, as a standard action, the wielder of the staff can make it shed a flickering light as per the spell. Once activated, this light remains until the wielder dismisses it (a free action). In addition, the staff can hold a single cantrip available to the wielder, decided upon when it is first imbued. Once per day, as a standard action, the master can cast this cantrip from the staff. The caster level for these effects is equal to that of the master. The save DC for any cantrip cast by the staff is 10.',
                                limited: true,
                                limit: 1,
                                mod: false
                            }
                        ],
                        'actions': [],
                        'spells': [{
                            type: 'spellLike',
                            spells: ['Light', 'Mending'],
                            base: 3,
                            mod: 'CHA'
                        }]
                    },
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Deliver Touch Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The master may deliver touch spells with the staff. When using the staff in this way, the wielder may attempt to deal the staffs damage by hitting the target's standard AC (as opposed to the target's touch AC). A successful critical hit with the staff does not double the spell's affect when delivered in this way.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    },
                    {
                        'id': 0,
                        'Name': 'Scorcerer Spells',
                        'Subtype': '',
                        'Page': '',
                        'Description': "A sorcerer casts arcane spells which are drawn primarily from the sorcerer/wizard spell list. He can cast any spell he knows without preparing it ahead of time, the way a wizard or a cleric must (see below).<br><br>To learn or cast a spell, a sorcerer must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a sorcerer's spell is 10 + the spell level + the sorcerer's Charisma modifier.<br><br>Like other spellcasters, a sorcerer can cast only a certain number of spells of each spell level per day. His base daily spell allotment is given on Table: The Sorcerer. In addition, he receives bonus spells per day if he has a high Charisma score.<br><br>A sorcerer's selection of spells is extremely limited. A sorcerer begins play knowing four 0-level spells and two 1st-level spells of your choice. At each new sorcerer level, he gains one or more new spells, as indicated on Table: Sorcerer Spells Known. (Unlike spells per day, the number of spells a sorcerer knows is not affected by his Charisma score; the numbers on Table: Sorcerer Spells Known are fixed.) These new spells can be common spells chosen from the sorcerer/wizard spell list, or they can be unusual spells that the sorcerer has gained some understanding of by study. The sorcerer can't use this method of spell acquisition to learn spells at a faster rate, however.<br><br>Upon reaching 4th level, and at every even-numbered sorcerer level after that (6th, 8th, and so on), a sorcerer can choose to learn a new spell in place of one he already knows. In effect, the sorcerer 'loses' the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged, and it must be at least two levels lower than the highest-level sorcerer spell the sorcerer can cast. A sorcerer may swap only a single spell at any given level, and must choose whether or not to swap the spell at the same time that he gains new spells known for the level.<br><br>Unlike a wizard or a cleric, a sorcerer need not prepare his spells in advance. He can cast any spell he knows at any time, assuming he has not yet used up his spells per day for that spell level. He does not have to decide ahead of time which spells he'll cast.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            2: {
                BAB: [1],
                Fort: 0,
                Ref: 0,
                Will: 3,
                spells: {
                    0: 6,
                    1: 4,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            3: {
                BAB: [1],
                Fort: 1,
                Ref: 1,
                Will: 3,
                spells: {
                    0: 6,
                    1: 5,
                    2: null,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Enhanced Weapon + 1',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff gains the listed enhancement bonus to attack and damage when wielded by its master. This bonus applies to both ends of the staff. In the hands of any other it is merely an ordinary masterwork staff.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            4: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 6,
                    1: 6,
                    2: 3,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            5: {
                BAB: [2],
                Fort: 1,
                Ref: 1,
                Will: 4,
                spells: {
                    0: 6,
                    1: 6,
                    2: 4,
                    3: null,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Remote Viewing',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff's master may concentrate and view the staff's surroundings as though looking through the finial. This effect is identical to that of clairvoyance except that it lasts for as long as the owner concentrates and has an infinite range so long as the staff is on the same plane. While in effect, the staff's finial glows faintly, illuminating the area around the staff like a candle.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            6: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {
                    0: 6,
                    1: 6,
                    2: 5,
                    3: 3,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            7: {
                BAB: [3],
                Fort: 2,
                Ref: 2,
                Will: 5,
                spells: {

                    0: 6,
                    1: 6,
                    2: 6,
                    3: 4,
                    4: null,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            8: {
                BAB: [4],
                Fort: 2,
                Ref: 2,
                Will: 6,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 5,
                    4: 3,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            9: {
                BAB: [4],
                Fort: 3,
                Ref: 3,
                Will: 6,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 4,
                    5: null,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Vital Transfer',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff's master may opt to forego her natural healing for the evening and mend her staff through mystical means. Each night's rest thus spent returns a number of hit points to the staff equal to the master's character level, up to the staff's maximum hit points. The Heal skill does not increase this amount.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            10: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 5,
                    5: 3,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            11: {
                BAB: [5],
                Fort: 3,
                Ref: 3,
                Will: 7,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 4,
                    6: null,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Enhanced Weapon + 2',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff gains the listed enhancement bonus to attack and damage when wielded by its master. This bonus applies to both ends of the staff. In the hands of any other it is merely an ordinary masterwork staff.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            12: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 5,
                    6: 3,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            13: {
                BAB: [6, 1],
                Fort: 4,
                Ref: 4,
                Will: 8,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 4,
                    7: null,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Perfect Location',
                        'Subtype': '',
                        'Page': '',
                        'Description': "By concentrating for a full round, the wizard knows the direction and distance to her staff, so long as it is on the same plane.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            14: {
                BAB: [7, 2],
                Fort: 4,
                Ref: 4,
                Will: 9,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 5,
                    7: 3,
                    8: null,
                    9: null
                },
                specialAbilities: []
            },
            15: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 5,
                Will: 9,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 4,
                    8: null,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Mighty Weapon',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff gains the bane, defending, flaming, frost, merciful, shock, or thundering special weapon ability. This ability applies to both ends of the staff. Once chosen, the bonus cannot be changed and does not function in the hands of anyone other than the staff's master.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            16: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 5,
                    8: 3,
                    9: null
                },
                specialAbilities: []
            },
            17: {
                BAB: [8, 3],
                Fort: 5,
                Ref: 5,
                Will: 10,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 4,
                    9: null
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Return',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The master can summon the staff to her hand as a standard action, so long as it is on the same plane. When summoned in this way, the staff simply appears in its master's hand. Any effect targeting the staff or the master that prevents teleportation also blocks this ability.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            18: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 5,
                    9: 3
                },
                specialAbilities: []
            },
            19: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 6,
                Will: 11,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 6,
                    9: 4
                },
                specialAbilities: [
                    {
                        'id': 0,
                        'Name': 'Imbued Staff - Enhanced Weapon + 3',
                        'Subtype': '',
                        'Page': '',
                        'Description': "The staff gains the listed enhancement bonus to attack and damage when wielded by its master. This bonus applies to both ends of the staff. In the hands of any other it is merely an ordinary masterwork staff.",
                        'Benefit': "",
                        'Special': '',
                        'Normal': '',
                        'URL': 'https://srd.dndtools.org/srd/classes/basePhb2/duskblade.html',
                        'Effects': {},
                        'limits': [],
                        'actions': [],
                        'spells': []
                    }
                ]
            },
            20: {
                BAB: [10, 5],
                Fort: 6,
                Ref: 6,
                Will: 12,
                spells: {
                    0: 6,
                    1: 6,
                    2: 6,
                    3: 6,
                    4: 6,
                    5: 6,
                    6: 6,
                    7: 6,
                    8: 6,
                    9: 6
                },
                specialAbilities: []
            },
        },
        'skills': [
            'Bluff', 'Concentration', 'Craft', 'Knowledge - Arcana', 'Profession', 'Spellcraft'
        ]
    },
    'Fighter': {
        'name': 'Fighter',
        'spellMod': null,
        'type': 'Basic',
        'class': 'Fighter',
        'spellsType': null,
        'spellCasterMult': null,
        'proficiencies': [
            'Simple', 'Light', 'Medium', 'Heavy', 'Martial', 'Tower', 'Light Shield', 'Heavy Shield'
        ],
        'levels': {
            1: {
                BAB: [1],
                Fort: 2,
                Ref: 0,
                Will: 0,
                spells: null,
                specialAbilities: []
            },
            2: {
                BAB: [2],
                Fort: 3,
                Ref: 0,
                Will: 0,
                spells: null,
                specialAbilities: []
            },
            3: {
                BAB: [3],
                Fort: 3,
                Ref: 1,
                Will: 1,
                spells: null,
                specialAbilities: []
            },
            4: {
                BAB: [4],
                Fort: 4,
                Ref: 1,
                Will: 1,
                spells: null,
                specialAbilities: []
            },
            5: {
                BAB: [5],
                Fort: 4,
                Ref: 1,
                Will: 1,
                spells: null,
                specialAbilities: []
            },
            6: {
                BAB: [6, 1],
                Fort: 5,
                Ref: 2,
                Will: 2,
                spells: null,
                specialAbilities: []
            },
            7: {
                BAB: [7, 2],
                Fort: 5,
                Ref: 2,
                Will: 2,
                spells: null,
                specialAbilities: []
            },
            8: {
                BAB: [8, 3],
                Fort: 6,
                Ref: 2,
                Will: 2,
                spells: null,
                specialAbilities: []
            },
            9: {
                BAB: [9, 4],
                Fort: 6,
                Ref: 3,
                Will: 3,
                spells: null,
                specialAbilities: []
            },
            10: {
                BAB: [10, 5],
                Fort: 7,
                Ref: 3,
                Will: 3,
                spells: null,
                specialAbilities: []
            },
            11: {
                BAB: [11, 6, 1],
                Fort: 7,
                Ref: 3,
                Will: 3,
                spells: null,
                specialAbilities: []
            },
            12: {
                BAB: [12, 7, 2],
                Fort: 8,
                Ref: 4,
                Will: 4,
                spells: null,
                specialAbilities: []
            },
            13: {
                BAB: [13, 8, 3],
                Fort: 8,
                Ref: 4,
                Will: 4,
                spells: null,
                specialAbilities: []
            },
            14: {
                BAB: [14, 9, 4],
                Fort: 9,
                Ref: 4,
                Will: 4,
                spells: null,
                specialAbilities: []
            },
            15: {
                BAB: [15, 10, 5],
                Fort: 9,
                Ref: 5,
                Will: 5,
                spells: null,
                specialAbilities: []
            },
            16: {
                BAB: [16, 11, 6, 1],
                Fort: 10,
                Ref: 5,
                Will: 5,
                spells: null,
                specialAbilities: []
            },
            17: {
                BAB: [17, 12, 7, 2],
                Fort: 10,
                Ref: 5,
                Will: 5,
                spells: null,
                specialAbilities: []
            },
            18: {
                BAB: [18, 13, 8, 3],
                Fort: 11,
                Ref: 6,
                Will: 6,
                spells: null,
                specialAbilities: []
            },
            19: {
                BAB: [19, 14, 9, 4],
                Fort: 11,
                Ref: 6,
                Will: 6,
                spells: null,
                specialAbilities: []
            },
            20: {
                BAB: [20, 15, 10, 5],
                Fort: 12,
                Ref: 6,
                Will: 6,
                spells: null,
                specialAbilities: []
            },
        },
        'skills': [
            'Climb', 'Craft', 'Craft', 'Craft', 'Handle Animal', 'Itimidate', 'Jump', 'Ride', 'Swim'
        ]
    },
}