class GroceryList < ApplicationRecord
  belongs_to :todo

  has_many :recipes
  has_many :ingredients
end
