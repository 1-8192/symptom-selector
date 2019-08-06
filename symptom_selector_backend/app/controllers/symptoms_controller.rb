class SymptomsController < ApplicationController

    def index
        @symptoms = Symptom.all 
        render json: @symptoms
    end 

    def show
        @symptom = Symptom.find(params[:id])
        render json: @symptom
    end 
end
