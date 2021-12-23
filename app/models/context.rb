class Context < ApplicationRecord

    has_and_belongs_to_many :links
    has_and_belongs_to_many :jobs

end
