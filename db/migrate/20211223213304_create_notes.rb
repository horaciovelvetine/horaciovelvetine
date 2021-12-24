class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :text
      t.bigint :noteable_id
      t.string :noteable_type

      t.timestamps
    end
    add_index :notes, [:noteable_type, :noteable_id]
  end
end
