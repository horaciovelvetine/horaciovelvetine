class Recipe < ApplicationRecord

  has_many :steps
  has_many :ingredients
  has_many :journal_entries
  
  has_many :links, as: :linkable
  has_many :notes, as: :noteable

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :contexts
end
