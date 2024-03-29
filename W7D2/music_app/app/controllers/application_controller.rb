class ApplicationController < ActionController::Base
    
    helper_method :current_user, :logged_in?, :login!

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end

    def ensure_logged_in
        if !logged_in?
            flash[:errors] = ['gotto log in bro']
            redirect_to landing_url
        end
    end

end
