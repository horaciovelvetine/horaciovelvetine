class CreateLinkGroupsTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :link_groups, :tags do |t|
      t.index [:link_group_id, :tag_id]
      t.index [:tag_id, :link_group_id]
    end
  end
end
