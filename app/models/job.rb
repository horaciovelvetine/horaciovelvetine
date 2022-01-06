class Job < ApplicationRecord
  belongs_to :company
  belongs_to :contact_info

  has_one :resume

  has_many :notes, as: :noteable
  has_many :links, as: :linkable
  ##? Reference to issue #30 self
  has_many :dates, as: :dateable

  has_and_belongs_to_many :contexts

end
