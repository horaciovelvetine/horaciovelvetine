class AddJobsToResumes < ActiveRecord::Migration[6.1]
  def change
    add_reference :resumes, :jobs, null: true, foreign_key: true
  end
end
