class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :desc
      t.boolean :flagged
      t.boolean :ongoing
      t.belongs_to :context, null: false, foreign_key: true

      t.timestamps
    end
  end
end
