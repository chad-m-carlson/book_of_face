class RemoveLikedPeopleFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :liked_people, :string
  end
end
