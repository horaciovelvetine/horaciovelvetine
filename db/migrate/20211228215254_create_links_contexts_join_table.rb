class CreateLinksContextsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :links, :contexts do |t|
      t.index [:link_id, :context_id]
      t.index [:context_id, :link_id]
    end
  end
end
