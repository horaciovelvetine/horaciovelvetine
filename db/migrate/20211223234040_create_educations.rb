class CreateEducations < ActiveRecord::Migration[6.1]
  def change
    create_table :educations do |t|
      t.string :level
      t.string :program
      t.belongs_to :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
