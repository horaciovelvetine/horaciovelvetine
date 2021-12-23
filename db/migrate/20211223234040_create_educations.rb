class CreateEducations < ActiveRecord::Migration[6.1]
  def change
    create_table :educations do |t|
      t.string :level
      t.string :program

      t.timestamps
    end
  end
end
