class SessionsController < ApplicationController

    def Create
        patient = Patient.find_by(username: params[:username])
        if patient&.authenticate(params[:password])
            session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
end
end
