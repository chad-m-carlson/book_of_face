class AddAboutColumnToPerson < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :about, :text
  end
end
