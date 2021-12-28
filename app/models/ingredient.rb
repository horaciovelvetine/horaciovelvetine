class Ingredient < ApplicationRecord
  belongs_to :recipe, optional: true
  belongs_to :journal_entry, optional: true
  belongs_to :grocery_list, optional: true

  has_many :notes, as: :noteable
end
