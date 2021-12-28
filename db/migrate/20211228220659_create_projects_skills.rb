class CreateProjectsSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :projects_skills, column_options: { null: false, foreign_key: true } do |t|
      t.string :project
      t.string :skill

      t.timestamps
    end
    add_index :projects_skills, :project
    add_index :projects_skills, :skill
  end
end
