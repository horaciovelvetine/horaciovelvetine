class Context < ApplicationRecord
belongs_to :admin

    has_and_belongs_to_many :links
    has_and_belongs_to_many :jobs
    has_and_belongs_to_many :notes
    has_and_belongs_to_many :journal_entries
    has_and_belongs_to_many :skills

end
