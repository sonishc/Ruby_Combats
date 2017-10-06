Role.create!(title: 'Super Admin')
Role.create!(title: 'Admin')
Role.create!(title: 'Game Master')
Role.create!(title: 'Player')
User.create!(name: 'User1', email: 'user1@gmail.com',
             password: '123456', role_id: 1)
