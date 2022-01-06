class CreateDateUtilsContextsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :date_utils, :contexts, column_options: { null: false, foreign_key: true} do |t|
      t.index [:date_util_id, :context_id]
      t.index [:context_id, :date_util_id]
    end
  end
end