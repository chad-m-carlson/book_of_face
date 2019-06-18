class AddLikedPeopleToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_people, :text
  end
end
