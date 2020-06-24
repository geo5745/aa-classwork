class UsersController < ApplicationController
    before_action :ensure_logged_in, only: [:index, :show]

    def index
        @users = User.all
        render json: @users
    end
    
    
    def new
        render :new
    end

    def create
        p params
        user = User.new(user_params)
        if user.save
            session[:session_token] = user.reset_session_token! # login!(@user)
            redirect_to users_url
        else
            flash[:errors] = user.errors.full_messages
            redirect_to new_user_url
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user.email
    end

    def user_params
        params.require(:user).permit(:email,:password)
    end


end