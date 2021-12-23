class Resume < ApplicationRecord

    has_many :links, as: :linkable
    has_many :skills
    has_many :educations
    has_many :experiences
    has_one :contact_info
    has_one :statement

end
