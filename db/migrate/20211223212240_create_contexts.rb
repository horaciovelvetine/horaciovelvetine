class CreateContexts < ActiveRecord::Migration[6.1]
  def change
    create_table :contexts do |t|
      t.string :name
      t.belongs_to :admin, null: false, foreign_key: true
      t.timestamps
    end
  end
end
