class DiagnosesController < ApplicationController

    def index 
        @diagnoses = Diagnosis.all 
        render json: @diagnoses
    end 

    def show
        @diagnosis = Diagnosis.find(params[:id])
        render json: @diagnosis
    end

    def update
        @diagnosis = Diagnosis.find(params[:id])
        @diagnosis.update(diagnosis_params)
        render json: @diagnosis
    end 

    def diagnosis_params
         params.require(:diagnosis).permit(:name, :frequency)
    end 

end
