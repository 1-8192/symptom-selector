class Symptom < ApplicationRecord
    has_many :diagnoses, dependent: :delete_all

    def get_diagnosis
        array = self.diagnoses
        for i in 0..array.length-1 do 
            for j in i+1..array.length-1 do 
                if array[j].frequency < array[i].frequency
                    temp = array[j]
                    array[j] = array[i]
                    array[i] = temp 
                end 
                j +=1
            end
            i +=1
        end
        return array[0]
    end 

end
