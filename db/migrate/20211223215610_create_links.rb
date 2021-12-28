class CreateLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :name
      t.string :text
      t.string :desc
      t.boolean :pinned
      t.bigint :linkable_id
      t.string :linkable_type

      t.timestamps
    end
    add_index :links, :name
    add_index :links, :text
  end
end
