# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'
require 'byebug'

Symptom.destroy_all
Diagnosis.destroy_all

data = CSV.read('./lib/symptoms (1).csv')

data.each do |line|
    Symptom.create(name: line[0])
    id = Symptom.find_by(name: line[0]).id
    for i in 1..line.length-1 do
        Diagnosis.create(name: line[i], frequency: 0, symptom_id: id)
    end 
end

byebug