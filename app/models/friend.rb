class Friend < ApplicationRecord
  belongs_to :user
  belongs_to :person
  validates_uniqueness_of :person_id, :scope => [:user_id]

  def self.all_friends(user_id)
    Friend.find_by_sql(
    "WITH a AS (select count (id) as friends_count, person_id
    FROM friends
    GROUP BY person_id)
    SELECT name, age, location, gender, beer, avatar_url, about, f.person_id, friends_count
    FROM people as p
    INNER JOIN friends as f
    ON p.id = f.person_id
    LEFT JOIN a
    ON a.person_id = f.person_id
    WHERE user_id = #{user_id}"
    )
  end
end
