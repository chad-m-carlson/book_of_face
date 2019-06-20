class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :person_id
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
