# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :friends, dependent: :destroy
  has_many :people, through: :friends
  has_many :comments, dependent: :destroy

end
