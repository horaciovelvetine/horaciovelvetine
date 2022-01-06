class CreateRecipesTagsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :recipes, :tags, column_options: { null: false, foreign_key: true } do |t|
      t.index [:recipe_id, :tag_id]
      t.index [:tag_id, :recipe_id]
    end
  end
end
