class Api::PartiesController < ApplicationController
  def index
    @parties = Party.all
    #.includes(guests: [:gifts])
    render :index
  end

  def show
    @party = Party.includes(guests: [:gifts]).find_by(id: params[:id])
    #.includes(guests: [:gifts])
    render :show
  end
end
