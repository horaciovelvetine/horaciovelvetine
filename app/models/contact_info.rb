class ContactInfo < ApplicationRecord
    has_many :links, as: :linkable ##contexted
    belongs_to :admin
end
