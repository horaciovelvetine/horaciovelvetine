class CreateDateUtils < ActiveRecord::Migration[6.1]
  def change
    create_table :date_utils do |t|
      t.date :start
      t.date :end
      t.date :on
      t.boolean :ongoing

      t.bigint :dateable_id
      t.string :dateable_type

      t.timestamps
    end
  end
end
