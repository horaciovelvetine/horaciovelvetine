class Education < ApplicationRecord
    has_one :date, as: :dateable
    has_one :link, as: :linkable
    belongs_to :admin
end
