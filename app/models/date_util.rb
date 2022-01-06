class DateUtil < ApplicationRecord
    belongs_to :dateable, polymorphic: true

    has_and_belongs_to_many :contexts
end
