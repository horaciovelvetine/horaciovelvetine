class ToDo < ApplicationRecord
  has_many :links, as: :linkable
  has_many :dates, as: :dateable
  has_many :notes, as: :noteable

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :contexts
end
