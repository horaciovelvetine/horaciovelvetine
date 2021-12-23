class CreateStates < ActiveRecord::Migration[6.1]
  def change
    create_table :states do |t|
      t.belongs_to :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
