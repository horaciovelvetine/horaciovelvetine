class Company < ApplicationRecord
  belongs_to :contact_info

  has_many :jobs
  has_many :notes, as: :noteable
  has_many :links, as: :linkable
  
end
