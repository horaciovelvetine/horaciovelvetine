class CreateLinksLinkGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :links_link_groups do |t|
      t.string :link
      t.string :link_group

      t.timestamps
    end
    add_index :links_link_groups, :link
    add_index :links_link_groups, :link_group
  end
end
