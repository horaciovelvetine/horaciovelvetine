class Note < ApplicationRecord
    belongs_to :noteable, polymorphic: true
    
    has_and_belongs_to_many :contexts
end
