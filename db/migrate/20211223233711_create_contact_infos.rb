class CreateContactInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :contact_infos do |t|
      t.string :first
      t.string :last
      t.string :pseudo
      t.string :phone
      t.string :email
      t.string :email_alt

      t.timestamps
    end
  end
end
