class JournalEntry < ApplicationRecord
  belongs_to :recipe

  has_one :date, as: :dateable
  has_many :notes, as: :noteable
  has_many :ingredients
  has_many :steps
  has_many :links, as: :linkable

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :contexts
end
