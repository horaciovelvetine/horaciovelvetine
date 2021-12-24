class CreateResumes < ActiveRecord::Migration[6.1]
  def change
    create_table :resumes do |t|
      t.string :name
      t.string :version
      t.bigint :content_id
      t.string :content_type

      t.belongs_to :admin, null: false, foreign_key: true
      t.timestamps
    end
  end
end
