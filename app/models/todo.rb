class Todo < ApplicationRecord
  belongs_to :context

  has_one :link
  has_one :grocery_list
  has_one :date_util
  has_one :contact_info

  has_and_belongs_to_many :tags
end
