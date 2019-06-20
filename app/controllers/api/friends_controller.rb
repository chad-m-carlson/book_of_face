class Api::FriendsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def index
    render json: Friend.all_friends(current_user.id)
  end

  def new
  end

  def create
    friend = Friend.create(params.require(:friend).permit(:user_id, :person_id, :rating, :favorite))
    if friend.save
      render json: friend
    else
      render errors: friend.errors, status: 422
    end
  end
  private

    def set_user
      @user = current_user
    end

end
