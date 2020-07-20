#class GuestsController < ApplicationController
class Api::GuestsController < ApplicationController
  def index
    @guests = Guest.all
    #render json: @guests
    render :index
  end

  def show
    @guest = Guest.find_by(id: params[:id])
    #render json: @guest 
    render :show
  end
end
