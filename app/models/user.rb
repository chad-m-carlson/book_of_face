# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  # serialize :liked_people, Array

  has_many :friends, dependent: :destroy
  has_many :people, through: :friends

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Person.where("id IN (?)", ids)
  end
end
