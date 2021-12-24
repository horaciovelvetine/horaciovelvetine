class CreateStatements < ActiveRecord::Migration[6.1]
  def change
    create_table :statements do |t|
      t.string :name
      t.string :body
      t.belongs_to :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
