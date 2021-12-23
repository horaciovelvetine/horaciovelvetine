class ContactInfo < ApplicationRecord
    has_many :links, as: :linkable ##contexted
end
