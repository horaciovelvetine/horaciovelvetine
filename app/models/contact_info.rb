class ContactInfo < ApplicationRecord
    has_many :links, as: :linkable
    belongs_to :admin
end
