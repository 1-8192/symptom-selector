class DiagnosesController < ApplicationController

    def index 
        @diagnoses = Diagnosis.all 
        render json: @diagnoses
    end 
    
end
