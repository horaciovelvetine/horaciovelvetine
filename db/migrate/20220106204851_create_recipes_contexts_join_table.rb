class CreateRecipesContextsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :recipes, :contexts, column_options: { null: false, foreign_key: true} do |t|
      t.index [:recipe_id, :context_id]
      t.index [:context_id, :recipe_id]
    end
  end
end
