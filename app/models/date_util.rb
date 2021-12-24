class DateUtil < ApplicationRecord
    belongs_to :dateable, polymorphic: true
end
