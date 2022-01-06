class CreateProjectsSkillsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :projects, :skills, column_options: { null: false, foreign_key: true } do |t|
      t.index [:project_id, :skill_id]
      t.index [:skill_id, :project_id]
    end
  end
end
