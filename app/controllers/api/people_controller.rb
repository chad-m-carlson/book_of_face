class Api::PeopleController < ApplicationController
before_action :authenticate_user!,  except: :create

  def index
    render json: Person.show_new_people(current_user.id, params[:page])
  end

  def create
    person = Person.create(params.require(:person).permit(:name, :age, :location, :gender, :avatar_url, :about, :email))
    if person.save
      render json: person
    else
      render errors: person.errors, status: 422
    end
  end

  def show
    render json: Person.make_friends(current_user.id)
  end

  def update
    current_user.liked_people << params[:id].to_i
    current_user.save
  end
end
