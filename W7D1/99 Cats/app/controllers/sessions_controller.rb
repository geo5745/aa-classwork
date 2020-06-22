class SessionsController < ApplicationController
	def new
		render :new
	end

	def create
		# find a user by their username and password
		user = User.find_by_credentials(
			params[:user][:user_name],
			params[:user][:password]
		)

		if user
			login!(user) # this method comes from applicaiton_controller
			# finish response
			redirect_to cats_url
		else
			flash.now[:errors] = ['Invalid credentials'] # use an array so we can iterate over errors
			render :new
		end
	end

	def destroy
		# log the user out
		# current_user.reset_session_token! # client cookie will no longer match db session_token
		# session[:session_token] = nil # set client cookie to nil
		logout! # this method comes from applicaiton_controller
		redirect_to new_session_url
	end
end