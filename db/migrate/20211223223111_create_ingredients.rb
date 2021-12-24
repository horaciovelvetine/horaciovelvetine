class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :text
      t.belongs_to :recipe, null: false, foreign_key: true
      t.belongs_to :journal_entry, null: false, foreign_key: true
      t.belongs_to :grocery_list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
