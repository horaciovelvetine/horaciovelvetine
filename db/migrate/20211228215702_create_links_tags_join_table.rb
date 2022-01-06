class CreateLinksTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :links, :tags, column_options: { null: false, foreign_key: true } do |t|
      t.index [:link_id, :tag_id]
      t.index [:tag_id, :link_id]
    end
  end
end
