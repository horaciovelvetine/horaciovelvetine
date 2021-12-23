class DateUtil < ApplicationRecord
    belongs_to :noteable, polymorphic: true
end
