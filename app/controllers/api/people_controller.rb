class Api::PeopleController < ApplicationController
before_action :authenticate_user!

  def index
    render json: Person.all
  end

  def show
    render json: Person.make_friends(current_user.id)
  end

  def update
    current_user.liked_people << params[:id].to_i
    current_user.save
  end
end
