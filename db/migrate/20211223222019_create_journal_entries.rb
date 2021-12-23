class CreateJournalEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :journal_entries do |t|
      t.string :title
      t.string :body
      t.integer :stars
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
