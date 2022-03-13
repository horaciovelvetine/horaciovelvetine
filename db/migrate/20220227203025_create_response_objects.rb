class CreateResponseObjects < ActiveRecord::Migration[6.1]
  def change
    create_table :response_objects do |t|

      t.timestamps
    end
  end
end
