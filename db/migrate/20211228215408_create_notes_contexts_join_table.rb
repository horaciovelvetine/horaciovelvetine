class CreateNotesContextsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :notes, :contexts, column_options: { null: false, foreign_key: true } do |t|
      t.index [:note_id, :context_id]
      t.index [:context_id, :note_id]
    end
  end
end