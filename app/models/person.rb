class Person < ApplicationRecord

  has_many :friends, dependent: :destroy
  has_many :users, through: :friends

  def self.make_friends(user_id)
    
  end
end
