class CreateLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :name
      t.string :href
      t.boolean :pinned
      t.bigint :linkable_id, null: true
      t.string :linkable_type, null: true

      t.timestamps
    end
    add_index :links, :name
  end
end
