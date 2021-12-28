class CreateNotesContextsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :notes, :contexts do |t|
      t.index [:note_id, :context_id]
      t.index [:context_id, :note_id]
    end
  end
end
