# This file should contain all the record creation needed to seed the database
# with its default values.
# The data can then be loaded with the rails db:seed command
# (or created alongside the database with db:setup).
#
# Examples:
#
# movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# Character.create(name: 'Luke', movie: movies.first)

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
