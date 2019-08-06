class Symptom < ApplicationRecord
    has_many :diagnoses, dependent: :delete_all
end
