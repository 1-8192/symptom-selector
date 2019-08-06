class Symptom < ApplicationRecord
    has_many :diagnoses, dependent: :delete_all

    def sorted_diagnoses
        array = self.diagnoses.sort_by { |i| i["frequency"] }
        if array == self.diagnoses 
            i = rand(0..self.diagnoses.length-1)
            temp = array[0]
            array[0] = array[i]
            array[i] = temp 
            return array 
        else 
            return array.reverse
        end 
    end 

end
