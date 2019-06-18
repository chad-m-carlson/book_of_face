class Person < ApplicationRecord

  has_many :friends, dependent: :destroy
  has_many :users, through: :friends
end
