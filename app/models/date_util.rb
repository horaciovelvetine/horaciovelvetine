class DateUtil < ApplicationRecord
    belongs_to :dateable, polymorphic: true, optional: true

end
