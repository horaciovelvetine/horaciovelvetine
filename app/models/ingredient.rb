class Ingredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :journal_entry
  belongs_to :grocery_list
end
