class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.belongs_to :contact_info, null: false, foreign_key: true

      t.timestamps
    end
  end
end
