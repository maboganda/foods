# frozen_string_literal: true

require_relative '../lib/populator'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Adding admin...'
admin_params = {
  first_name: 'Mark', last_name: 'Aboganda', email: 'jofix17@gmail.com', mobile_number: '9324325006'
}
admin = Admin.find_or_initialize_by(admin_params)
admin.build_authentication(email: 'jofix17@gmail.com', password: 'password')
admin.save!

puts 'Adding dummy customers...'

Customer.populate 100 do |obj|
  obj.first_name = Faker::Name.first_name
  obj.last_name = Faker::Name.first_name
  obj.mobile_number = Faker::PhoneNumber.cell_phone_in_e164
  obj.email = Faker::Internet.email
  obj.birthdate = Faker::Date.birthday(min_age: 18, max_age: 65)
end
