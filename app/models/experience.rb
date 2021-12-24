class Experience < ApplicationRecord
  belongs_to :admin

  has_one :date, as: :dateable
  has_many :notes, as: :noteable
  has_many :links, as: :linkable
  
end
