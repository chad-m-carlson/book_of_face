class AddAgeLocationGenderAvatarurlAboutToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :age, :integer
    add_column :users, :location, :string
    add_column :users, :gender, :string
    add_column :users, :avatar_url, :string
    add_column :users, :about, :string
  end
end
