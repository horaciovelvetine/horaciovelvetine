class JournalEntry < ApplicationRecord
  belongs_to :recipe

  has_one :date
  has_many :notes
  has_many :ingredients
  has_many :steps
  has_many :links

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :contexts
end
