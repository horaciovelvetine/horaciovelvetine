class Step < ApplicationRecord
  belongs_to :recipe
  belongs_to :journal_entry

  has_many :notes, as :noteable
end
