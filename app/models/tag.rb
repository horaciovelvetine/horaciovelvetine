class Tag < ApplicationRecord
    belongs_to :admin


    ## Adds all joins relationships to make other objects taggable
    has_and_belongs_to_many :recipes
    has_and_belongs_to_many :links
    has_and_belongs_to_many :link_groups
    has_and_belongs_to_many :journal_entries
    has_and_belongs_to_many :todos

end
