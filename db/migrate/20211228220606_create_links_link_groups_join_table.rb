class CreateLinksLinkGroups < ActiveRecord::Migration[6.1]
  def change
    create_join_table :links, :link_groups, column_options: { null: false, foreign_key: true } do |t|
      t.index [:link_group_id, :link_id]
      t.index [:link_id, :link_group_id]
    end
  end
end
