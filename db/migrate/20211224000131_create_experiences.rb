class CreateExperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :experiences do |t|
      t.string :title
      t.belongs_to :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
