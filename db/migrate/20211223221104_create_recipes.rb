class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :time
      t.string :serves
      t.string :desc

      t.timestamps
    end
    add_index :recipes, :name
  end
end
