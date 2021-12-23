class Skill < ApplicationRecord

    has_and_belongs_to_many :contexts

    has_many :links, as: :linkable
end
