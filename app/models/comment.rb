class Comment < ApplicationRecord
  belongs_to :user

  def self.persons_comments(person_id)
    Comment.find_by_sql(
      "SELECT body, person_id, user_id, name
      FROM comments
      LEFT JOIN users as u
      ON user_id = u.id
      WHERE person_id = #{person_id}
      "
    )
  end
end
