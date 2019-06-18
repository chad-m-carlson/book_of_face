class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :rating
      t.boolean :favorite
      t.integer :friend_id
      t.belongs_to :user, foreign_key: true
      t.belongs_to :person, foreign_key: true

      t.timestamps
    end
  end
end
