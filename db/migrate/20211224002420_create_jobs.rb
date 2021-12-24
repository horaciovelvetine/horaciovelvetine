class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :desc
      t.string :salary
      t.string :location
      t.belongs_to :company, null: false, foreign_key: true
      t.belongs_to :contact_info, null: false, foreign_key: true

      t.timestamps
    end
  end
end
