Role.create!(title: 'Super Admin')
Role.create!(title: 'Admin')
Role.create!(title: 'Game Master')
Role.create!(title: 'Player')

Level.create!(level: 1, experience_level: 50, health_point_level: 100)
Level.create!(level: 2, experience_level: 350, health_point_level: 600)
Level.create!(level: 3, experience_level: 666, health_point_level: 1000)
Level.create!(level: 4, experience_level: 1111, health_point_level: 2000)
Level.create!(level: 5, experience_level: 2222, health_point_level: 3000)
Level.create!(level: 6, experience_level: 3333, health_point_level: 4000)
Level.create!(level: 7, experience_level: 4444, health_point_level: 5000)
Level.create!(level: 8, experience_level: 5555, health_point_level: 6000)
Level.create!(level: 9, experience_level: 6666, health_point_level: 7000)
Level.create!(level: 10, experience_level: 7777, health_point_level: 8000)
Level.create!(level: 11, experience_level: 8888, health_point_level: 9000)
Level.create!(level: 12, experience_level: 10_000, health_point_level: 10_000)

Item.create([
  {
    id: 1,
    item_name: 'Gladiators helmet',
    category: 'equipment',
    hierarchy: 'head',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_helmet.jpg'
  },
  {
    id: 2,
    item_name: 'Gladiators breastplate',
    category: 'equipment',
    hierarchy: 'chest',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_chest.jpg'
  },
  {
    id: 3,
    item_name: 'Gladiators pauldrons',
    category: 'equipment',
    hierarchy: 'shoulders',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_shoulders.jpg'
  },
  {
    id: 4,
    item_name: 'Gladiators gloves',
    category: 'equipment',
    hierarchy: 'gloves',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_gloves.jpg'
  },
  {
    id: 5,
    item_name: 'Gladiator belt',
    category: 'equipment',
    hierarchy: 'belt',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_belt.jpg'
  },
  {
    id: 6,
    item_name: 'Gladiators golden wrist',
    category: 'equipment',
    hierarchy: 'wrist',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_wrist.jpg'
  },
  {
    id: 7,
    item_name: 'Gladiators legguards',
    category: 'equipment',
    hierarchy: 'legs',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_legs.jpg'
  },
  {
    id: 8,
    item_name: 'Gladiator boots',
    category: 'equipment',
    hierarchy: 'feets',
    hp: 2,
    armor: 3,
    power: 5,
    instinct: 1,
    stamina: 3,
    dexterity: 4,
    img: 'gladiators_feets.jpg'
  },
  {
    id: 9,
    item_name: 'Healing potion',
    category: 'useable',
    hierarchy: 'potions',
    hp: 0,
    armor: 0,
    power: 0,
    instinct: 0,
    stamina: 0,
    dexterity: 0,
    effect_type: 1,
    effect_value: 10,
    img: 'healing_potion.png'
  },
])

User.create!( name: 'Super Admin', email: 'superadmin@gmail.com',
	            password: '123456', role_id: 1)
