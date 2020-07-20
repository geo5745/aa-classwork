class Api::PokemonController < ApplicationController

    def index
        @pokemon = Pokemon.all
        render :index
        #render json: @pokemon
    end

    def show
        @pokemon = Pokemon.find_by(id: params[:id])
        render :show
        #render json: @pokemon
    end
    

end
