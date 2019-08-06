class Symptom < ApplicationRecord
    has_many :diagnoses, dependent: :delete_all

    def sorted_diagnoses
        array = self.diagnoses.sort_by { |i| i["frequency"] }
        return array.reverse
    end 

end
