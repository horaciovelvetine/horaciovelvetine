class ToDo < ApplicationRecord
  belongs_to :context

  has_one :link, optional: true
  has_one :grocery_list
  has_one :date_util, optional: true
  has_one :contact_info, optional: true

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :contexts
end
