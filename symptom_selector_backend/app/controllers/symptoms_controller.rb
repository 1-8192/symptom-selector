class SymptomsController < ApplicationController

    def index
        @symptoms = Symptom.all 
        render json: @symptoms
    end 

    def show
        @symptom = Symptom.find(params[:id])
        @diagnosis = @symptom.get_diagnosis
        render json: @diagnosis
    end 
end
