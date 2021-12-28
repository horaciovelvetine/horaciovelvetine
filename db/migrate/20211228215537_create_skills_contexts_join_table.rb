class CreateSkillsContextsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :skills, :contexts do |t|
      t.index [:skill_id, :context_id]
      t.index [:context_id, :skill_id]
    end
  end
end
