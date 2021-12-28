class CreateLinkGroupsTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :link_groups, :tags, column_options: { null: false, foreign_key: true } do |t|
      t.index [:link_group_id, :tag_id]
      t.index [:tag_id, :link_group_id]
    end
  end
end
