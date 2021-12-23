class CreateLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :name
      t.string :text
      t.string :desc
      t.boolean :pinned
      t.bigint :linkable_id
      t.string :linkable_type

      t.belongs_to :context, null: false, foreign_key: true

      t.timestamps
    end
  end
end
