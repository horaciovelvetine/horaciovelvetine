class CreateGroceryLists < ActiveRecord::Migration[6.1]
  def change
    create_table :grocery_lists do |t|

      t.timestamps
    end
  end
end
