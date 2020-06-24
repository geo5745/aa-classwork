class CatsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :new, :edit, :update, :destroy]

  def index
    @cats = Cat.all
    
    cookies
    #session[:my_cookie2] = 'hi2'
    #flash[:my_cookie3] = 'hi3'
    #flash.now[:my_cookie4] = 'hi4'

    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    
    render json: cookies
    # render json: session
    #render json: flash
    #render json: flash.now

    #p session
    #p flash

    
    #render :show


  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = current_user.cats.new(cat_params)
    if @cat.save
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :new
    end
  end

  def edit
    @cat = current_user.cats.find_by(id: params[:id])
    if @cat.nil?
      flash[:errors] = ["You don\'t own this cat"] 
      redirect_to cats_url
    else
      render :edit
    end
  end

  def update
    @cat = current_user.cats.find(params[:id])
    if @cat.update_attributes(cat_params)
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :edit
    end
  end

  private

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :color, :description, :name, :sex, :user_id)
  end
end
