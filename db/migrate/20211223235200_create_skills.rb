class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.string :title
      t.string :description

      t.belongs_to :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
