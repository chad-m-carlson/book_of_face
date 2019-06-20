class Friend < ApplicationRecord
  belongs_to :user
  belongs_to :person
  validates :person_id, uniqueness: true

  def self.all_friends(user_id)
    Friend.find_by_sql(
    "SELECT name, age, location, gender, beer, avatar_url, about, beer, person_id
    FROM people as p
    INNER JOIN friends as f
    ON p.id = f.person_id
    where user_id = #{user_id}"
    )
  end
end
