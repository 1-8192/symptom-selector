class SymptomsController < ApplicationController

    def index
        @symptoms = Symptom.all 
        render json: @symptoms
    end 

    def show
        @symptom = Symptom.find(params[:id])
        @diagnoses = @symptom.sorted_diagnoses
        render json: @diagnoses
    end 
end
