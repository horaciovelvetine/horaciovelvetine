class Context < ApplicationRecord

    has_and_belongs_to_many :links
    has_and_belongs_to_many :jobs
    has_and_belongs_to_many :notes
    has_and_belongs_to_many :journal_entries

end
