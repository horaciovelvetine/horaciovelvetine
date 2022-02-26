class CreateBookmarkrConfigurators < ActiveRecord::Migration[6.1]
  def change
    create_table :bookmarkr_configurators do |t|

      t.timestamps
    end
  end
end
