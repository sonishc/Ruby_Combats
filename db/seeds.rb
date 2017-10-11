Role.create!(title: 'Super Admin')
Role.create!(title: 'Admin')
Role.create!(title: 'Game Master')
Role.create!(title: 'Player')

User.create!( name: 'Super Admin', email: 'superadmin@gmail.com',
	            password: '123456', role_id: 1)
