class Project < ApplicationRecord
    has_many :links, as: :linkable
    has_many :notes, as: :noteable
    has_and_belongs_to_many :skills
end
