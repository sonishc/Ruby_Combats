Role.create!(title: 'Super Admin')
Role.create!(title: 'Admin')
Role.create!(title: 'Game Master')
Role.create!(title: 'Player')

User.create!( name: 'Super Admin', email: 'superadmin@gmail.com',
	            password: '123456', role_id: 1)
Item.create([
  {
    item_name: 'Gladiators helmet',
    category: 'head',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_helmet.jpg'
  },
  {
    item_name: 'Gladiators breastplate',
    category: 'chest',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_chest.jpg'
  },
  {
    item_name: 'Gladiators pauldrons',
    category: 'shoulders',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_shoulders.jpg'
  },
  {
    item_name: 'Gladiators gloves',
    category: 'gloves',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_gloves.jpg'
  },
  {
    item_name: 'Gladiator belt',
    category: 'belt',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_belt.jpg'
  },
  {
    item_name: 'Gladiators golden wrist',
    category: 'wrist',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_wrist.jpg'
  },
  {
    item_name: 'Gladiators legguards',
    category: 'legs',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_legs.jpg'
  },
  {
    item_name: 'Gladiator boots',
    category: 'feets',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_feets.jpg'
  },
])
