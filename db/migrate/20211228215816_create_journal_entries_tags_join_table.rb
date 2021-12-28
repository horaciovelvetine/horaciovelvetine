class CreateJournalEntriesTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :journal_entries, :tags do |t|
      t.index [:journal_entry_id, :tag_id]
      t.index [:tag_id, :journal_entry_id]
    end
  end
end
