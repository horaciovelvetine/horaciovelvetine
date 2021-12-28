class CreateTodosTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :todos, :tags, column_options: { null: false, foreign_key: true } do |t|
      t.index [:todo_id, :tag_id]
      t.index [:tag_id, :todo_id]
    end
  end
end
