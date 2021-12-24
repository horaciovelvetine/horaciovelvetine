class CreateLinkGroups < ActiveRecord::Migration[6.1]
  def change
    create_table :link_groups do |t|
      t.string :name
      t.boolean :pinned
      t.belongs_to :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
