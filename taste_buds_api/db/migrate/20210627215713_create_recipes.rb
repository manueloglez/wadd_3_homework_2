class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.text :story
      t.text :description
      t.integer :serving
      t.boolean :spicy
      t.boolean :sweet
      t.boolean :salty
      t.timestamps
    end
  end
end
