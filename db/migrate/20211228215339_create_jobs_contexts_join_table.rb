class CreateJobsContextsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :jobs, :contexts do |t|
      t.index [:job_id, :context_id]
      t.index [:context_id, :job_id]
    end
  end
end
