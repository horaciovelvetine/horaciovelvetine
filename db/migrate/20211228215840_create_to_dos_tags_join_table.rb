class CreateToDosTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :to_dos, :tags, column_options: { null: false, foreign_key: true } do |t|
      t.index [:to_do_id, :tag_id]
      t.index [:tag_id, :to_do_id]
    end
  end
end
