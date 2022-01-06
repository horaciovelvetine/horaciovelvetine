class CreateToDos < ActiveRecord::Migration[6.1]
  def change
    create_table :to_dos do |t|
      t.string :name
      t.text :desc
      t.boolean :flagged
      t.boolean :ongoing

      t.timestamps
    end
  end
end
