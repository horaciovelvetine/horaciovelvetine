class Recipe < ApplicationRecord
  belongs_to :context

  has_one :link, as: :linkable

  has_many :steps
  has_many :ingredients
  has_many :notes, as: :noteable
  has_many :journal_entries

  has_and_belongs_to_many :tags
end
