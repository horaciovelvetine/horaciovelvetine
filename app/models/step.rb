class Step < ApplicationRecord
  belongs_to :recipe, optional: true
  belongs_to :journal_entry, optional: true

  has_many :notes, as: :noteable
end
