class Skill < ApplicationRecord

    has_and_belongs_to_many :contexts
    has_and_belongs_to_many :projects

    has_many :links, as: :linkable
end
