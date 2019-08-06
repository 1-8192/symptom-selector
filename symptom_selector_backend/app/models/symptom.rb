class Symptom < ApplicationRecord
    has_many :diagnoses 
end
