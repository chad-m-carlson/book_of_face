class Api::FriendsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def index
    render json: current_user.friends
  end

  def new
  end

  private

    def set_user
      @user = current_user
    end

end
