class ToDosContextsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :to_dos, :contexts, column_options: { null: false, foreign_key: true } do |t|
      t.index [:to_do_id, :context_id]
      t.index [:context_id, :to_do_id]
    end
  end
end

