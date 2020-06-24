class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        email = params[:user][:email]
        password = params[:user][:password]

        user = User.find_by_credentials(email,password)
        if user
            session[:session_token] = user.reset_session_token!
            redirect_to user_url(user.id)
        else
            flash.now[:errors] = ['invalid credentials']
            render :new
        end

    end

    def destroy
        current_user.reset_session_token!
        session[:session_token] = nil
        redirect_to new_session_url
    end


end