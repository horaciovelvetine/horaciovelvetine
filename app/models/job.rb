class Job < ApplicationRecord
  belongs_to :company
  belongs_to :contact_info
end
